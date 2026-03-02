import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Suraj Portfolio",
    short_name: "Suraj",
    description:
      "Portfolio of Suraj, full-stack developer and UI/UX designer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7f2",
    theme_color: "#c85a32",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
