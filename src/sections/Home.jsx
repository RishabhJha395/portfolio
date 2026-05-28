import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Button from "../components/Button.jsx";
import StatCard from "../components/StatCard.jsx";
import { profile } from "../data/profile.js";

export default function Home() {
  return (
    <section id="home" className="section-shell scroll-mt-4">
      <motion.div
        className="glass-panel flex min-h-[min(760px,calc(100vh-3rem))] w-full items-center justify-center px-5 py-20 text-center sm:px-10"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.h1
            className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Hi, I'm <span className="accent-text">{profile.name}</span>
          </motion.h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {profile.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/80 sm:text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-9 grid max-w-3xl gap-4 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="#projects">
              View Projects <FaArrowRight />
            </Button>
            <Button href={profile.resumeLink} target="_blank" rel="noreferrer" variant="ghost">
              <FaDownload /> Resume
            </Button>
            <Button href="#contact" variant="gold">
              Contact Me
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            {profile.socialLinks.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-primary/35 bg-white/10 text-xl text-white shadow-glow backdrop-blur transition hover:text-emerald-soft"
                whileHover={{ y: -4, scale: 1.08 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
