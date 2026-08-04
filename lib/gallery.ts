/**
 * Curated selection of real job photos (in public/gallery), with their
 * intrinsic dimensions so next/image can render them without distortion.
 * The five images used inside the Services section are intentionally
 * left out here to avoid repetition. Add or reorder freely.
 */
export type GalleryImage = { src: string; w: number; h: number };

export const galleryImages: GalleryImage[] = [
  { src: "/gallery/photo-13.jpeg", w: 1152, h: 2048 },
  { src: "/gallery/photo-04.jpeg", w: 1152, h: 2048 },
  { src: "/gallery/photo-03.jpeg", w: 2048, h: 1152 },
  { src: "/gallery/photo-21.jpeg", w: 1536, h: 2048 },
  { src: "/gallery/photo-06.jpeg", w: 2048, h: 1152 },
  { src: "/gallery/photo-02.jpeg", w: 1152, h: 2048 },
  { src: "/gallery/photo-09.jpeg", w: 2048, h: 1152 },
  { src: "/gallery/photo-16.jpeg", w: 1152, h: 2048 },
  { src: "/gallery/photo-20.jpeg", w: 1536, h: 2048 },
  { src: "/gallery/photo-12.jpeg", w: 1152, h: 2048 },
  { src: "/gallery/photo-19.jpeg", w: 2048, h: 1152 },
  { src: "/gallery/photo-25.jpeg", w: 1500, h: 2000 },
];
