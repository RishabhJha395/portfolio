import { motion } from "framer-motion";
import SectionFrame from "../components/SectionFrame.jsx";
import { skills } from "../data/skills.js";

export default function Skills() {
  return (
    <SectionFrame id="skills" title="Skills">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="glass-card p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="mb-4 text-lg font-black text-white">{group.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map(({ name, icon: Icon }) => (
                <div key={name} className="flex min-h-20 items-center justify-center rounded-lg border border-white/10 bg-white/10 p-3 text-center">
                  <div>
                    <Icon className="mx-auto mb-2 text-3xl text-emerald-soft" />
                    <p className="text-xs font-bold text-white/75">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionFrame>
  );
}
