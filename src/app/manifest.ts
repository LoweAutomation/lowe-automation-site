import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lowe Automation",
    short_name: "Lowe Automation",
    description: "Custom software, AI systems, dashboards, and business automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [],
  };
}
