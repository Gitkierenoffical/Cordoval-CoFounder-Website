import { footer, sites } from "../content";

const linkClass =
  "rounded-md font-semibold text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Footer() {
  const links = [
    { href: sites.media, label: footer.mediaLabel },
    { href: sites.labs, label: footer.labsLabel },
    { href: "/", label: footer.cofounderLabel },
    { href: sites.code, label: footer.codeLabel },
    { href: sites.privacy, label: footer.privacyLabel },
    { href: sites.terms, label: footer.termsLabel },
  ];

  return (
    <footer className="bg-[#0B1B4A] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="text-sm leading-relaxed text-white/85">{footer.line}</p>
          <p className="mt-4 text-sm">
            {footer.contactLabel}:{" "}
            <a className={linkClass} href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm md:items-end">
            {links.map((link) => (
              <li key={link.label}>
                <a className={linkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
