"use client";

import type { PropertyImage } from "@impulso/types";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function PropertyGallery({ images, title }: { images: PropertyImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="grid gap-3 lg:grid-cols-[1.45fr_1fr]">
        <GalleryButton image={images[0]} title={title} priority onClick={() => setActiveIndex(0)} className="aspect-[4/3] lg:aspect-auto" />
        <div className="grid grid-cols-2 gap-3">
          {images.slice(1, 5).map((image, index) => (
            <GalleryButton key={image.src} image={image} title={title} onClick={() => setActiveIndex(index + 1)} className="aspect-square" />
          ))}
        </div>
      </div>
      {activeImage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-ink/92 p-4" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Cerrar galeria"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-ink"
          >
            <X size={20} />
          </button>
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={activeImage.width}
            height={activeImage.height}
            placeholder="blur"
            blurDataURL={activeImage.blurDataURL}
            className="max-h-[86vh] w-auto rounded-[8px] object-contain"
          />
        </div>
      ) : null}
    </>
  );
}

function GalleryButton({
  image,
  title,
  priority = false,
  className,
  onClick
}: {
  image: PropertyImage;
  title: string;
  priority?: boolean;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className={`relative overflow-hidden rounded-[8px] bg-brand-mist ${className ?? ""}`}>
      <Image
        src={image.src}
        alt={`${title}: ${image.alt}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
        placeholder="blur"
        blurDataURL={image.blurDataURL}
        className="object-cover transition duration-500 hover:scale-105"
      />
    </button>
  );
}
