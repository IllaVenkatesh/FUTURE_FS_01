import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { certifications } from '../constants/data';
import { SectionHeading } from '../components/SectionHeading';

export function CertificationsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Recognition that reflects continuous growth."
          description="These credentials reinforce my commitment to modern technology, applied AI, and practical product development."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 shadow-[0_0_70px_rgba(37,99,235,0.1)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                  <BadgeCheck size={20} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400">{item.year}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{item.issuer}</p>
              <p className="mt-1 text-sm text-cyan-300">{item.partner}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
