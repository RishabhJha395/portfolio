import { motion } from "framer-motion";
import SectionFrame from "../components/SectionFrame.jsx";
import { achievements } from "../data/achievements.js";

export default function Achievements() {
  return (
    <SectionFrame id="achievements" title="Achievements">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map(({ title, value, subtitle, icon: Icon, link, codoliolink }, index) => {
          const href = link ?? codoliolink;
          const Tag = href ? motion.a : motion.div;

          return (
            <Tag
              key={title}
              href={href}
              target={href ? "_blank" : undefined}
              rel={href ? "noreferrer" : undefined}
              className="glass-card block p-6 text-white"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <Icon className="mb-5 text-2xl text-highlight" />
              <p className="text-4xl font-black leading-none text-white drop-shadow">{value}</p>
              <h3 className="mt-3 text-base font-black text-white">{title}</h3>
              <p className="text-sm font-semibold text-white/80">{subtitle}</p>
            </Tag>
          );
        })}
      </div>
    </SectionFrame>
  );
}
