import Reveal from '../motion/Reveal';

// Server component. A real <table> (not cards) so crawlers, screen readers,
// and AI assistants can read each size/price pair as structured data.
export default function TurnoverRateTable({
  id,
  eyebrow,
  title,
  lead,
  caption,
  rows,
  note,
}) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-gold-600">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h2
              id={headingId}
              className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              {title}
            </h2>
          </Reveal>
          {lead && (
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{lead}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.15}>
          <div className="max-w-4xl overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <caption className="caption-bottom border-t border-slate-200 bg-slate-50 px-4 md:px-6 py-4 text-left text-sm text-slate-600">
                {caption}
              </caption>
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-4 text-sm font-semibold">
                    Property size
                  </th>
                  <th scope="col" className="px-3 md:px-6 py-4 text-sm font-semibold">
                    Bathrooms
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 text-sm font-semibold text-right">
                    Price per turnover
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((row) => (
                  <tr
                    key={row.size}
                    className={row.featured ? 'bg-diva-pink-50/70' : 'bg-white'}
                  >
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-5 align-top font-semibold text-slate-900"
                    >
                      {row.size}
                      {row.note && (
                        <span className="mt-1 block text-sm font-normal text-slate-600">
                          {row.note}
                        </span>
                      )}
                    </th>
                    <td className="px-3 md:px-6 py-5 align-top text-slate-700">{row.baths}</td>
                    <td
                      className={`px-4 md:px-6 py-5 align-top text-right ${
                        row.custom
                          ? 'text-sm md:text-base font-semibold text-diva-pink-700'
                          : 'text-lg md:text-2xl font-bold text-slate-900 whitespace-nowrap'
                      }`}
                    >
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {note && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">{note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
