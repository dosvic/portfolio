import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    company: z.string(),
    period: z.string(),
    summary: z.string(),
    roles: z.array(z.object({
      title: z.string(),
      period: z.string(),
    })),
  })),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    name: z.string(),
    description: z.string(),
    link: z.string().url(),
  })),
});

const certificationsCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    title: z.string(),
    issuer: z.string(),
    description: z.string(),
    credentialUrl: z.string().url(),
  })),
});

const educationCollection = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
  })),
});

export const collections = {
  experience: experienceCollection,
  projects: projectsCollection,
  certifications: certificationsCollection,
  education: educationCollection,
};
