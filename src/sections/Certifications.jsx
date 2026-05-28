import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import Button from "../components/Button.jsx";
import SectionFrame from "../components/SectionFrame.jsx";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  return (
    <SectionFrame id="certifications" title="Certifications">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {certifications.map((item) => (
          <article key={item.title} className="glass-card p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-highlight/35 bg-highlight/10 text-xl text-highlight shadow-gold">
              <FaAward />
            </div>
            <h3 className="text-xl font-black text-white">{item.title}</h3>
            <p className="mt-2 font-bold text-emerald-soft">{item.issuer}</p>
            <p className="text-sm text-white/60">{item.year}</p>
            {item.link && (
              <Button href={item.link} target="_blank" rel="noreferrer" variant="ghost" className="mt-5 min-h-10 px-5 py-2">
                View Certificate <FaExternalLinkAlt />
              </Button>
            )}
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
