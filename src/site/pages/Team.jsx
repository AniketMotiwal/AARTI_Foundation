import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { board, management } from '../content';
import { Button, PageHeader, Reveal, Section, SectionHeading } from '../ui';

/** Uniform portrait card used for every board member and manager. */
const PersonCard = ({ person, delay = 0 }) => {
  const Wrapper = person.link ? 'a' : 'div';
  const linkProps = person.link ? { href: person.link, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Reveal delay={delay} className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)]">
      <Wrapper
        {...linkProps}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-lift"
      >
        <div className="aspect-[4/5] overflow-hidden bg-paper">
          <img
            src={person.img}
            alt={`Portrait of ${person.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col items-center border-t border-line px-3 pb-5 pt-4 text-center sm:px-5 sm:pb-6 sm:pt-5">
          <span className="rounded-full bg-gold-50 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-gold-800 sm:text-[0.68rem] sm:tracking-[0.12em] dark:bg-gold-500/10 dark:text-gold-300">
            {person.role}
          </span>
          <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink sm:text-xl">{person.name}</h3>
          <p className="mt-1.5 text-xs leading-snug text-ink-soft sm:text-sm">{person.affiliation}</p>
          {person.link && (
            <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-semibold text-brand-700 dark:text-gold-400">
              View profile
              <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </span>
          )}
        </div>
      </Wrapper>
    </Reveal>
  );
};

const ChairCard = ({ person }) => (
  <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
    <div className="grid md:grid-cols-[minmax(0,20rem)_1fr]">
      <div className="aspect-[4/5] overflow-hidden bg-paper md:aspect-auto">
        <img src={person.img} alt={`Portrait of ${person.name}`} className="h-full w-full object-cover object-top" />
      </div>
      <div className="relative flex flex-col justify-center border-t border-line p-8 md:border-l md:border-t-0 sm:p-10 lg:p-14">
        <span className="absolute inset-y-0 left-0 hidden w-1 bg-gradient-to-b from-gold-500 to-sky-brand md:block" aria-hidden />
        <p className="eyebrow">Chairperson, Board of Directors</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{person.name}</h2>
        <p className="mt-3 text-lg text-ink-soft">{person.affiliation}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
          The board of AARTI Foundation brings together the leadership of IIT Roorkee and ICAT, steering the industry
          accelerator’s programmes, partnerships and governance.
        </p>
        {person.link && (
          <div className="mt-8">
            <Button to={person.link} variant="outline" size="sm" icon="external">
              View profile
            </Button>
          </div>
        )}
      </div>
    </div>
  </Reveal>
);

const Team = () => {
  const chair = board.find((b) => b.lead);
  const people = [...board.filter((b) => !b.lead), ...management];
  return (
    <>
      <PageHeader
        eyebrow="Governance"
        title="Board & leadership"
        lead="AARTI is governed by a board drawn from IIT Roorkee and ICAT, bringing together academic depth and automotive industry experience."
        crumbs={[{ label: 'About', to: '/about' }]}
      />

      <Section>
        <ChairCard person={chair} />
      </Section>

      <Section tone="surface" className="!pt-16 sm:!pt-20">
        <SectionHeading eyebrow="Board &amp; leadership" title="The people steering AARTI" align="center" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {people.map((p, i) => (
            <PersonCard key={p.name} person={p} delay={i * 70} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Team;
