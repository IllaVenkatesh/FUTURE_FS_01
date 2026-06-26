import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';

export function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setFormState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await emailjs.send('service_id', 'template_id', formState, 'public_key');
      setSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s create something unforgettable."
          description="I’m open to full-time opportunities, interesting freelance work, and collaborations around AI and modern web products."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_80px_rgba(37,99,235,0.12)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Get in touch</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Ready to build with purpose?</h3>
            <p className="mt-4 text-base leading-8 text-slate-400">Whether it’s a product launch, an AI feature, or a full-stack platform, I’m always excited to discuss ambitious ideas.</p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p>✉️ venkateshilla@example.com</p>
              <p>📍 Kakinada, India</p>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(124,58,237,0.1)] backdrop-blur-xl">
            <div className="grid gap-5 md:grid-cols-2">
              <input name="name" value={formState.name} onChange={handleChange} required className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-0" placeholder="Name" />
              <input name="email" type="email" value={formState.email} onChange={handleChange} required className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-0" placeholder="Email" />
            </div>
            <input name="subject" value={formState.subject} onChange={handleChange} required className="mt-5 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-0" placeholder="Subject" />
            <textarea name="message" value={formState.message} onChange={handleChange} required className="mt-5 min-h-36 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-0" placeholder="Message" />
            <button type="submit" disabled={loading} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white">
              {loading ? 'Sending...' : <>Send Message <Send size={16} /></>}
            </button>
            {sent && <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 size={16} /> Message sent successfully.</div>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
