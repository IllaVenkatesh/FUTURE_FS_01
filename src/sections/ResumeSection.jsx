import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export function ResumeSection() {
  return (
    <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resume"
          title="A polished overview of my background and direction."
          description="Download my resume to explore my experience, education, and technical focus in one place."
        />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mt-12 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_90px_rgba(37,99,235,0.12)] backdrop-blur-xl lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
                <FileText size={16} /> Professional Summary
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white">Venkatesh Illa</h3>
              <p className="mt-3 text-lg leading-8 text-slate-400">Full Stack Developer and AI enthusiast building modern applications with a strong focus on product impact, scalable architecture, and user experience.</p>
            </div>
            <a href="/resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-400"><span className="h-2.5 w-2.5 rounded-full bg-cyan-300" /> Resume preview</div>
            <div className="mt-5 rounded-[1.25rem] border border-cyan-400/20 bg-slate-950/80 p-6 text-sm leading-7 text-slate-300">
              <p>Education: B.Tech in Artificial Intelligence & Machine Learning</p>
              <p>Focus: Full Stack Development, AI Integration, Backend Engineering</p>
              <p>Experience: Building customer-facing products, internal tools, and intelligent systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
