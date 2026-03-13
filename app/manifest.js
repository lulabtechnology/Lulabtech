import { brandName } from "@/lib/site";

export default function manifest() {
  return {
    name: brandName,
    short_name: brandName,
    description:
      "Diseño web premium, landing pages, tiendas online y automatización para negocios en Panamá.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#07111f",
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
