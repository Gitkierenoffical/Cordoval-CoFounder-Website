import { useEffect, useId, useState, type ReactNode } from "react";

const inverseLinkClass =
  "rounded-full px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

type NavItem = {
  href: string;
  label: string;
};

type ResponsiveNavProps = {
  items: readonly NavItem[];
  action?: ReactNode;
};

export default function ResponsiveNav({ items, action }: ResponsiveNavProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const linkClass = inverseLinkClass;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className="hidden min-[1100px]:flex items-center gap-1 text-sm font-semibold text-white/90" aria-label="Primary">
        {items.map((item) => (
          <a key={item.href} className={linkClass} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      {action ? <div className="hidden min-[1100px]:block">{action}</div> : null}
      <button
        type="button"
        className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-white ring-1 ring-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[1100px]:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <nav id={menuId} aria-label="Primary" className="absolute inset-x-0 top-full z-40 border-b border-white/10 bg-[#0B1B4A] px-4 py-4 shadow-lg min-[1100px]:hidden">
          <ul className="flex flex-col gap-1 text-base font-semibold text-white">
            {items.map((item) => (
              <li key={item.href}>
                <a className={`${linkClass} block`} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {action ? <div className="mt-4">{action}</div> : null}
        </nav>
      ) : null}
    </>
  );
}
