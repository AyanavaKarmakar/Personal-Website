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
      "This page contains anything and everything that couldn't fit into the other pages. It's a collection of random stuff that I like, and I hope you do too :)",
  },
  {
    id: 2,
    heading: "Some Pics I Clicked",
    para1:
      "I love to click photos. Here are some of the pictures I have taken mostly during my college days:",
  },
  {
    id: 4,
    heading: "Music I Like",
    para1:
      "Here are some of my favorites compiled as a YouTube Music playlist.",
    para3: "— Open the playlist in a new tab:",
    para10:
      "https://music.youtube.com/playlist?list=PL3mmgsHsl2SUM3a1-y4NORgN4X8Mf20l1",
  },
  {
    id: 5,
    heading: "PC or Console?",
    para1:
      "I'm a PC person, but I do like consoles too. Here's a list of my favorite games I have played so far:",
    para2: "— The Elder Scrolls III: Morrowind [99/100]",
    para3: "— The Elder Scrolls IV: Oblivion [95/100]",
    para4: "— Need for Speed: Underground 2 [92/100]",
    para5: "— Assassin's Creed: Brotherhood [90/100]",
    para6: "— Grand Theft Auto San Andreas [85/100]",
    para7: "— The Witcher 3: Wild Hunt [80/100]",
    para8: "— Far Cry 5 + New Dawn [75/100]",
    para9: "— Far Cry 3 [70/100]",
  },
  {
    id: 6,
    heading: "Tea or Coffee?",
    para1:
      "I'm a tea person, but I do like coffee too. I like my coffee black, and I like it strong. I don't like it with milk, sugar, or anything else. I like it the way it is. Here's a list of my favorite coffees I have tried so far, and some I would probably stay away from.",
    para2: "— Davidoff Cafe Espresso 57 [95/100]",
    para3: "— Bevzilla Turkish Hazelnut [90/100]",
    para4: "— Nescafe Classic Black Roast [80/100]",
    para5: "— Nescafe Gold Blend Decaff [75/100]",
    para6: "— Nescafe Classic [60/100]",
    para7: "— Nescafe Gold Cappuccino [55/100]",
    para8: "— Nescafe Gold Blend [40/100]",
    para9: "— Bru Gold Premium [30/100]",
  },
  {
    id: 7,
    heading: "Light Novels I Like",
    para1: "Here's a list of my favorite light novels I have read so far:",
    para2:
      "— Classroom of the Elite (ようこそ実力至上主義の教室へ) by Kinugasa Shougo & Tomose Shunsaku",
    para3:
      "— Classroom of the Elite: 2nd Year (ようこそ実力至上主義の教室へ 2年生編) by Kinugasa Shougo & Tomose Shunsaku",
    para4: "— Youjo Senki (幼女戦記) by Carlo Zen & Shinotsuki Shinobu",
    para5: "— Overlord (オーバーロード) by Maruyama Kugane & So-bin",
  },
  {
    id: 8,
    heading: "Manga I Like",
    para1: "Here's a list of my favorite manga I have read so far:",
    para2: "— Vinland Saga (ヴィンランド・サガ) by Yukimura Makoto", 
    para3: "— Look Back (ルックバック) by Fujimoto Tatsuki",
    para4: "— A Town Where You Live (小镇有你) by Seo Kouji",
    para5: "— Soul Eater (ソウルイーター) by Atsushi Ohkubo",
    para6: "— Insomniacs After School (君は放課後インソムニア) by Ojiro Makoto",
  },
  {
    id: 9,
    heading: "Anime I Like",
    para1: "Here's a list of my favorite anime I have watched so far:",
    para2:
      "— Durarara!! (デュラララ!!) written by Narita Ryohgo (LN), and adapted by Brain's Base",
    para3: "— Tsuki ga Kirei (月がきれい) by Studio Feel (OG)",
    para4:
      "— ReLIFE (リライフ) written by Yayoi Sou (Manga), and adapted by TMS Entertainment",
    para5:
      "— Code Geass (コードギアス 反逆のルルーシュ) by Sunrise (OG)",
    para6:
      "— Kabaneri of the Iron Fortress (甲鉄城のカバネリ) by Wit Studio (OG)",
    para7:
      "— Fire Force (炎炎ノ消防隊) by Atsushi Ohkubo (Manga), and adapted by David Production",
  },
];
