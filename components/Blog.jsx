"use client";
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'My Journey to Software Development.',
    date: 'Sep 2025',
    excerpt: 'A passionate software engineering student with love for technology.',
    link: 'https://medium.com/@mariamw107/my-journey-to-software-development-11332d917942',
    tags: ['Medium', 'Web', 'DS']
  }
];

export function Blog() {
  return (
    <section id="blog" className="container py-10 sm:py-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold">Blog</h2>
          <p className="text-slate-400 mt-2">Writing on web, data, ML and community</p>
        </div>
        <a href="#links" className="text-primary hover:underline">Say hello</a>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-6 sm:gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="text-sm text-slate-400">{p.date}</div>
            <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-xs border border-white/10">{t}</span>
              ))}
            </div>
            <a href={p.link} className="mt-4 inline-block text-primary hover:underline">Read</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


