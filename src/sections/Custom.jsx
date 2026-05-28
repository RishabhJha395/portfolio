import SectionFrame from "../components/SectionFrame.jsx";
import { customSections } from "../data/customSections.js";

export default function Custom({ section }) {
  const content = customSections[section.id];

  if (!content) {
    return null;
  }

  return (
    <SectionFrame id={section.id} title={content.title ?? section.label}>
      {content.description && <p className="mx-auto mb-8 max-w-2xl text-center leading-7 text-white/70">{content.description}</p>}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {(content.items ?? []).map((item) => (
          <article key={item.title} className="glass-card p-6">
            <h3 className="text-xl font-black">{item.title}</h3>
            {item.description && <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>}
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
