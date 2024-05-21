import { z } from "zod";

const SocialLinkValidator = z.object({
  id: z.number().positive(),
  linkName: z.string().min(3),
  linkUrl: z.string().url().startsWith("https://"),
});

type SocialLink = z.infer<typeof SocialLinkValidator>;

export const SocialLinks: SocialLink[] = [
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
    linkName: "Linktree",
    linkUrl: "http://ayan-k-linktree.vercel.app",
  },
  {
    id: 4,
    linkName: "Leetcode",
    linkUrl: "https://leetcode.com/AyanavaKarmakar/",
  },
];
