import * as React from "react";
import { cn } from "@/lib/utils";

export function Disclosure({
  label,
  index,
  children,
  tone = "light",
  defaultOpen = false,
}: {
  label: string;
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = React.useState(defaultOpen);

  const line = tone === "dark" ? "border-ink-foreground/15" : "border-ink/12";
  const title = tone === "dark" ? "text-ink-foreground" : "text-ink";
  const body = tone === "dark" ? "text-ink-foreground/70" : "text-foreground/75";
  const num = tone === "dark" ? "text-ink-foreground/40" : "text-accent/60";

  return (
    <div className={cn("border-b", line)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-baseline gap-5 py-6 text-left md:gap-8 md:py-7"
      >
        {index && (
          <span className={cn("font-display text-[1.15rem] leading-none", num)}>{index}</span>
        )}
        <span
          className={cn(
            "min-w-0 flex-1 text-[1.05rem] leading-snug transition-opacity md:text-[1.15rem]",
            title,
            !open && "opacity-80 group-hover:opacity-100",
          )}
        >
          {label}
        </span>
        <span
          aria-hidden
          className={cn(
            "relative mt-2 h-3 w-3 shrink-0 transition-transform duration-500 ease-out",
            open && "rotate-90",
          )}
        >
          <span className={cn("absolute left-0 top-1/2 h-px w-3 -translate-y-1/2", tone === "dark" ? "bg-ink-foreground/60" : "bg-accent")} />
          <span
            className={cn(
              "absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 transition-opacity duration-300",
              tone === "dark" ? "bg-ink-foreground/60" : "bg-accent",
              open && "opacity-0",
            )}
          />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className={cn("pb-7 text-[1.02rem] leading-[1.85] md:pl-[3.4rem]", body)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
