import * as React from "react";
import { cn } from "@/lib/utils";

interface ChecklistItem {
  n: string;
  t: string;
  d: string;
}

export function ReconhecimentoChecklist({ items }: { items: ChecklistItem[] }) {
  const [checked, setChecked] = React.useState<Set<string>>(new Set());
  const [openIndex, setOpenIndex] = React.useState<string | null>(items[0]?.n ?? null);

  const toggleCheck = (n: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(n)) {
        next.delete(n);
      } else {
        next.add(n);
      }
      return next;
    });
  };

  const count = checked.size;
  const total = items.length;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex h-9 items-center rounded-full border border-accent/30 bg-accent/10 px-4 text-[0.82rem] font-medium text-accent">
          {count} de {total} reconhecidas
        </div>
        {count >= 3 && (
          <span className="text-[0.85rem] text-foreground/60">
            Isso já é sinal suficiente.
          </span>
        )}
      </div>

      <div className="border-t border-ink/12">
        {items.map((item) => {
          const isChecked = checked.has(item.n);
          const isOpen = openIndex === item.n;

          return (
            <div key={item.n} className="border-b border-ink/12">
              <div className="flex w-full items-start gap-4 py-6 md:gap-6 md:py-7">
                <button
                  type="button"
                  onClick={() => toggleCheck(item.n)}
                  aria-pressed={isChecked}
                  aria-label={
                    isChecked
                      ? `Desmarcar "${item.t}"`
                      : `Marcar "${item.t}" como reconhecido`
                  }
                  className={cn(
                    "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                    isChecked
                      ? "border-accent bg-accent"
                      : "border-ink/25 hover:border-accent/60",
                  )}
                >
                  <svg
                    viewBox="0 0 12 10"
                    className={cn(
                      "h-3 w-3 transition-opacity duration-200",
                      isChecked ? "opacity-100" : "opacity-0",
                    )}
                    fill="none"
                    stroke="var(--color-ink-foreground)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 5l3.2 3.2L11 1.5" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : item.n)}
                  aria-expanded={isOpen}
                  className="group flex min-w-0 flex-1 items-baseline gap-5 text-left md:gap-8"
                >
                  <span className="font-display text-[1.15rem] leading-none text-accent/60">
                    {item.n}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 text-[1.05rem] leading-snug text-ink transition-opacity md:text-[1.15rem]",
                      !isOpen && "opacity-80 group-hover:opacity-100",
                    )}
                  >
                    {item.t}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "relative mt-2 h-3 w-3 shrink-0 transition-transform duration-500 ease-out",
                      isOpen && "rotate-90",
                    )}
                  >
                    <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-accent" />
                    <span
                      className={cn(
                        "absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent transition-opacity duration-300",
                        isOpen && "opacity-0",
                      )}
                    />
                  </span>
                </button>
              </div>

              <div
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="pb-7 pl-10 text-[1.02rem] leading-[1.85] text-foreground/75 md:pl-[3.4rem]">
                    {item.d}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
