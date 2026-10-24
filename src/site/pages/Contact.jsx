import React, { useState } from 'react';
import { FiCheckCircle, FiLoader, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { org } from '../content';
import { PageHeader, Section } from '../ui';

const topics = ['Industry partnership', 'Sponsored research / RFP', 'Start-up acceleration', 'Training & cohorts', 'Media', 'Other'];

const field =
  'mt-2 block w-full rounded-xl border border-line bg-page px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/60 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:focus:border-gold-400 dark:focus:ring-gold-400/20';

const emptyForm = { name: '', organisation: '', email: '', topic: topics[0], message: '' };

const EnquiryForm = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState({ state: 'idle', note: '' });
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Messages are delivered to org.contactFormEmail through FormSubmit — no backend of our own.
  const submit = async (e) => {
    e.preventDefault();
    if (e.target.elements._honey.value) return; // bot filled the hidden field
    setStatus({ state: 'sending', note: '' });
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${org.contactFormEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organisation: form.organisation || '—',
          topic: form.topic,
          message: form.message,
          _subject: `[AARTI website] ${form.topic} — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'Submission failed');
      setForm(emptyForm);
      setStatus({ state: 'sent', note: '' });
    } catch (err) {
      setStatus({ state: 'error', note: err.message });
    }
  };

  const mailtoFallback = `mailto:${org.email}?subject=${encodeURIComponent(`[${form.topic}] Enquiry from ${form.name}`)}&body=${encodeURIComponent(form.message)}`;

  if (status.state === 'sent') {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
          <FiCheckCircle className="h-6 w-6" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-ink">Thank you — message sent.</h2>
        <p className="mt-2 text-ink-soft">The AARTI team has received your enquiry and will reply to your email.</p>
        <button type="button" onClick={() => setStatus({ state: 'idle', note: '' })} className="mt-6 text-sm font-semibold text-brand-700 hover:underline dark:text-gold-400">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-9">
      <h2 className="font-display text-2xl font-semibold text-ink">Send an enquiry</h2>
      <p className="mt-2 text-sm text-ink-soft">Your message goes straight to the AARTI team. We usually reply by email.</p>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Full name
          <input required value={form.name} onChange={update('name')} className={field} autoComplete="name" />
        </label>
        <label className="text-sm font-medium text-ink">
          Organisation <span className="font-normal text-ink-soft">(optional)</span>
          <input value={form.organisation} onChange={update('organisation')} className={field} autoComplete="organization" />
        </label>
        <label className="text-sm font-medium text-ink">
          Email
          <input required type="email" value={form.email} onChange={update('email')} className={field} autoComplete="email" />
        </label>
        <label className="text-sm font-medium text-ink">
          Topic
          <select value={form.topic} onChange={update('topic')} className={field}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Message
          <textarea required rows={5} value={form.message} onChange={update('message')} className={field} placeholder="Tell us briefly what you have in mind…" />
        </label>
      </div>
      {status.state === 'error' && (
        <p role="alert" className="mt-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-200">
          Sorry, the message couldn’t be sent right now. Please try again, or{' '}
          <a href={mailtoFallback} className="font-semibold underline">
            email us directly
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status.state === 'sending'}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-wait disabled:opacity-70 dark:bg-gold-500 dark:text-brand-950 dark:hover:bg-gold-400"
      >
        {status.state === 'sending' ? (
          <>
            <FiLoader className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            <FiSend className="h-4 w-4" aria-hidden /> Send message
          </>
        )}
      </button>
    </form>
  );
};

const Contact = () => (
  <>
    <PageHeader
      eyebrow="Contact"
      title="Let’s talk."
      lead="For partnerships, sponsored research, start-up programmes or general enquiries, reach the office of the Managing Director."
    />
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          {[
            { icon: FiMapPin, title: 'Office of the Managing Director', lines: org.address, href: org.mapUrl, cta: 'Get directions' },
            { icon: FiMail, title: 'Email', lines: [org.email], href: `mailto:${org.email}`, cta: 'Write to us' },
            { icon: FiPhone, title: 'Phone', lines: [org.phone], href: `tel:${org.phoneHref}`, cta: 'Call now' },
          ].map(({ icon: Icon, title, lines, href, cta }) => (
            <div key={title} className="flex gap-5 rounded-3xl border border-line bg-surface p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-gold-400">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="font-semibold text-ink">{title}</h2>
                {lines.map((l) => (
                  <p key={l} className="text-sm leading-relaxed text-ink-soft">
                    {l}
                  </p>
                ))}
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline dark:text-gold-400"
                >
                  {cta} →
                </a>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 px-1 pt-2">
            <span className="text-sm text-ink-soft">Follow AARTI</span>
            <a href={org.social.x} target="_blank" rel="noopener noreferrer" aria-label="AARTI on X" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:bg-muted">
              <FaXTwitter className="h-4 w-4" />
            </a>
            <a href={org.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="AARTI on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:bg-muted">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-muted">
        <iframe
          title="Map showing James Thomson Building, IIT Roorkee"
          src={org.mapEmbed}
          className="h-[380px] w-full grayscale-[30%] dark:opacity-80 dark:invert-[0.9] dark:hue-rotate-180"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  </>
);

export default Contact;
