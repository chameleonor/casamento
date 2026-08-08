import type { Metadata } from "next";
import PhotoSlideshow from "@/components/PhotoSlideshow";

export const metadata: Metadata = {
  title: "Slideshow — Vanessa & Guilherme",
  description: "Apresentação de fotos de Vanessa e Guilherme.",
};

export default function SlideshowPage() {
  return <PhotoSlideshow />;
}
