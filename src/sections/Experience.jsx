import { motion } from "framer-motion";
import SectionFrame from "../components/SectionFrame.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <SectionFrame id="experience" title="Experience" compact>
      <div className="relative mx-auto max-w-4xl py-4">
        <div className="absolute left-4 top-0 h-full w-px bg-emerald-primary shadow-glow md:left-1/2" />
        <div className="space-y-12">
          {experience.map((entry, index) => (
            <motion.div
              key={`${entry.company}-${entry.duration}`}
              className={`relative md:flex ${index % 2 ? "md:justify-start" : "md:justify-end"}`}
              initial={{ opacity: 0, x: index % 2 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="absolute left-2.5 top-7 z-10 h-4 w-4 rounded-full border-2 border-emerald-soft bg-base shadow-glow md:left-[calc(50%-0.5rem)]" />
              <article className="glass-card ml-12 w-[calc(100%-3rem)] p-5 md:ml-0 md:w-[44%]">
                <h3 className="text-lg font-black">{entry.role}</h3>
                <p className="font-bold text-emerald-soft">{entry.company}</p>
                <p className="mb-4 text-xs text-muted">{entry.duration}</p>
                <ul className="space-y-2 text-sm leading-6 text-white/70">
                  {entry.responsibilities.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
