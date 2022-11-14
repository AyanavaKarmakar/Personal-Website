import { z } from "zod";

const AboutTextValidator = z.object({
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

export type AboutText = z.infer<typeof AboutTextValidator>;

export const AboutTexts: AboutText[] = [
  {
    id: 1,
    heading: "About Me",
    para1:
      "Hey, I'm Ayanava Karmakar, an Electrical Engineer turned Frontend Developer. I have a passion for developing simple, and responsive web apps. I have also recently started contributing to Open Source projects on GitHub.",
  },
  {
    id: 2,
    heading: "Work Experience",
    para1: "1. Frontend Intern at GeeksForGeeks — 3 months (Current)",
    para2: "2. Web Developer at Manufac Analytics — 1 month",
    para3: "3. ADM .NET Intern at Cognizant Technology Solutions — 6 months",
  },
  {
    id: 3,
    heading: "Education",
    para1: "1. B.Tech in Electrical Engineering, GPA: 8.7 — (2018-2022)",
    para2: "2. Higher Secondary, Stream: PCMCs, GPA: 9.2 — (2016-2018)",
    para3: "3. Secondary, GPA: 9.3 — (2015-2016)",
  },
  {
    id: 4,
    heading: "Hobbies",
    para1: "1. Aesthetic Photography ( Curious? Take a peek at ",
    para2: "2. Open Source Contribution",
  },
];
