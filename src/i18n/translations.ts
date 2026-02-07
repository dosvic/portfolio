export const translations = {
  en: {
    hero: {
      subtitle: 'Software engineer',
      bio: 'Fintech full-stack engineer with experience across KYC, payments, and digital storefronts. I currently ship production work with Jakarta EE, Oracle/Postgres, Angular, Kafka, and AWS.',
    },
    nav: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    sections: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
    },
    projects: {
      selectedWork: 'Selected work',
      openLink: 'Open',
    },
    certifications: {
      credentialLink: 'Credential',
    },
    footer: {
      copyright: '© {year} Deniz Osmanovic.',
    },
    meta: {
      title: 'Deniz Osmanovic · Software Engineer',
      description: 'Portfolio and selected work by Deniz Osmanovic, a software engineer focused on product-driven web experiences.',
    },
  },
  de: {
    hero: {
      subtitle: 'Software Entwickler',
      bio: 'Fintech Full-Stack Entwickler mit Erfahrung in KYC, Zahlungsabwicklung und E-Commerce. Ich entwickle derzeit Produktionslösungen mit Jakarta EE, Oracle/Postgres, Angular, Kafka und AWS.',
    },
    nav: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    sections: {
      experience: 'Berufserfahrung',
      projects: 'Projekte',
      skills: 'Skills',
      certifications: 'Zertifizierungen',
      education: 'Ausbildung',
    },
    projects: {
      selectedWork: 'Ausgewählte Arbeiten',
      openLink: 'Öffnen',
    },
    certifications: {
      credentialLink: 'Zertifikat',
    },
    footer: {
      copyright: '© {year} Deniz Osmanovic.',
    },
    meta: {
      title: 'Deniz Osmanovic · Software Entwickler',
      description: 'Portfolio und ausgewählte Arbeiten von Deniz Osmanovic, einem Software Entwickler mit Fokus auf produktgetriebene Web-Erfahrungen.',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = typeof translations.en;
