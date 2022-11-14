import { z } from "zod";

const ExtraTextValidator = z.object({
  id: z.number().positive(),
  heading: z.string().min(5).optional(),
  para1: z.string().min(10).optional(),
  para2: z.string().min(10).optional(),
  para3: z.string().min(10).optional(),
  para4: z.string().min(10).optional(),
  para5: z.string().min(10).optional(),
});

export type ExtraText = z.infer<typeof ExtraTextValidator>;

export const ExtrasTexts: ExtraText[] = [
  {
    id: 1,
    heading: "So, what is this page about?",
    para1: "Para 1",
  },
];
