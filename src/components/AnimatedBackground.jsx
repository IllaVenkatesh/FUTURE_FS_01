import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.2),_transparent_30%),linear-gradient(135deg,_rgba(5,8,22,1),_rgba(5,8,22,0.95))]" />
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 18 + index, repeat: Infinity, ease: 'easeInOut' }}
          style={{ left: `${10 + index * 9}%`, top: `${12 + index * 7}%` }}
        />
      ))}
    </div>
  );
}
