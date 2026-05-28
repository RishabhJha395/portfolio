import { motion } from "framer-motion";
import BackToTop from "../components/BackToTop.jsx";
import Navbar from "../components/Navbar.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import { sections } from "../data/sections.js";
import { sectionRegistry } from "../utils/sectionRegistry.js";

export default function MainPage() {
  return (
    <motion.div
      className="min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <ScrollProgress />
      <Navbar />
      <main>
        {sections
          .filter((section) => section.enabled)
          .map((section) => {
            const Component = sectionRegistry[section.component];
            return Component ? <Component key={section.id} section={section} /> : null;
          })}
      </main>
      <footer className="mx-auto max-w-7xl px-6 pb-10 text-center text-xs text-white/45">
        Developed by <span className="font-bold text-emerald-soft">Rishabh Jha</span>
      </footer>
      <BackToTop />
    </motion.div>
  );
}
