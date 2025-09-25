"use client";
import { motion } from 'framer-motion';

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm">
    {children}
  </span>
);

export function Skills() {
  return (
    <section id="skills" className="container py-10 sm:py-14">
      <h2 className="text-2xl sm:text-3xl font-display font-semibold">Skills</h2>
      <p className="text-slate-400 mt-2">Web 2.0, Data Science & Machine Learning and Web 3.0</p>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-8">
        <motion.div className="rounded-xl border border-white/10 bg-white/[0.02] p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="font-medium text-slate-200">Web 2.0</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <SkillBadge>HTML5</SkillBadge>
            <SkillBadge>CSS3</SkillBadge>
            <SkillBadge>JavaScript (ES6+)</SkillBadge>
            <SkillBadge>Next.js</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Tailwind CSS</SkillBadge>
            <SkillBadge>Node.js</SkillBadge>
            <SkillBadge>Express</SkillBadge>
          </div>
        </motion.div>

        <motion.div className="rounded-xl border border-white/10 bg-white/[0.02] p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          <h3 className="font-medium text-slate-200">Data Science & ML</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>Pandas</SkillBadge>
            <SkillBadge>NumPy</SkillBadge>
            <SkillBadge>scikit-learn</SkillBadge>
            <SkillBadge>TensorFlow</SkillBadge>
            <SkillBadge>PyTorch</SkillBadge>
            <SkillBadge>Matplotlib</SkillBadge>
            <SkillBadge>Jupyter</SkillBadge>
          </div>
        </motion.div>

        <motion.div className="rounded-xl border border-white/10 bg-white/[0.02] p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h3 className="font-medium text-slate-200">Web 3.0</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            <SkillBadge>Solidity</SkillBadge>
            <SkillBadge>Hardhat</SkillBadge>
            <SkillBadge>Ethers.js</SkillBadge>
            <SkillBadge>IPFS</SkillBadge>
            <SkillBadge>Metamask</SkillBadge>
            <SkillBadge>Polygon</SkillBadge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

