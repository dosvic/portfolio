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
    experience: {
      company: 'PaysafeCard',
      period: '2021 — Present',
      summary: 'Full-stack work across payments, KYC, and digital storefronts to improve reliability and launch new payment options.',
      roles: {
        engineer: 'Software Engineer',
        junior: 'Junior Software Engineer',
        trainee: 'Engineering Trainee',
      },
    },
    projects: {
      selectedWork: 'Selected work',
      thisWebsite: {
        name: 'This website',
        description: "Astro + Tailwind portfolio deployed on Cloudflare Workers",
      },
      openLink: 'Open',
    },
    certifications: {
      aws: {
        title: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services Training and Certification',
        description: 'Earners design secure, resilient, and efficient architectures on AWS aligned to customer requirements.',
      },
      credentialLink: 'Credential',
    },
    education: {
      university: {
        degree: 'BSc Computer Science',
        institution: 'University of Applied Sciences Technikum Wien',
        period: '2021 — 2023',
      },
      htl: {
        degree: 'Upper Secondary Technical School',
        institution: 'HTL Donaustadt',
        period: '2015 — 2020',
      },
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
    experience: {
      company: 'PaysafeCard',
      period: '2021 — Heute',
      summary: 'Full-Stack-Arbeit über Zahlungen, KYC und E-Commerce, um die Zuverlässigkeit zu verbessern und neue Zahlungsoptionen einzuführen.',
      roles: {
        engineer: 'Software Entwickler',
        junior: 'Junior Software Entwickler',
        trainee: 'Engineering-Trainee',
      },
    },
    projects: {
      selectedWork: 'Ausgewählte Arbeiten',
      thisWebsite: {
        name: 'Diese Website',
        description: 'Astro + Tailwind Portfolio, bereitgestellt auf Cloudflare Workers',
      },
      openLink: 'Öffnen',
    },
    certifications: {
      aws: {
        title: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services Training and Certification',
        description: 'Inhaber entwerfen sichere, belastbare und effiziente Architekturen auf AWS, die an Kundenanforderungen ausgerichtet sind.',
      },
      credentialLink: 'Zertifikat',
    },
    education: {
      university: {
        degree: 'BSc Informatik',
        institution: 'Fachhochschule Technikum Wien',
        period: '2021 — 2023',
      },
      htl: {
        degree: 'Höhere Technische Lehranstalt',
        institution: 'HTL Donaustadt',
        period: '2015 — 2020',
      },
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
