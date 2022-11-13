import { z } from "zod";

const ProjectTextValidator = z.object({
  id: z.number().positive(),
  heading: z.string().min(5).optional(),
  para1: z.string().min(10).optional(),
  para2: z.string().min(10).optional(),
  para3: z.string().min(10).optional(),
  para4: z.string().min(10).optional(),
});

export type ProjectText = z.infer<typeof ProjectTextValidator>;

export const ProjectsTexts: ProjectText[] = [
  {
    id: 1,
    heading: "Guestbook",
    para1:
      "Guestbook is a simple web application that allows users to sign in, and leave a message. It is built using the T3 Stack (Next.js, TypeScript, and TailwindCSS).",
    para2: "— Open Source @ GitHub",
    para3: "— Live @ Vercel",
  },
  {
    id: 2,
    heading: "CatchApp",
    para1:
      "CatchApp is a real-time chat application that allows users to create rooms, and chat with other users. It is built using React Native, Expo, and Firebase.",
    para2: "— Open Source @ GitHub",
    para3: "— Live @ Expo",
  },
  {
    id: 3,
    heading: "ARID",
    para1:
      'ARID is a cross-platform application for checking "Dry Days" in India. It is built using React Native, Expo, and React Native Paper, and is available for both Android, and as a Web App.',
    para2: "— Open Source @ GitHub",
    para3: "— Live @ Vercel",
  },
  {
    id: 4,
    heading: "Portfolio",
    para1:
      "This is the portfolio website you are currently viewing. It is built using Astro, TypeScript, and TailwindCSS.",
    para2: "— Open Source @ GitHub",
    para3: "— Live @ Expo",
  },
];
