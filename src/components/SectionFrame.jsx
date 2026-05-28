import Reveal from "./Reveal.jsx";

export default function SectionFrame({ id, eyebrow, title, children, compact = false }) {
  return (
    <section id={id} className="section-shell scroll-mt-4">
      <Reveal className="glass-panel min-h-[min(760px,calc(100vh-3rem))] w-full px-5 py-16 sm:px-8 lg:px-12">
        <div className="relative z-10 mx-auto max-w-7xl">
          {eyebrow && <p className="mb-3 text-sm font-bold uppercase text-emerald-soft">{eyebrow}</p>}
          {title && <h2 className="section-title mb-10">{title}</h2>}
          <div className={compact ? "mx-auto max-w-5xl" : ""}>{children}</div>
        </div>
      </Reveal>
    </section>
  );
}
