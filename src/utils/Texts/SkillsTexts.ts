import { z } from "zod";

const SkillTextValidator = z.object({
  id: z.number().positive(),
  heading: z.string().min(5).optional(),
  para1: z.string().min(10).optional(),
  para2: z.string().min(10).optional(),
  para3: z.string().min(10).optional(),
});

export type SkillText = z.infer<typeof SkillTextValidator>;

export const SkillsTexts: SkillText[] = [
  {
    id: 1,
    heading: "Heading 1",
    para1: "Para 1",
  },
];
