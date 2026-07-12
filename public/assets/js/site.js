(() => {
  const now = new Date();
  const currentDate = now.toISOString().slice(0, 10);
  const currentYear = String(now.getFullYear());
  const careerStart = new Date(2021, 6, 1);
  const months = Math.max(
    0,
    (now.getFullYear() - careerStart.getFullYear()) * 12 +
      now.getMonth() - careerStart.getMonth(),
  );
  const uptime = `${Math.floor(months / 12)}y ${months % 12}m`;

  document.querySelectorAll("[data-current-date]").forEach((element) => {
    element.textContent = currentDate;
    element.setAttribute("datetime", currentDate);
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = currentYear;
  });

  document.querySelectorAll("[data-uptime]").forEach((element) => {
    element.textContent = uptime;
  });
})();
