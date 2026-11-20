import ResponsiveNav from "./ResponsiveNav";
import { sites } from "../content";

const actionClass =
  "inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A5CFF] hover:bg-[#E8F0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[1100px]:w-auto";

const nav = [
  { href: sites.whatWeDo, label: "What we do" },
  { href: sites.howWeWork, label: "How we work" },
  { href: sites.products, label: "Products" },
  { href: sites.media, label: "Media" },
  { href: sites.labs, label: "Labs" },
  { href: "/", label: "Co-Founder" },
  { href: sites.code, label: "Code" },
  { href: sites.workWithUs, label: "Work with us" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1B4A]/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href={sites.brand}
          className="inline-flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <img src="/cordoval.svg" alt="" width={40} height={40} className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">Cordoval</span>
        </a>
        <ResponsiveNav
          items={nav}
          action={
            <a className={actionClass} href={sites.products}>
              See the products
            </a>
          }
        />
      </div>
    </header>
  );
}
