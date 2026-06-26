import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        <p>Designed & Developed by Venkatesh Illa</p>
        <p className="mt-2">GitHub • LinkedIn • Email</p>
      </footer>
    </div>
  );
}

export default App;
