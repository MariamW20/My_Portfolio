"use client";
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="container py-20 sm:py-28">
      <div className="grid gap-10 sm:gap-14 md:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <motion.p
            className="uppercase tracking-widest text-xl sm:text-2xl text-slate-200"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            I am
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Mariam Wambui
          </motion.h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Software Engineering student at Makerere University. I build for the web,
            explore data and experiment with machine learning and Web 3.0.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-primary text-white hover:bg-primary-dark transition">View Projects</a>
            <a href="/Mariam_Wambui_CV.pdf" download className="px-5 py-2.5 rounded-md border border-slate-600 hover:border-primary text-slate-200 hover:text-white hover:bg-primary/10 transition">Download CV</a>
          </div>
          {/* social icons removed as requested */}
        </motion.div>
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="aspect-square w-64 sm:w-80 md:w-96 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/30 to-purple-500/30 blur-2xl absolute -top-6 -left-6 -z-10" />
          <div className="p-1 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 inline-block">
            <div className="rounded-full bg-white p-2 shadow-xl border border-black/5">
              <img src="/MyImage.png" alt="Mariam Wambui profile" className="w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 rounded-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

