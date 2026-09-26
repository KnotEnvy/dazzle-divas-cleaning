import Image from 'next/image';
import Reveal from '../motion/Reveal';

// Server component. A captioned row of real job photos from public/images.
// No heading on purpose: it is a visual break, labelled for assistive tech.
export default function PhotoStrip({ label, photos, caption }) {
  return (
    <section aria-label={label} className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <Reveal>
          <figure>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-md"
                >
                  {/* Rendered width: one column below sm, then one third of the
                      container (px-6 gutters, gap-4), capped by the 2xl container. */}
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1536px) 488px, (min-width: 640px) 31vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {caption && (
              <figcaption className="mt-4 text-sm text-slate-600">{caption}</figcaption>
            )}
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
