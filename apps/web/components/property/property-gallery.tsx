"use client";

import type { PropertyImage } from "@impulso/types";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function PropertyGallery({ images, title }: { images: PropertyImage[]; title: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = images.map((image) => ({ src: image.src }));

  function openAt(nextIndex: number) {
    setIndex(nextIndex);
    setOpen(true);
  }

  return (
    <>
      <div className="grid h-[320px] grid-cols-2 gap-2 overflow-hidden rounded-3xl sm:h-[420px] lg:h-[480px] lg:grid-cols-4 lg:grid-rows-2">
        <button type="button" className="group relative col-span-2 row-span-2 cursor-pointer overflow-hidden" onClick={() => openAt(0)}>
          <Image
            src={images[0].src}
            alt={`${title} - foto principal`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL={images[0].blurDataURL}
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
        </button>
        {images.slice(1, 5).map((image, imageIndex) => (
          <button key={image.src} type="button" className="group relative hidden cursor-pointer overflow-hidden lg:block" onClick={() => openAt(imageIndex + 1)}>
            <Image
              src={image.src}
              alt={`${title} - foto ${imageIndex + 2}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={75}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
            />
            {imageIndex === 3 && images.length > 5 ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="text-sm font-semibold text-white">+{images.length - 5} fotos</span>
              </div>
            ) : null}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => openAt(0)}
        className="mt-3 text-sm font-semibold text-brand-blue underline underline-offset-4 transition-colors hover:text-brand-gold"
      >
        Ver las {images.length} fotos
      </button>
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
    </>
  );
}
