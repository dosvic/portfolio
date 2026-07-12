#!/usr/bin/env bash
set -euo pipefail

base_url="${1:-https://denizosmanovic.com}"
temporary_directory="$(mktemp -d)"
trap 'rm -rf "$temporary_directory"' EXIT

request() {
  local path="$1"
  local name="$2"
  curl --silent --show-error --max-time 20 --retry 6 --retry-delay 2 \
    --header "Sec-Fetch-Mode: navigate" \
    --dump-header "$temporary_directory/$name.headers" \
    --output "$temporary_directory/$name.body" \
    "$base_url$path"
}

wait_for_status() {
  local path="$1"
  local name="$2"
  local expected_status="$3"
  local attempt
  for attempt in {1..6}; do
    request "$path" "$name"
    if [[ "$(status "$temporary_directory/$name.headers")" == "$expected_status" ]]; then
      return 0
    fi
    sleep 2
  done
  return 1
}

status() {
  awk 'toupper($1) ~ /^HTTP\// { code=$2 } END { print code }' "$1"
}

header() {
  local file="$1"
  local name="$2"
  awk -F ': *' -v wanted="$name" 'tolower($1) == tolower(wanted) { sub(/\r$/, "", $2); print $2 }' "$file"
}

assert_response() {
  local name="$1"
  local expected_status="$2"
  local actual_status
  actual_status="$(status "$temporary_directory/$name.headers")"
  if [[ "$actual_status" != "$expected_status" ]]; then
    echo "$name: expected HTTP $expected_status, received $actual_status" >&2
    exit 1
  fi
}

wait_for_status "/" root 301
assert_response root 301
[[ "$(header "$temporary_directory/root.headers" location)" == "/en/" ]]

wait_for_status "/index.html" root_index 301
wait_for_status "/en/index.html" en_index 301
wait_for_status "/de/index.html" de_index 301
assert_response root_index 301
assert_response en_index 301
assert_response de_index 301
[[ "$(header "$temporary_directory/root_index.headers" location)" == "/en/" ]]
[[ "$(header "$temporary_directory/en_index.headers" location)" == "/en/" ]]
[[ "$(header "$temporary_directory/de_index.headers" location)" == "/de/" ]]

wait_for_status "/en/" en 200
wait_for_status "/de/" de 200
assert_response en 200
assert_response de 200
grep -q "Deniz Osmanovic" "$temporary_directory/en.body"
grep -q "Berufserfahrung" "$temporary_directory/de.body"

for name in en de; do
  headers="$temporary_directory/$name.headers"
  [[ "$(header "$headers" content-type)" == text/html* ]]
  [[ "$(header "$headers" cache-control)" == "public, max-age=0, must-revalidate" ]]
  [[ "$(header "$headers" x-frame-options)" == "DENY" ]]
  [[ "$(header "$headers" x-content-type-options)" == "nosniff" ]]
  [[ "$(header "$headers" referrer-policy)" == "same-origin" ]]
  csp="$(header "$headers" content-security-policy)"
  [[ "$csp" == *"style-src 'self'"* ]]
  [[ "$csp" != *"unsafe-inline"* ]]
done

wait_for_status "/missing" missing_en 404
wait_for_status "/de/missing" missing_de 404
assert_response missing_en 404
assert_response missing_de 404

wait_for_status "/assets/css/site.css" css 200
wait_for_status "/assets/js/site.js" js 200
wait_for_status "/assets/fonts/ibm-plex-mono-latin-400-normal.woff2" font 200
wait_for_status "/favicon.svg" favicon 200
wait_for_status "/sitemap.xml" sitemap 200
wait_for_status "/robots.txt" robots 200

for name in css js font favicon sitemap robots; do
  assert_response "$name" 200
done

[[ "$(header "$temporary_directory/css.headers" content-type)" == text/css* ]]
[[ "$(header "$temporary_directory/js.headers" content-type)" == *javascript* ]]
[[ "$(header "$temporary_directory/font.headers" content-type)" == font/woff2* ]]
[[ "$(header "$temporary_directory/favicon.headers" content-type)" == image/svg+xml* ]]
[[ "$(header "$temporary_directory/css.headers" cache-control)" == "public, max-age=0, must-revalidate" ]]
[[ "$(header "$temporary_directory/js.headers" cache-control)" == "public, max-age=0, must-revalidate" ]]
[[ "$(header "$temporary_directory/font.headers" cache-control)" == "public, max-age=31536000, immutable" ]]
[[ "$(header "$temporary_directory/favicon.headers" cache-control)" == "public, max-age=86400, must-revalidate" ]]
[[ "$(header "$temporary_directory/sitemap.headers" cache-control)" == "public, max-age=3600, must-revalidate" ]]
[[ "$(header "$temporary_directory/robots.headers" cache-control)" == "public, max-age=3600, must-revalidate" ]]

echo "Live deployment verification passed for $base_url."
