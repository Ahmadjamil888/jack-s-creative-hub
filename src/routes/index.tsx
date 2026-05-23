import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Umair Amin — Web Developer & CMO | Portfolio" },
      { name: "description", content: "Portfolio of Umair Amin — CMO of Zehan X Technologies, Web Developer, and Machine Learning enthusiast. Explore cutting-edge web projects, AI products, and digital experiences." },
      { property: "og:title", content: "Umair Amin — Web Developer & CMO | Portfolio" },
      { property: "og:description", content: "Portfolio of Umair Amin — CMO of Zehan X Technologies, Web Developer, and Machine Learning enthusiast. Explore cutting-edge web projects, AI products, and digital experiences." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Umair Amin — Web Developer & CMO Portfolio" },
      { name: "twitter:title", content: "Umair Amin — Web Developer & CMO | Portfolio" },
      { name: "twitter:description", content: "Portfolio of Umair Amin — CMO of Zehan X Technologies, Web Developer, and Machine Learning enthusiast." },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
