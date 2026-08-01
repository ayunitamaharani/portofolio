import type { Project } from "@/data/projects";
import { PROJECT_TONES } from "./PROJECT_TONES";

export default function CaseBody({ project }: { project: Project }) {
  const t = PROJECT_TONES[project.tone];

  return (
    <div className="pb-10">
      <div className={"border-t border-dotted pt-[30px] " + t.rule}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className={
                m.todo
                  ? "flex items-center rounded-[1.3rem] border border-dashed px-[22px] py-5 " + t.todo
                  : "rounded-[1.3rem] px-[22px] py-5 " + t.stat
              }
            >
              {m.todo ? (
                <div className="font-label text-[10px] uppercase leading-[1.6] tracking-[.1em]">{m.label}</div>
              ) : (
                <>
                  <div className={"font-display text-[30px] font-bold tracking-[-.045em] " + t.statNum}>{m.value}</div>
                  <div className={"mt-1 font-label text-[9px] uppercase tracking-[.16em] " + t.statLabel}>{m.label}</div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-[34px] grid gap-11 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            {project.blocks.map((b) => (
              <div key={b.heading} className="mt-[26px] first:mt-0">
                <div className={"font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>{b.heading}</div>
                <p className={"mt-2.5 text-[15px] font-light leading-[1.7] text-pretty " + t.body}>
                  {b.chip && (
                    <span className={"mr-2 inline-block rounded-full border border-dashed px-[11px] py-1 font-label text-[9.5px] font-medium uppercase tracking-[.1em] " + t.todo}>
                      {b.chip}
                    </span>
                  )}
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <div>
            <div className={"font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>Workflow</div>
            <div className="mt-2.5">
              {project.workflow.map((s, i) => (
                <div
                  key={s.n}
                  className={"grid grid-cols-[36px_1fr] gap-3.5 py-[13px] " + (i < project.workflow.length - 1 ? "border-b border-dotted " + t.rule : "")}
                >
                  <span className={"font-serif text-[22px] italic leading-[1.2] " + t.num}>{s.n}</span>
                  <div>
                    <div className={"text-[14.5px] font-semibold " + t.title}>{s.title}</div>
                    <div className={"mt-[3px] text-[14px] font-light leading-[1.6] " + t.body}>{s.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {project.stack && (
              <>
                <div className={"mt-[22px] font-label text-[9.5px] font-semibold uppercase tracking-[.2em] " + t.kicker}>Full stack</div>
                <div className="mt-2.5 flex flex-wrap gap-[7px]">
                  {project.stack.map((x) => (
                    <span key={x} className={"rounded-full px-3 py-1.5 text-[11.5px] font-medium " + t.tag}>{x}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
