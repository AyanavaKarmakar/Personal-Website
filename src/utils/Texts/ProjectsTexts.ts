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
    para2: "1. Open Source at GitHub",
    para3: "2. Live at Vercel",
  },
];
