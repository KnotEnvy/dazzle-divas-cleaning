import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal, { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function CrossSell({ title, items }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {title && (
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
              {title}
            </h2>
          </Reveal>
        )}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.href}>
                <Link
                  href={item.href}
                  className="group block h-full p-6 rounded-2xl bg-white border border-slate-200 hover:border-diva-pink-300 hover:shadow-colored-pink transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-diva-pink-500 to-diva-pink-600 text-white flex items-center justify-center">
                        <Icon size={20} aria-hidden />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-diva-pink-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
