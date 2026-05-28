import { useState } from "react";
import Button from "../components/Button.jsx";
import SectionFrame from "../components/SectionFrame.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const canSend = form.name.trim() && form.email.includes("@") && form.message.trim();
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio message from ${form.name}`)}&body=${encodeURIComponent(
    `${form.message}\n\nReply to: ${form.email}`
  )}`;

  return (
    <SectionFrame id="contact" title="Contact">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr]">
        <div className="space-y-3">
          {profile.socialLinks.slice(0, 3).map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-3 px-5 py-3 font-bold transition hover:-translate-y-1 hover:text-emerald-soft"
            >
              <Icon /> {label}
            </a>
          ))}
        </div>
        <form className="glass-card mx-auto grid w-full max-w-md gap-4 p-6" onSubmit={(event) => event.preventDefault()}>
          <input
            aria-label="Name"
            placeholder="Name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm outline-none transition focus:border-emerald-primary"
          />
          <input
            aria-label="Email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm outline-none transition focus:border-emerald-primary"
          />
          <textarea
            aria-label="Message"
            placeholder="Message"
            rows="6"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="resize-none rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm outline-none transition focus:border-emerald-primary"
          />
          <Button as="a" href={canSend ? mailto : undefined} aria-disabled={!canSend} className={!canSend ? "pointer-events-none opacity-60" : ""}>
            Send
          </Button>
          
        </form>
        <div className="space-y-3">
          {profile.socialLinks.slice(3).map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-3 px-5 py-3 font-bold transition hover:-translate-y-1 hover:text-emerald-soft"
            >
              <Icon /> {label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="glass-card block px-5 py-4 text-sm text-white/75">
            <span className="block font-black text-white">Email</span>
            {profile.email}
          </a>
        </div>
      </div>
    </SectionFrame>
  );
}
