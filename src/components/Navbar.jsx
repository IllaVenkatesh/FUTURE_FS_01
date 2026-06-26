import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../constants/data';
import { cn } from '../utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.35em] text-white">
          VI
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="hidden rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 md:inline-flex"
        >
          Let’s work together
        </motion.a>
        <button className="rounded-full border border-white/10 p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div className={cn('overflow-hidden border-t border-white/10 bg-slate-950/90 md:hidden', open ? 'max-h-64' : 'max-h-0')}>
        <div className="flex flex-col gap-3 px-4 py-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
