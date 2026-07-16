import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Button from "../components/Button.jsx";
import ProjectVisual from "../components/ProjectVisual.jsx";
import SectionFrame from "../components/SectionFrame.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const technologies = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((project) => project.techStack)))],
    []
  );
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.techStack.includes(filter));

  return (
    <SectionFrame id="projects" title="Projects">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <button
            key={technology}
            type="button"
            onClick={() => setFilter(technology)}
            className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
              filter === technology
                ? "border-emerald-primary bg-emerald-primary text-[#0A0A0A]"
                : "border-white/10 bg-white/10 text-white/70 hover:border-emerald-primary/50 hover:text-white"
            }`}
          >
            {technology}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => {
          const hasDemo = project.liveDemo && project.liveDemo !== "https://example.com";

          return (
            <motion.article
              key={project.title}
              className="glass-card p-4"
              layout
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[3/2] overflow-hidden rounded-lg border border-white/10 bg-black/30 relative">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                ) : (
                  <ProjectVisual theme={project.theme} />
                )}
              </div>
              <div className="mt-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black">{project.title}</h3>
                  {project.featured && (
                    <span className="rounded-full bg-highlight/15 px-3 py-1 text-xs font-bold text-highlight">Featured</span>
                  )}
                </div>
                <p className="mt-3 min-h-16 text-sm leading-6 text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-md bg-emerald-primary/15 px-2.5 py-1 text-[11px] font-bold text-emerald-soft">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={project.github} target="_blank" rel="noreferrer" variant="ghost" className="min-h-10 px-5 py-2">
                    <FaGithub /> GitHub
                  </Button>
                  {hasDemo && (
                    <Button href={project.liveDemo} target="_blank" rel="noreferrer" className="min-h-10 px-5 py-2">
                      Demo <FaExternalLinkAlt />
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionFrame>
  );
}
