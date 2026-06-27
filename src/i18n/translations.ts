export const translations = {
  en: {
    hero: {
      subtitle: 'software engineer · vienna',
      bio: 'Software engineer with 5+ years of experience building scalable applications, customer-facing platform capabilities, and payment and checkout processes.',
      prompt: 'whoami',
      linksPrompt: 'links',
    },
    nav: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Vienna',
      system: 'DENIZ.OSMANOVIC.SYS',
      lang: 'LANG',
    },
    sections: {
      experience: 'Experience',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
    },
    certifications: {
      credentialLink: 'credential',
    },
    footer: {
      copyright: '© {year} Deniz Osmanovic.',
      eof: 'EOF',
      uptimeLabel: 'uptime',
      waiting: 'awaiting input',
    },
    meta: {
      title: 'Deniz Osmanovic · Software Engineer',
      description: 'Portfolio and selected work by Deniz Osmanovic, a software engineer focused on product-driven web experiences.',
    },
  },
  de: {
    hero: {
      subtitle: 'software entwickler · wien',
      bio: 'Softwareentwickler mit über 5 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen, kundenorientierter Plattformfunktionen sowie Payment- und Checkout-Prozesse.',
      prompt: 'whoami',
      linksPrompt: 'links',
    },
    nav: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      location: 'Wien',
      system: 'DENIZ.OSMANOVIC.SYS',
      lang: 'SPR',
    },
    sections: {
      experience: 'Berufserfahrung',
      skills: 'Skills',
      certifications: 'Zertifizierungen',
      education: 'Ausbildung',
    },
    certifications: {
      credentialLink: 'zertifikat',
    },
    footer: {
      copyright: '© {year} Deniz Osmanovic.',
      eof: 'EOF',
      uptimeLabel: 'uptime',
      waiting: 'warte auf eingabe',
    },
    meta: {
      title: 'Deniz Osmanovic · Software Entwickler',
      description: 'Portfolio und ausgewählte Arbeiten von Deniz Osmanovic, einem Software Entwickler mit Fokus auf produktgetriebene Web-Erfahrungen.',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
