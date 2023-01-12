import { z } from "zod";

const SkillTextValidator = z.object({
  id: z.number().positive(),
  heading: z.string().min(5).optional(),
  para1: z.string().min(10).optional(),
  para2: z.string().min(10).optional(),
  para3: z.string().min(10).optional(),
  para4: z.string().min(10).optional(),
  para5: z.string().min(10).optional(),
  para6: z.string().min(10).optional(),
  para7: z.string().min(10).optional(),
  para8: z.string().min(10).optional(),
  para9: z.string().min(10).optional(),
  para10: z.string().min(10).optional(),
});

export type SkillText = z.infer<typeof SkillTextValidator>;

export const SkillsTexts: SkillText[] = [
  {
    id: 1,
    heading: "Languages",
    para1: "1. JavaScript",
    para2: "2. TypeScript",
    para3: "3. Rust",
  },
  {
    id: 2,
    heading: "Frameworks",
    para1: "1. Next.js",
    para2: "2. Astro",
    para3: "3. Tauri",
  },
  {
    id: 3,
    heading: "Libraries",
    para1: "1. React.js, React Native, and Expo",
    para2: "2. Redux Toolkit, React Query, Zustand, and Zod",
    para3: "3. Framer Motion, Apache ECharts, and Storybook",
  },
  {
    id: 4,
    heading: "UI",
    para1: "Tailwind CSS, daisy UI, Material UI, and Bootstrap",
  },
  {
    id: 5,
    heading: "Backend",
    para1:
      "Prisma, tRPC, MySQL, PostgreSQL, Firebase Cloud Firestore, Railway, and PlanetScale",
  },
  {
    id: 6,
    heading: "Authentication",
    para1: "NextAuth.js, Firebase Authentication, and Auth0",
  },
  {
    id: 7,
    heading: "Deployment",
    para1: "Docker, GitHub Pages, Heroku, Netlify, and Vercel",
  },
  {
    id: 8,
    heading: "Tools",
    para1: "1. VS Code, GitHub, GitPod, and CodeSpaces",
    para2: "2. Eslint, Prettier, and Husky",
  },
];
