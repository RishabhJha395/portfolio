import { motion } from "framer-motion";
import { sections } from "../data/sections.js";
import { useActiveSection } from "../hooks/useActiveSection.js";

export default function Navbar() {
  const enabledSections = sections.filter((section) => section.enabled);
  const activeSection = useActiveSection(enabledSections.map((section) => section.id));

  return (
    <motion.header
      className="fixed inset-x-2 top-3 z-50 mx-auto max-w-6xl rounded-2xl border border-white/10 bg-black/60 px-2 py-2 backdrop-blur-xl sm:inset-x-4 sm:px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-center gap-2">
        <a href="#home" className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-primary/20 text-emerald-soft shadow-glow md:flex">
          <span className="h-3 w-3 rounded-full bg-emerald-soft" />
        </a>
        <div className="no-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto md:justify-center">
          {enabledSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-bold transition lg:px-3 lg:text-xs ${
                activeSection === section.id ? "bg-emerald-primary/15 text-emerald-soft" : "text-white/70 hover:text-white"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
