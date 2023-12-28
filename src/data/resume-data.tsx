import { GitHubIcon } from '~/components/icons/GitHubIcon';
import { LinkedInIcon } from '~/components/icons/LinkedInIcon';
import { XIcon } from '~/components/icons/XIcon';

export const RESUME_DATA = {
  name: 'Devin Metivier',
  initials: 'DM',
  location: 'Michigan, USA',
  locationLink: 'https://www.google.com/maps/place/Michigan',
  title: 'Full Stack Engineer',
  about: 'Full Stack Engineer focused on building software through the art of storytelling',
  summary:
    'As a Full Stack Engineer, I have brought many projects to success; Most notably involving content production and e-commerce. Currently, I work mostly with TypeScript, React, Next.js, and Node.js. I have over 5 years of experience working remotely with companies across the continental US.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/6579532?v=4',
  personalWebsiteUrl: 'https://devinmetivier.com',
  contact: {
    email: 'devinmetivier@gmail.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/devjmetivier',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/devjmetivier/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/devjmetivier',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Full Sail University',
      degree: 'Web Design & Development (BS)',
      start: 'Sep 2013',
      end: 'Dec 2015',
    },
  ],
  work: [
    {
      company: 'Delicious Simplicity',
      link: 'https://www.delicious-simplicity.com',
      badges: ['Remote'],
      title: 'Senior Software Engineer',
      start: 'Aug 2021',
      end: 'Present',
      description:
        'Currently orchestrating services to create a seamless experience for our customers and their users. Focusing mainly on publications, nonprofit organizations, e-commerce and video content platforms. Technologies: React, Next.js, Node.js, tRPC and more.', // TODO
    },
    {
      company: 'Little Caesars Pizza',
      link: 'https://littlecaesars.com',
      badges: ['Hybrid', 'Remote'],
      title: 'Software Engineer',
      start: 'Jun 2019',
      end: 'Aug 2021',
      description:
        'Created internal tools for managing restaurant menus & digital displays across the globe. Built and shipped Little Caesars online ordering on the web. Lead efforts for build and general application optimizations for web properties. Technologies: React, Gatsby, GraphQL, Node.js, and more.', // TODO
    },
    {
      company: 'Nextep Systems',
      link: 'https://www.nextepsystems.com',
      badges: [],
      title: 'Web Developer',
      start: 'Mar 2018',
      end: 'Jun 2019',
      description:
        'Built self-service kiosk software for the Fast Casual Restaurant and Convenince Retail industries. Customers included: Subway, Which Wich, Wow Bao and Buffalo Boss.',
    },
    {
      company: 'Revize Software Systems',
      link: 'https://www.revize.com',
      badges: [],
      title: 'Web Developer',
      start: 'Mar 2017',
      end: 'Mar 2018',
      description: 'Built municipal websites across the continental US',
    },
  ],
  skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'GraphQL'],
  projects: [
    {
      title: 'statcodes.dev',
      techStack: ['[DS]', 'Side Project', 'TypeScript', 'React', 'Next.js'],
      description: 'Your one stop shop for HTTP status code references',
      link: {
        label: 'statcodes.dev',
        href: 'https://www.statcodes.dev/',
      },
    },
    {
      title: 'browserdetails.app',
      techStack: ['[DS]', 'Side Project', 'TypeScript', 'React', 'Next.js'],
      description: 'Detect browser details with ease',
      link: {
        label: 'browserdetails.app',
        href: 'https://browserdetails.app',
      },
    },
  ],
  contributions: [
    {
      package: 'hookit',
      description: 'Some nifty React hooks',
      link: {
        label: 'hookit',
        href: 'https://github.com/devjmetivier/hookit',
      },
    },
    {
      package: 'next-image-contentful-loader',
      description: 'A comprehensive Contentful image loader for the Next.js Image component',
      link: {
        label: 'next-image-contentful-loader',
        href: 'https://github.com/delicious-simplicity/next-image-contentful-loader',
      },
    },
    {
      package: 'next-image-imgix-loader',
      description: 'A comprehensive Imgix image loader for the Next.js Image component',
      link: {
        label: 'next-image-imgix-loader',
        href: 'https://github.com/delicious-simplicity/next-image-imgix-loader',
      },
    },
    {
      package: 'iron-session',
      description: 'Secure, stateless, and cookie-based session library for JavaScript',
      link: {
        label: 'iron-session',
        href: 'https://github.com/renchris/iron-session/pulls?q=is%3Apr+is%3Aclosed+author%3Adevjmetivier',
      },
    },
    {
      package: 'jsx-email',
      description: 'Build emails with a delightful DX',
      link: {
        label: 'jsx-email',
        href: 'https://github.com/shellscape/jsx-email/pulls?q=is%3Apr+author%3Adevjmetivier+is%3Aclosed',
      },
    },
    {
      package: 'gatsby-plugin-page-progress',
      description: 'A progress bar for Gatsby pages',
      link: {
        label: 'gatsby-plugin-page-progress',
        href: 'https://github.com/devjmetivier/gatsby-plugin-page-progress',
      },
    },
  ],
} as const;
