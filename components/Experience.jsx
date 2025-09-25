"use client";
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Data Science Intern',
    org: 'Future Interns',
    period: 'Aug 2025 — Sep 2025',
    summary: 'Supported data analysis and model experimentation for internal projects.',
    bullets: [
      'Cleaned and explored datasets using Python, Pandas, and NumPy.',
      'Built baseline classifiers in scikit-learn and evaluated with cross‑validation.',
      'Communicated insights via concise reports and visualizations.'
    ]
  }
];

const volunteerRoles = [
  {
    role: 'Public Relations Officer',
    org: 'Google Developer Groups on Campus — Makerere University',
    period: 'Aug 2024 — Present',
    summary: 'Coordinate communication, events promotion, and community engagement for GDG on Campus.',
    bullets: [
      'Planned and promoted tech events, increasing attendance and reach.',
      'Managed announcements across campus channels and social platforms.',
      'Collaborated with core team to onboard speakers and partners.'
    ]
  },
  {
    role: 'AniScholar College Ambassador',
    org: 'Anischolar Career Hub',
    period: 'Sep 2025 — Present',
    summary: 'Represent AniScholar on campus and facilitate student program awareness and participation.',
    bullets: [
      'Organize info sessions and mentorship touch-points for interested students.',
      'Collect feedback and shared insights to improve program effectiveness.',
      'Support collaborative opportunities between AniScholar and student groups.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="container py-10 sm:py-14">
      <h2 className="text-2xl sm:text-3xl font-display font-semibold">Experience</h2>
      <div className="mt-6 grid gap-6">
        {experiences.map((e, i) => (
          <motion.div
            key={e.role}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-semibold text-lg">{e.role}</h3>
                <p className="text-slate-400">{e.org}</p>
              </div>
              <span className="text-sm text-slate-400">{e.period}</span>
            </div>
            <p className="text-slate-300 mt-3">{e.summary}</p>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <h3 className="text-xl sm:text-2xl font-display font-semibold mt-10">Volunteer</h3>
      <div className="mt-4 grid gap-6">
        {volunteerRoles.map((v, i) => (
          <motion.div
            key={v.role}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h4 className="font-semibold">{v.role}</h4>
                <p className="text-slate-400">{v.org}</p>
              </div>
              <span className="text-sm text-slate-400">{v.period}</span>
            </div>
            <p className="text-slate-300 mt-3">{v.summary}</p>
            <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
              {v.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

