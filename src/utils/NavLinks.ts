import { z } from "zod";

const NavLinkValidator = z.object({
  id: z.number().positive(),
  name: z.string().min(3),
  url: z.string().startsWith("/").endsWith("/"),
});

type NavLink = z.infer<typeof NavLinkValidator>;

export const NavLinks: NavLink[] = [
  {
    id: 1,
    name: "Home",
    url: "/home/",
  },
  {
    id: 2,
    name: "Skills",
    url: "/skills/",
  },
  {
    id: 3,
    name: "Projects",
    url: "/projects/",
  },
  {
    id: 4,
    name: "Extras",
    url: "/extras/",
  },
];
