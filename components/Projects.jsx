"use client";
import { motion } from 'framer-motion';

const FALLBACK_IMAGE = '/Data_Explorer.jpg';

const projects = [
  {
    title: 'My Portfolio Website',
    description: 'Personal portfolio built with Next.js and Tailwind, featuring projects, skills and experience.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: '/',
    repo: 'https://github.com/yourname/portfolio',
    image: '/Mine.jpg',
  },
  {
    title: 'Coming soon',
    description: 'New project in progress. Check back shortly.',
    tech: ['TBD'],
    link: '#',
    repo: '#',
    image: FALLBACK_IMAGE,
  },
  {
    title: 'Coming soon',
    description: 'New project in progress. Check back shortly.',
    tech: ['TBD'],
    link: '#',
    repo: '#',
    image: FALLBACK_IMAGE,
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-10 sm:py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold">Projects</h2>
          <p className="text-slate-400 mt-2">Things I’ve built, designed or contributed to.</p>
        </div>
        <a href="#links" className="text-primary hover:underline">More links</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="group rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="relative h-40 bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src={p.image || FALLBACK_IMAGE}
                alt={`${p.title} screenshot`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  if (e.currentTarget.src.endsWith(p.image)) {
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }
                }}
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-xs border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a className="text-primary hover:underline" href={p.link} target="_blank" rel="noreferrer">Live</a>
                <a className="text-slate-300 hover:underline" href={p.repo} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

