import { motion } from 'framer-motion';
import { Cpu, GraduationCap, Sparkles } from 'lucide-react';
import { stats } from '../constants/data';
import { SectionHeading } from '../components/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Building software that feels as thoughtful as it is powerful."
          description="I am a full stack developer and AI enthusiast focused on creating resilient applications and intelligent systems that solve meaningful problems."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <div className="flex items-center gap-3 text-cyan-300">
              <GraduationCap size={22} />
              <p className="text-sm uppercase tracking-[0.3em]">Education</p>
            </div>
            <div className="mt-6 space-y-4 text-slate-300">
              <p className="text-lg font-semibold text-white">B.Tech Artificial Intelligence & Machine Learning</p>
              <p>Ideal Institute of Technology, Kakinada</p>
              <p>Graduation: 2027</p>
            </div>
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-slate-300">
              “I am a Full Stack Developer and AI enthusiast passionate about solving real-world problems through scalable software and intelligent systems. I enjoy building web applications, integrating AI tools into development workflows, and continuously learning modern technologies.”
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_80px_rgba(124,58,237,0.12)] backdrop-blur-xl">
            <div className="flex items-center gap-3 text-purple-300">
              <Cpu size={22} />
              <p className="text-sm uppercase tracking-[0.3em]">Core Snapshot</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-4">
              <div className="mb-3 flex items-center gap-2 text-cyan-300">
                <Sparkles size={16} />
                Interactive coding focus
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4 font-mono text-sm leading-7 text-slate-300">
                <p className="text-cyan-300">function buildImpact() {'{'}</p>
                <p className="ml-4">const product = createFullStackExperience();</p>
                <p className="ml-4">return shipWithPrecision(product);</p>
                <p>{'}'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
