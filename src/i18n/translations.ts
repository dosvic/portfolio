export const translations = {
  en: {
    hero: {
      subtitle: 'software engineer · vienna',
      bio: 'Fintech full-stack engineer with experience across KYC, payments, and digital storefronts. I currently ship production work with Jakarta EE, Oracle/Postgres, Angular, Kafka, and AWS.',
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
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
    },
    projects: {
      selectedWork: 'selected work',
      openLink: 'open',
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
      bio: 'Fintech Full-Stack Entwickler mit Erfahrung in KYC, Zahlungsabwicklung und E-Commerce. Ich entwickle derzeit Produktionslösungen mit Jakarta EE, Oracle/Postgres, Angular, Kafka und AWS.',
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
      projects: 'Projekte',
      skills: 'Skills',
      certifications: 'Zertifizierungen',
      education: 'Ausbildung',
    },
    projects: {
      selectedWork: 'ausgewählte arbeiten',
      openLink: 'öffnen',
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
