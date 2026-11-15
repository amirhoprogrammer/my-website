"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slider } from "@/utils/types";

type HeroProps = {
  slides: Slider[];
};

export default function Hero({ slides }: HeroProps) {
  const autoplay = useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: slides.length > 1,
      align: "start",
      direction: "ltr",
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  if (slides.length === 0) return null;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
      dir="ltr"
    >
      {/* Embla viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Embla container */}
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
              <div
                className="relative h-100 w-full
                overflow-hidden
                sm:h-112.5
                md:h-137.5
                xl:h-175"
              >
                {/* Background image */}
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  className="object-cover object-center"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0
                  bg-linear-to-r
                  from-[#050B1C]/85
                  via-[#050B1C]/55
                  to-transparent"
                />

                {/* Slide content */}
                <div
                  className="w90 relative z-10
                  flex h-full items-center"
                >
                  <div
                    className="flex max-w-xl
                    flex-col items-start gap-6"
                  >
                    <h1
                      className="text-3xl font-extrabold
                      leading-tight text-white
                      sm:text-4xl md:text-5xl"
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="text-base leading-7
                      text-white/80 md:text-lg"
                    >
                      {slide.description}
                    </p>

                    {slide.buttonName && slide.link && (
                      <Link
                        href={slide.link}
                        className="inline-flex items-center
                        justify-center rounded-xl
                        bg-brand-gradient px-6 py-3
                        font-semibold text-white
                        transition hover:opacity-90"
                      >
                        {slide.buttonName}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-8 right-[5%]
          z-20 flex items-center gap-3"
        >
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="flex size-12 cursor-pointer
            items-center justify-center
            rounded-xl border border-border-secondary
            bg-footer-bg text-white
            hover:bg-brand-purple hover:border-brand-blue"
          >
            {/* hover:border-brand-blue backdrop-blur-md  transition*/}
            <ArrowLeft size={22} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="flex size-12 cursor-pointer
            items-center justify-center
            rounded-xl border border-border-secondary
            bg-footer-bg text-white       
            hover:bg-brand-purple hover:border-brand-blue"
          >
            {/* hover:border-brand-blue backdrop-blur-md  transition*/}
            <ArrowRight size={22} />
          </button>
        </div>
      )}

      {/* Slide indicator */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-10 left-[5%]
          z-20 flex items-center gap-2"
        >
          {slides.map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={selectedIndex === index ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 cursor-pointer rounded-full
                transition-all duration-300
                ${
                  selectedIndex === index
                    ? "w-8 bg-[#00D5FF]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
