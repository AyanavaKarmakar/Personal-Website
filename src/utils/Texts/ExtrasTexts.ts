import { z } from "zod";

const ExtraTextValidator = z.object({
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

export type ExtraText = z.infer<typeof ExtraTextValidator>;

export const ExtrasTexts: ExtraText[] = [
  {
    id: 1,
    heading: "So, what is this page about?",
    para1:
      "This page contains anything, and everything that couldn't fit into the other pages. It's a collection of random stuff that I \"like\", and I hope you do too :)",
  },
  {
    id: 2,
    heading: "Music I Like",
    para1:
      "I like a lot of music, but here are some of my favourites compiled in the form of a YouTube Music playlist.",
    para3: "— Open the playlist in a new tab:",
    para10:
      "https://music.youtube.com/playlist?list=PL3mmgsHsl2SUM3a1-y4NORgN4X8Mf20l1",
  },
  {
    id: 3,
    heading: "Tea or Coffee?",
    para1:
      "I'm a tea person, but I do like coffee too. I like my coffee black, and I like it strong. I don't like it with milk, or sugar, or anything else. I like it the way it is. Here's a list of my favourite coffees I have tried so far, and some I would probably stay away from.",
    para2: "— Davidoff Cafe Espresso 57 [95/100]",
    para3: "— Bevzilla Turkish Hazelnut [90/100]",
    para4: "— Nescafe Classic Black Roast [80/100]",
    para5: "— Nescafe Gold Blend Decaff [75/100]",
    para6: "— Nescafe Classic [60/100]",
    para7: "— Nescafe Gold Cappuccino [55/100]",
    para8: "— Nescafe Gold Blend [40/100]",
    para9: "— Bru Gold Premium [30/100]",
  },
];
