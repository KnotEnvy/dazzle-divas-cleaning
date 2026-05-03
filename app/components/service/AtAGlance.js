import { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function AtAGlance({ items }) {
  return (
    <section className="relative -mt-16 z-10">
      <div className="container mx-auto px-6">
        <StaggerGroup
          stagger={0.08}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.label} className="flex flex-col items-start gap-2">
                <div className="w-11 h-11 rounded-xl bg-diva-pink-50 text-diva-pink-600 flex items-center justify-center">
                  {Icon && <Icon size={22} aria-hidden />}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                  {item.value}
                </div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
