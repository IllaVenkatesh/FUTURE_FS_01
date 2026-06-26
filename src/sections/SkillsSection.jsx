import { motion } from 'framer-motion';
import { Code2, Layers3, ServerCog, Database, Bot } from 'lucide-react';
import { skills } from '../constants/data';
import { SectionHeading } from '../components/SectionHeading';

const skillGroups = [
  { title: 'Languages', icon: Code2, items: skills.languages },
  { title: 'Frontend', icon: Layers3, items: skills.frontend },
  { title: 'Backend', icon: ServerCog, items: skills.backend },
  { title: 'Databases', icon: Database, items: skills.databases },
  { title: 'AI & Tools', icon: Bot, items: skills.tools }
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Elegant systems, engineered with precision."
          description="My toolkit spans product development, modern frontend architecture, backend APIs, data stores, and AI-driven workflows."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_70px_rgba(37,99,235,0.12)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <Icon size={20} />
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
