"use client";
import { useState } from "react";

const EMAIL = "ayunitamaharanipq@gmail.com";
const field =
  "w-full rounded-[1rem] border border-ink/15 bg-cream px-4 py-[13px] text-[14px] text-ink outline-none focus:border-teal";

/** No backend: composes a mailto: so the message opens in the visitor's mail client. */
export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });

  const href =
    "mailto:" + EMAIL +
    "?subject=" + encodeURIComponent(f.subject || "Hello from your portfolio") +
    "&body=" + encodeURIComponent(f.message + "\n\n— " + f.name + " (" + f.email + ")");

  return (
    <div className="inner-hi rounded-card-in bg-sand px-[34px] pb-[34px] pt-8">
      <div className="font-label text-[9.5px] uppercase tracking-[.2em] text-cocoa/45">Send a message</div>
      <div className="mt-[18px] grid gap-3 sm:grid-cols-2">
        <input className={field} placeholder="Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input className={field} type="email" placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      </div>
      <input className={field + " mt-3"} placeholder="Subject" value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} />
      <textarea
        className={field + " mt-3 resize-y leading-[1.6]"}
        rows={4}
        placeholder="Message"
        value={f.message}
        onChange={(e) => setF({ ...f, message: e.target.value })}
      />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <span className="font-label text-[10.5px] uppercase tracking-[.1em] text-cocoa/45">Opens in your email app</span>
        <a
          href={href}
          className="inline-flex items-center gap-[11px] rounded-full bg-ink py-2 pl-5 pr-2 transition-transform duration-500 ease-soft hover:scale-[1.03]"
        >
          <span className="text-[12.5px] font-bold text-cream">Send message</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream/15 font-label text-[12px] font-light text-cream">↗</span>
        </a>
      </div>
    </div>
  );
}
