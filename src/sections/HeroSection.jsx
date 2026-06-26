import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { heroHighlights } from '../constants/data';
import { AnimatedBackground } from '../components/AnimatedBackground';

export function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: heroHighlights,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <AnimatedBackground />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles size={16} />
            Available for impactful software opportunities
          </div>
          <h1 className="text-4xl font-semibold tracking-[0.25em] text-white sm:text-5xl lg:text-7xl">
            VENKATESH ILLA
          </h1>
          <p className="mt-4 text-xl font-medium text-cyan-300 sm:text-2xl">AI & Machine Learning Student</p>
          <p className="mt-2 text-xl text-slate-300 sm:text-2xl">Full Stack Developer</p>
          <div className="mt-6 min-h-10 text-lg text-slate-200 sm:text-xl">
            <span className="mr-2">I build</span>
            <span ref={typedRef} className="text-cyan-300" />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I build modern full-stack web applications and AI-powered solutions that solve real-world problems. Passionate about creating scalable software, intuitive user experiences, and impactful digital products.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.03, y: -2 }} href="#resume" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-medium text-white shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <Download size={18} /> Download Resume
            </motion.a>
            <motion.a whileHover={{ scale: 1.03, y: -2 }} href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-100">
              View Projects <ArrowRight size={18} />
            </motion.a>
          </div>
          <div className="mt-8 flex gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/IllaVenkatesh' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/illa-venkatesh/' },
              { icon: FaEnvelope, href: 'mailto:venkateshilla@example.com' }
            ].map(({ icon: Icon, href }) => (
              <motion.a key={href} whileHover={{ scale: 1.08, y: -2 }} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-slate-900/70 p-3 text-slate-200">
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_120px_rgba(37,99,235,0.2)] backdrop-blur-2xl">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-4">
              {['Full Stack Development', 'AI Systems', 'Scalable Backend', 'Product Thinking'].map((item, idx) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{item}</span>
                    <span className="text-cyan-300">0{idx + 1}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" style={{ width: `${75 + idx * 5}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
