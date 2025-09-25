"use client";
import { motion } from 'framer-motion';

const socials = [
  { name: 'GitHub', href: 'https://github.com/MariamW20' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mariam-wambui-942458278/' },
  { name: 'Email', href: 'mariamwambui107@gmail.com' },
];

export function Links() {
  return (
    <section id="links" className="container py-10 sm:py-14">
      <motion.div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl sm:text-3xl font-display font-semibold">Let’s connect</h2>
        <p className="text-slate-400 mt-2">I’m open to internships, collaborations and community contributions.</p>
        <div className="mt-5 flex items-center justify-center gap-4 flex-wrap">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 hover:border-primary text-slate-200 hover:text-white hover:bg-primary/10 transition">
              {s.name === 'GitHub' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
              )}
              {s.name === 'LinkedIn' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.82-2.1 3.75-2.1 4.01 0 4.75 2.64 4.75 6.07V24h-4v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V24h-4V8.5z"/></svg>
              )}
              {s.name === 'Email' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.3-.5 7.2 5.1L18.7 6H4.3Zm15.2 1.9-7.7 5.4-7.7-5.4V17.5c0 .28.22.5.5.5h14c.28 0 .5-.22.5-.5V7.9Z"/></svg>
              )}
              <span>{s.name}</span>
            </a>
          ))}
          <a href="/My_CV.pdf" download className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition">
            Download CV
          </a>
        </div>
      </motion.div>
      <footer className="text-center text-xs text-slate-500 mt-6">
        © {new Date().getFullYear()} Mariam Wambui.
      </footer>
    </section>
  );
}

