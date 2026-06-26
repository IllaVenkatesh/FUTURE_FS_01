import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants/data';
import { SectionHeading } from '../components/SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products designed to feel premium and purposeful."
          description="Each project reflects a deep focus on product thinking, clean architecture, and responsive interactions."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 120, damping: 18, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.03, rotateX: 1, rotateY: -1 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_0_80px_rgba(124,58,237,0.08)] transition-all duration-300 ease-out"
            >
              <div className="relative">
                <div className="mb-6 h-44 rounded-[1.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20" />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-cyan-300">{project.subtitle}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">Live Demo</a>
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"><FaGithub size={16} /> GitHub</a>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-white">Key Features</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-300" />{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
