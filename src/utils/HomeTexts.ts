import { z } from "zod";

const HomeTextValidator = z.object({
  id: z.number().positive(),
  heading: z.string().min(5),
  para: z.string().min(10),
});

type HomeText = z.infer<typeof HomeTextValidator>;

export const HomeTexts: HomeText[] = [
  {
    id: 1,
    heading: "About Me",
    para: "Frontend Developer with a passion for simple, responsive, and mobile-first cross-platform application development.",
  },
];
