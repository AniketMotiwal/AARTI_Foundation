import React from 'react';
import { FiCalendar, FiFileText } from 'react-icons/fi';
import { jobs, org, tenders } from '../content';
import { Button, PageHeader, Section, cx, formatDate, isPast } from '../ui';

const StatusPill = ({ label, tone }) => (
  <span
    className={cx(
      'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
      tone === 'open' && 'bg-emerald-50 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300',
      tone === 'closed' && 'bg-muted text-ink-soft',
      tone === 'cancelled' && 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300'
    )}
  >
    <span className={cx('h-1.5 w-1.5 rounded-full', tone === 'open' ? 'bg-emerald-500' : tone === 'cancelled' ? 'bg-rose-500' : 'bg-ink-soft')} aria-hidden />
    {label}
  </span>
);

const EmptyState = ({ title, text }) => (
  <div className="rounded-3xl border border-dashed border-line bg-surface p-8 text-center">
    <p className="font-display text-xl font-semibold text-ink">{title}</p>
    <p className="mx-auto mt-2 max-w-lg text-sm text-ink-soft">{text}</p>
  </div>
);

export const Tenders = () => {
  const open = tenders.filter((t) => !isPast(t.closes) && t.status !== 'Cancelled');
  return (
    <>
      <PageHeader
        eyebrow="Opportunities"
        title="Tenders & calls for bid"
        lead="Procurement notices issued by AARTI Foundation. Download the tender documents and any corrigenda before bidding."
      />
      <Section>
        {open.length === 0 && (
          <div className="mb-12">
            <EmptyState title="No open tenders right now" text="New calls for bid are published here. Past notices remain available below for reference." />
          </div>
        )}
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">All notices</h2>
        <div className="overflow-hidden rounded-3xl border border-line bg-surface">
          <div className="hidden grid-cols-[1.1fr_2fr_1fr_1fr_1.4fr] gap-6 border-b border-line bg-muted px-7 py-4 text-xs font-semibold uppercase tracking-wider text-ink-soft lg:grid">
            <span>Category</span>
            <span>Description</span>
            <span>Opened</span>
            <span>Closes</span>
            <span>Documents</span>
          </div>
          <ul className="divide-y divide-line">
            {tenders.map((t) => {
              const tone = t.status === 'Cancelled' ? 'cancelled' : isPast(t.closes) ? 'closed' : 'open';
              const label = t.status === 'Cancelled' ? 'Cancelled' : tone === 'closed' ? 'Closed' : 'Open';
              return (
                <li key={t.title} className="grid gap-4 px-6 py-6 lg:grid-cols-[1.1fr_2fr_1fr_1fr_1.4fr] lg:items-start lg:gap-6 lg:px-7">
                  <div className="text-sm text-ink-soft">{t.category}</div>
                  <div>
                    <p className="font-semibold text-ink">{t.title}</p>
                    <div className="mt-2">
                      <StatusPill label={label} tone={tone} />
                    </div>
                  </div>
                  <div className="text-sm text-ink">
                    <span className="mr-2 text-ink-soft lg:hidden">Opened</span>
                    {formatDate(t.opened)}
                  </div>
                  <div className="text-sm text-ink">
                    <span className="mr-2 text-ink-soft lg:hidden">Closes</span>
                    {formatDate(t.closes)}
                    {t.note && <span className="mt-0.5 block text-xs text-ink-soft">{t.note}</span>}
                  </div>
                  <ul className="space-y-2">
                    {t.documents.map((d) => (
                      <li key={d.href}>
                        <a href={d.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm font-medium text-brand-700 hover:underline dark:text-gold-400">
                          <FiFileText className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                          {d.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
};

export const Careers = () => {
  const open = jobs.filter((j) => !isPast(j.closes));
  const past = jobs.filter((j) => isPast(j.closes));

  const JobRow = ({ job, closed }) => (
    <li className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <StatusPill label={closed ? 'Closed' : 'Accepting applications'} tone={closed ? 'closed' : 'open'} />
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{job.title}</h3>
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-soft">
          <FiCalendar className="h-4 w-4" aria-hidden /> {job.detail}
        </p>
      </div>
      <Button to={job.pdf} variant={closed ? 'outline' : 'navy'} size="sm" icon="external" className="shrink-0">
        View advertisement
      </Button>
    </li>
  );

  return (
    <>
      <PageHeader
        eyebrow="Opportunities"
        title="Careers at AARTI"
        lead="Work at the intersection of IIT Roorkee research and Indian industry — on accelerators, smart villages, precision manufacturing and EV skilling."
      />
      <Section>
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Current openings</h2>
        {open.length ? (
          <ul className="space-y-4">
            {open.map((j) => (
              <JobRow key={j.title} job={j} />
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No open positions at the moment"
            text={`We post every vacancy here. You can also write to ${org.email} to express interest in future roles.`}
          />
        )}

        {past.length > 0 && (
          <>
            <h2 className="mb-6 mt-14 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">Past advertisements</h2>
            <ul className="space-y-4">
              {past.map((j) => (
                <JobRow key={j.title} job={j} closed />
              ))}
            </ul>
          </>
        )}
      </Section>
    </>
  );
};
