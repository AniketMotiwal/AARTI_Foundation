import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { technologies } from '../content';
import { Button, PageHeader, Section } from '../ui';
import NotFound from './NotFound';

const Technology = () => {
  const { slug } = useParams();
  const tech = technologies.find((t) => t.slug === slug);
  if (!tech) return <NotFound />;
  const others = technologies.filter((t) => t.slug !== slug);

  return (
    <>
      <PageHeader eyebrow={tech.company} title={tech.title} lead={tech.summary} crumbs={[{ label: 'E-Mobility', to: '/focus/e-mobility' }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-line bg-white p-8">
              <img src={tech.image} alt={tech.title} className="max-h-full max-w-full object-contain" />
            </div>
            {tech.gallery && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {tech.gallery.map((g) => (
                  <div key={g.alt} className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-line bg-white">
                    <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            )}
            {tech.video && (
              <video className="mt-6 w-full rounded-3xl border border-line bg-black" controls preload="none">
                <source src={tech.video} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Overview</p>
            <p className="text-lg leading-relaxed text-ink">{tech.description}</p>

            <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Key features</h2>
            <ul className="mt-4 space-y-3">
              {tech.features.map((f) => (
                <li key={f} className="flex gap-3 text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-800 dark:bg-gold-500/15 dark:text-gold-300">
                    <FiCheck className="h-3 w-3" aria-hidden />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <dl className="mt-10 space-y-6 border-t border-line pt-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Technology</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{tech.technology}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Future scope</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{tech.futureScope}</dd>
              </div>
            </dl>
            <Button to="/contact" variant="navy" className="mt-10">
              Enquire about this technology
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="mb-8 font-display text-2xl font-semibold text-ink">More technologies</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((t) => (
            <Link key={t.slug} to={`/technologies/${t.slug}`} className="group flex items-center gap-5 rounded-3xl border border-line bg-page p-4 transition-shadow hover:shadow-lift">
              <span className="flex h-20 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                <img src={t.image} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
              </span>
              <span className="flex-1">
                <span className="block font-display font-semibold text-ink">{t.title}</span>
                <span className="mt-1 block text-xs text-ink-soft">{t.company}</span>
              </span>
              <FiArrowRight className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Technology;
