import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { activities, hellaCase, rfp, researchProjects } from '../content';
import { Button, PageHeader, Reveal, Section, SectionHeading, Tag } from '../ui';

const Projects = () => (
  <>
    <PageHeader
      eyebrow="Projects"
      title="Research, programmes & activities"
      lead="Industry-sponsored research, problem statements from Indian manufacturers, and the conferences and training programmes AARTI runs at IIT Roorkee."
    />

    <Section>
      <SectionHeading eyebrow="Sponsored research" title="Industrial R&D projects" />
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface lg:row-span-2">
          <div className="bg-paper p-4">
            <img src={hellaCase.image} alt="Hella India LED driver prototype" className="mx-auto max-h-80 object-contain" loading="lazy" />
          </div>
          <div className="p-7">
            <Tag>Featured</Tag>
            <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">{hellaCase.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{hellaCase.brief}</p>
            <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{hellaCase.outcome}</p>
          </div>
        </Reveal>
        {researchProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60} className="flex flex-col rounded-3xl border border-line bg-surface p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Funded by</p>
            <p className="mt-1 font-semibold text-brand-700 dark:text-gold-400">{p.sponsor}</p>
            <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug text-ink">{p.title}</h3>
            {p.status && <p className="mt-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">{p.status}</p>}
          </Reveal>
        ))}
      </div>
    </Section>

    <Section tone="surface" id="rfp">
      <SectionHeading eyebrow="Requests for proposal" title={rfp.title} lead={rfp.intro} />
      <div className="grid gap-5 md:grid-cols-2">
        {rfp.items.map((item, i) => (
          <Reveal key={item.company} delay={i * 60} className="rounded-3xl border border-line bg-page p-7">
            <h3 className="font-display text-lg font-semibold text-ink">{item.company}</h3>
            <ul className="mt-4 space-y-3">
              {item.problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section id="activities">
      <SectionHeading eyebrow="Activities" title="Conferences, outreach & approvals" />
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {activities.map((a, i) => (
          <Reveal as="li" key={a.title} delay={i * 50} className="relative">
            <span className="absolute -left-[1.95rem] top-2 h-3 w-3 rounded-full border-2 border-gold-500 bg-page sm:-left-[2.95rem]" aria-hidden />
            <article className="grid gap-5 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-[1fr_auto] sm:p-7">
              <div>
                <Tag>{a.type}</Tag>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{a.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
                  {a.date && (
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar className="h-4 w-4" aria-hidden /> {a.date}
                    </span>
                  )}
                  {a.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <FiMapPin className="h-4 w-4" aria-hidden /> {a.location}
                    </span>
                  )}
                </div>
              </div>
              {a.image && <img src={a.image} alt="" loading="lazy" className="h-36 w-full rounded-2xl object-cover sm:w-56" />}
            </article>
          </Reveal>
        ))}
      </ol>
      <div className="mt-14 rounded-3xl border border-dashed border-line p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">Have a problem statement for IIT Roorkee researchers?</p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">Industry partners can sponsor research through AARTI and SRIC. Tell us about your challenge.</p>
        <Button to="/contact" variant="navy" className="mt-6">
          Start a conversation
        </Button>
      </div>
    </Section>
  </>
);

export default Projects;
