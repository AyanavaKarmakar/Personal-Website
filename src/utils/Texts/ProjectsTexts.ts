import { z } from "zod";

const ProjectTextValidator = z.object({
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

export type ProjectText = z.infer<typeof ProjectTextValidator>;

export const ProjectsTexts: ProjectText[] = [
  {
    id: 1,
    heading: "tauri-t3-app",
    para1: "Clean and simple starter repo using the T3 Stack in Tauri.",
    para2: "— Open Source @ ",
    para3: "— Docs @ ",
    para4: "https://github.com/AyanavaKarmakar/tauri-t3-app",
    para5: "https://ayanavakarmakar.github.io/tauri-t3-app",
  },
  {
    id: 2,
    heading: "Service Ticketing System",
    para1:
      "User Authentication, Customer Support Request Creation and Administration Action Capability for a Service Ticketing System. It is built using the MERN stack.",
    para2: "— Open Source @ ",
    para3: "— Live @ ",
    para4: "https://github.com/AyanavaKarmakar/service-ticketing-system",
    para5: "https://service-ticketing-system.vercel.app/",
  },
  {
    id: 4,
    heading: "Guestbook",
    para1:
      "Guestbook is a simple web application that allows users to sign in and leave a message. It is built using the T3 Stack (Next.js, tRPC, Tailwind CSS, TypeScript, Prisma, and NextAuth.js).",
    para2: "— Open Source @ ",
    para3: "— Live @ ",
    para4: "https://github.com/AyanavaKarmakar/Guestbook",
    para5: "https://ayanava-karmakar-guestbook.vercel.app/",
  },
  {
    id: 5,
    heading: "Portfolio",
    para1:
      "This is the portfolio website you are currently viewing. It is built using Astro with React and Tailwind CSS integrations.",
    para2: "— Open Source @ ",
    para3: "— Live @ ",
    para4: "https://github.com/AyanavaKarmakar/Personal-Website",
    para5: "https://ayanava-karmakar.vercel.app/",
  },
];
