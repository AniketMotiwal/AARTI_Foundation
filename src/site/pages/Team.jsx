import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { board } from '../content';
import { PageHeader, Reveal, Section, SectionHeading, cx } from '../ui';

const Person = ({ person, large = false }) => {
  const body = (
    <>
      <div className={cx('overflow-hidden rounded-2xl bg-muted', large ? 'aspect-[4/5] sm:aspect-square lg:aspect-[4/5]' : 'aspect-[4/5]')}>
        <img
          src={person.img}
          alt={`Portrait of ${person.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale-[15%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <div className="px-1 pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-400">{person.role}</p>
        <h3 className={cx('mt-1.5 font-display font-semibold text-ink', large ? 'text-2xl' : 'text-lg')}>
          {person.name}
          {person.link && (
            <FiArrowUpRight className="ml-1 inline h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          )}
        </h3>
        <p className="mt-1 text-sm leading-snug text-ink-soft">{person.affiliation}</p>
      </div>
    </>
  );
  return person.link ? (
    <a href={person.link} target="_blank" rel="noopener noreferrer" className="group block">
      {body}
    </a>
  ) : (
    <div className="group">{body}</div>
  );
};

const Team = () => {
  const chair = board.find((b) => b.lead);
  const others = board.filter((b) => !b.lead);
  return (
    <>
      <PageHeader
        eyebrow="Governance"
        title="Board & leadership"
        lead="AARTI is governed by a board drawn from IIT Roorkee and ICAT, bringing together academic depth and automotive industry experience."
        crumbs={[{ label: 'About', to: '/about' }]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow="Chairperson" title="Leading from IIT Roorkee" className="!mb-8" />
            <Person person={chair} large />
          </Reveal>
          <div className="lg:col-span-8">
            <SectionHeading eyebrow="Board &amp; leadership" title="The people steering AARTI" className="!mb-8" />
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.name} delay={i * 70}>
                  <Person person={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Team;
