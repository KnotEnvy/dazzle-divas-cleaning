import Reveal, { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function ProcessSteps({ eyebrow, title, subtitle, steps }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-pink-600">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {title}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{subtitle}</p>
            </Reveal>
          )}
        </div>

        <StaggerGroup className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-diva-pink-200 via-diva-cyan-200 to-diva-gold-200"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title} className="relative">
                <div className="flex flex-col items-start">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-diva-pink-500 to-diva-pink-600 text-white flex items-center justify-center shadow-colored-pink">
                    {Icon ? (
                      <Icon size={26} aria-hidden />
                    ) : (
                      <span className="text-xl font-bold">{i + 1}</span>
                    )}
                  </div>
                  <div className="mt-2 inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
