import { z } from "zod";

const LinkValidator = z.object({
  id: z.number().positive(),
  linkName: z.string().min(3),
  linkUrl: z.string().url().startsWith("https://"),
});

export type Link = z.infer<typeof LinkValidator>;

export const Links: Link[] = [
  {
    id: 1,
    linkName: "GitHub",
    linkUrl: "https://github.com/AyanavaKarmakar",
  },
  {
    id: 2,
    linkName: "LinkedIn",
    linkUrl: "https://www.linkedin.com/in/ayanava-karmakar/",
  },
  {
    id: 3,
    linkName: "Guestbook",
    linkUrl: "https://guestbook.ayanavakarmakar.software/",
  },
  {
    id: 4,
    linkName: "Linktree",
    linkUrl: "https://linktree.ayanavakarmakar.software",
  },
];
