/**
 * All competition content lives here — edit this file to update the site.
 *
 * Values wrapped in [square brackets] are PLACEHOLDERS. Replace them with the
 * real information before launch. Nothing here has been invented: unknown
 * facts are left as clearly marked placeholders.
 *
 * Structurally ready for en/ar/fi: to add a translation, create a second
 * object of type `Competition` and a matching page (e.g. src/pages/ar/index.astro
 * with <html lang="ar" dir="rtl">).
 */

export interface Category {
  name: string;
  description: string;
}

export interface InfoItem {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Competition {
  name: string;
  tagline: string;
  date: string;
  time: string;
  location: string;
  /** External registration link. Set to a URL to make all CTAs link directly to it. */
  registrationUrl: string | null;
  registrationDeadline: string;
  eligibility: string;
  requirements: string;
  about: {
    purpose: string;
    objectives: string[];
  };
  categories: Category[];
  contact: {
    email: string;
    socialLinks: SocialLink[];
  };
}

export const competition: Competition = {
  name: 'Tampere Quran Competition',
  tagline:
    'A community Quran competition in Tampere, bringing people together around the recitation and memorization of the Quran.',

  date: '[Date — to be announced]',
  time: '[Time — to be announced]',
  location: '[Venue — to be announced], Tampere',

  registrationUrl: null,
  registrationDeadline: '[Registration deadline — to be announced]',
  eligibility: '[Eligibility — to be announced]',
  requirements: '[Requirements — to be announced]',

  about: {
    purpose:
      'The Tampere Quran Competition invites the community to celebrate the Quran together in a welcoming, encouraging atmosphere.',
    objectives: [
      'Encourage the recitation and memorization of the Quran.',
      'Support learners of every age and level.',
      'Bring the community together around a shared occasion.',
    ],
  },

  categories: [
    {
      name: '[Category 1 — name]',
      description: '[Describe who this category is for and what it covers.]',
    },
    {
      name: '[Category 2 — name]',
      description: '[Describe who this category is for and what it covers.]',
    },
    {
      name: '[Category 3 — name]',
      description: '[Describe who this category is for and what it covers.]',
    },
  ],

  contact: {
    email: '[contact email — to be added]',
    socialLinks: [
      // { label: 'Instagram', url: 'https://…' },
    ],
  },
};
