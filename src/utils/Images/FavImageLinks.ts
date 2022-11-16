import { z } from "zod";

const FavImageValidator = z.object({
  url: z.string().url().startsWith("https://"),
});

export type FavImage = z.infer<typeof FavImageValidator>;

export const favImages: FavImage[] = [
  {
    // waiting for HQ Image
    url: "https://user-images.githubusercontent.com/89210438/202004656-d4961c5a-45dd-4269-be37-31996770c59f.png",
  },
];
