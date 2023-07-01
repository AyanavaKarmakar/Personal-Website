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
    para3: "3. Java",
  },
  {
    id: 2,
    heading: "Frameworks",
    para1: "1. Next.js",
    para2: "2. Express.js",
    para3: "3. Angular",
    para4: "4. React Native",
  },
  {
    id: 3,
    heading: "Libraries",
    para1: "1. React.js, Expo, React Router, and React Native Router",
    para2: "2. Redux Toolkit, React Query, Zustand, and Zod",
    para3: "3. Framer Motion, Apache ECharts, and Storybook",
  },
  {
    id: 4,
    heading: "UI",
    para1: "Vanilla CSS, Tailwind CSS, daisy UI, Material UI, and Bootstrap",
  },
  {
    id: 5,
    heading: "Backend",
    para1:
      "Node.js, Prisma, tRPC, MySQL, PostgreSQL, Firebase Cloud Firestore, Railway, and PlanetScale",
  },
  {
    id: 6,
    heading: "Authentication",
    para1: "NextAuth.js, and Firebase Authentication",
  },
  {
    id: 7,
    heading: "Deployment",
    para1: "Docker, GitHub Pages, Heroku, Netlify, and Vercel",
  },
  {
    id: 8,
    heading: "Tools",
    para1: "1. Visual Studio Code, IntelliJ IDEA, GitKraken, GitLab and GitHub",
    para2: "2. Git, Eslint, Prettier, and Husky",
  },
];
