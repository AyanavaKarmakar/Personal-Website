import { z } from "zod";

const SkillTextValidator = z.object({
  id: z.number().positive(),
  heading: z.string().min(5).optional(),
  para1: z.string().min(10).optional(),
  para2: z.string().min(10).optional(),
  para3: z.string().min(10).optional(),
  para4: z.string().min(10).optional(),
  para5: z.string().min(10).optional(),
});

export type SkillText = z.infer<typeof SkillTextValidator>;

export const SkillsTexts: SkillText[] = [
  {
    id: 1,
    heading: "Languages",
    para1: "1. JavaScript",
    para2: "2. TypeScript",
  },
  {
    id: 2,
    heading: "Frameworks",
    para1: "1. Next.js",
    para2: "2. Astro",
  },
  {
    id: 3,
    heading: "Libraries",
    para1: "1. React.js, React Native, and Expo",
    para2: "2. Redux Toolkit, React Query, Zustand, Zod, and NextAuth.js",
    para3: "3. Framer Motion, React ECharts, and Storybook",
    para4: "4. Tailwind CSS, daisyUI, Material UI, and Bootstrap",
  },
  {
    id: 4,
    heading: "Tools",
    para1: "1. Prisma, tRPC, Firebase, Railway, and PlanetScale",
    para2: "2. VS Code, GitHub, GitPod, and CodeSpaces",
    para3: "3. Docker, Heroku, Netlify, and Vercel",
    para4: "4. Eslint, Prettier, and Husky",
  },
];
