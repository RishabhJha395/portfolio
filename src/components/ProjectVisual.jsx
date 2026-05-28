export default function ProjectVisual({ theme }) {
  if (theme === "chess") {
    return (
      <div className="grid h-full grid-cols-8 overflow-hidden rounded-md">
        {Array.from({ length: 32 }).map((_, index) => (
          <span key={index} className={index % 2 ? "bg-[#6b8f62]" : "bg-[#f0d9b5]"} />
        ))}
      </div>
    );
  }

  if (theme === "youtube") {
    return (
      <div className="flex h-full items-center justify-center rounded-md bg-white text-center text-base font-black text-black">
        <div>
          <div className="mx-auto mb-3 flex h-10 w-14 items-center justify-center rounded-lg bg-red-600 text-white">Play</div>
          YouTube Sentiment Analyzer
        </div>
      </div>
    );
  }

  if (theme === "notes") {
    return (
      <div className="relative h-full rounded-md bg-slate-700 p-5">
        <div className="mb-4 flex gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-soft" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <span className="h-20 rounded bg-sky-300" />
          <span className="h-24 rounded bg-yellow-200" />
          <span className="h-20 rounded bg-green-300" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-md bg-[#151543]">
      <div className="absolute left-5 top-5 h-28 w-24 rounded bg-[#1d194f] shadow-2xl" />
      <div className="absolute left-28 top-8 h-24 w-24 rotate-45 rounded-xl bg-cyan-400/80" />
      <div className="absolute right-7 top-12 h-24 w-32 rounded-lg border border-emerald-soft/70 bg-white/10" />
      <div className="absolute bottom-6 left-10 h-2 w-24 rounded bg-purple-300" />
      <div className="absolute bottom-8 right-16 h-8 w-8 rounded bg-highlight/80" />
    </div>
  );
}
