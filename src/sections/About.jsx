import Button from "../components/Button.jsx";
import SectionFrame from "../components/SectionFrame.jsx";
import { profile } from "../data/profile.js";

export default function About() {
  return (
    <SectionFrame id="about" compact>
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <div className="mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center rounded-full border-[6px] border-emerald-primary bg-emerald-primary/10 p-3 shadow-glow">
          <img
            src={profile.image}
            alt={profile.name}
            loading="lazy"
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">About Me</h2>
          <p className="max-w-2xl text-base leading-8 text-white/70">{profile.description}</p>
          <h3 className="mt-10 text-2xl font-black text-white">Education</h3>
          <div className="mt-5 space-y-5 border-l border-emerald-primary/45 pl-6">
            {profile.education.map((item) => (
              <div key={item.school} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-emerald-soft bg-base shadow-glow" />
                <h4 className="text-lg font-black">{item.school}</h4>
                <p className="text-sm text-muted">{item.detail}</p>
                <p className="text-lg font-bold text-white">{item.score}</p>
                <p className="text-xs font-bold text-white/50">{item.year}</p>
              </div>
            ))}
          </div>
          <Button href={profile.resumeLink} target="_blank" rel="noreferrer" variant="gold" className="mt-8 min-w-64">
            Resume
          </Button>
        </div>
      </div>
    </SectionFrame>
  );
}
