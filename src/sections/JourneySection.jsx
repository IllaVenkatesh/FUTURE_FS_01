import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { journey } from '../constants/data';
import { SectionHeading } from '../components/SectionHeading';

export function JourneySection() {
  return (
    <section id="journey" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience & Journey"
          title="A path shaped by curiosity, craft, and momentum."
          description="The story so far reflects a steady progression from learning fundamentals to building polished, end-to-end products."
        />
        <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl lg:p-10">
          <div className="relative ml-2 space-y-8 border-l border-cyan-400/25 pl-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[2.15rem] top-1 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{item.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
