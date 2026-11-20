import { useEffect, useState, type KeyboardEvent, type MouseEvent } from "react";
import { CommandLine } from "./components/CommandLine";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  agents,
  cofounderSeo,
  contactEmail,
  downloads,
  faq,
  hero,
  heroShot,
  inkwellUrl,
  install,
  installTabs,
  installerFiles,
  installerUrl,
  licence,
  licenceUrl,
  models,
  ollamaUrl,
  openRouterKeysUrl,
  privacy,
  releaseUrl,
  screenshotNote,
  screenshots,
  sourceRepo,
  termsUrl,
} from "./content";
import { usePageMeta } from "./seo/usePageMeta";

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
  history.replaceState(null, "", `#${id}`);
}

function onSectionLink(event: MouseEvent<HTMLAnchorElement>) {
  const id = event.currentTarget.getAttribute("href")?.replace(/^#/, "");
  if (!id) return;
  event.preventDefault();
  event.stopPropagation();
  scrollToSection(id);
}

const pageLinks = [
  { href: "#agents", label: "Agents" },
  { href: "#privacy", label: "Privacy" },
  { href: "#download", label: "Download" },
  { href: "#install", label: "Install" },
  { href: "#model", label: "Models" },
  { href: "#faq", label: "FAQ" },
  { href: "#licence", label: "Licence" },
] as const;

export default function CofounderPage() {
  usePageMeta(cofounderSeo);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    scrollToSection(id);
  }, []);

  return (
    <div className={`page-shell min-h-screen text-[#0B1B4A] ${paused ? "brand-motion-off" : ""}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#0B1B4A]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero paused={paused} onTogglePause={() => setPaused((value) => !value)} />
        <ShotGallery />
        <AgentGrid />
        <Privacy />
        <Downloads />
        <Install />
        <Models />
        <Faq />
        <Licence />
      </main>
      <Footer />
    </div>
  );
}

function Hero({ paused, onTogglePause }: { paused: boolean; onTogglePause: () => void }) {
  return (
    <section className="relative overflow-hidden bg-[#071433] text-white" aria-labelledby="cofounder-hero-title">
      <div className="brand-hero-fx pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="brand-hero-wash pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid min-w-0 max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9EBEFF]">{hero.eyebrow}</p>
          <h1
            id="cofounder-hero-title"
            className="mt-4 max-w-full text-[clamp(2.7rem,8vw,6.2rem)] font-extrabold leading-[0.88] tracking-tight"
          >
            {hero.titleLead}
            <span className="brand-outline mt-1 block">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E7EEFF] sm:text-xl">{hero.summary}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#E7EEFF]">{hero.local}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {hero.facts.map((fact) => (
              <li key={fact} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#0B1B4A]">
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className={`${buttonClass} bg-white text-[#0A5CFF] hover:bg-[#E8F0FF] focus-visible:outline-white`}
              href={installerUrl(installerFiles.exe)}
            >
              {hero.windows}
            </a>
            <a
              className={`${buttonClass} bg-white text-[#0A5CFF] hover:bg-[#E8F0FF] focus-visible:outline-white`}
              href={installerUrl(installerFiles.appImage)}
            >
              {hero.linux}
            </a>
            <a
              className={`${buttonClass} bg-transparent text-white ring-2 ring-white hover:bg-white/10 focus-visible:outline-white`}
              href={`#${downloads.id}`}
              onClick={onSectionLink}
            >
              {hero.all}
            </a>
            <a
              className={`${buttonClass} bg-transparent text-white ring-2 ring-white hover:bg-white/10 focus-visible:outline-white`}
              href={sourceRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.github}
            </a>
          </div>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold">
            {pageLinks.map((link) => (
              <a key={link.href} className="underline decoration-white/40 underline-offset-4 hover:decoration-white" href={link.href} onClick={onSectionLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="min-w-0">
          <figure className="overflow-hidden rounded-2xl bg-[#0B1B4A] shadow-[0_28px_70px_-32px_rgba(0,0,0,0.85)] ring-1 ring-white/15">
            <img
              src={heroShot.src}
              alt={heroShot.alt}
              width={heroShot.width}
              height={heroShot.height}
              className="h-auto w-full"
              decoding="async"
              fetchPriority="high"
            />
            <figcaption className="px-4 py-3 text-sm font-semibold text-[#E7EEFF]">{heroShot.caption}</figcaption>
          </figure>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="brand-pause inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold ring-1 ring-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-pressed={paused}
              onClick={onTogglePause}
            >
              {paused ? "Play motion" : "Pause motion"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShotGallery() {
  return (
    <section aria-labelledby="shots-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 id="shots-title" className="max-w-4xl text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[0.9] tracking-tight">
          A look inside
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {screenshots.map((shot) => (
            <li key={shot.src}>
              <figure className="overflow-hidden rounded-2xl bg-[#F4F0FF] ring-1 ring-[#0B1B4A]/10">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-4 py-3 text-sm font-semibold text-[#1C2E5A]">{shot.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#1C2E5A]">{screenshotNote}</p>
      </div>
    </section>
  );
}

function AgentGrid() {
  return (
    <section id={agents.id} aria-labelledby="agents-title" className="scroll-mt-24 bg-[#F4F0FF]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{agents.eyebrow}</p>
        <h2 id="agents-title" className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-tight">
          {agents.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{agents.intro}</p>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.items.map((agent, index) => (
            <li key={agent.name} className="rounded-[1.5rem] bg-white p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A5CFF]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight">{agent.name}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#1C2E5A]">{agent.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id={privacy.id} aria-labelledby="privacy-title" className="scroll-mt-24 bg-[#0A5CFF] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E7EEFF]">{privacy.eyebrow}</p>
        <h2 id="privacy-title" className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-tight">
          {privacy.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl">{privacy.body}</p>
        <p className="mt-8 text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-tight tracking-tight">{privacy.none}</p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed">{privacy.linux}</p>
      </div>
    </section>
  );
}

function Downloads() {
  return (
    <section id={downloads.id} aria-labelledby="download-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{downloads.eyebrow}</p>
        <h2 id="download-title" className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-tight">
          {downloads.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{downloads.intro}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {downloads.items.map((item) => (
            <li key={item.id}>
              <a
                className="flex h-full flex-col rounded-[1.5rem] bg-[#F4F0FF] p-6 ring-1 ring-[#0B1B4A]/10 hover:ring-[#0A5CFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A5CFF] sm:p-8"
                href={item.href}
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A5CFF]">{item.platform}</p>
                <p className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{item.label}</p>
                <p className="mt-3 break-all font-mono text-sm leading-relaxed text-[#1C2E5A]">{item.file}</p>
                <p className="mt-6 text-base font-extrabold text-[#0A5CFF]">Download</p>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <a className="text-lg font-extrabold text-[#0A5CFF] underline-offset-4 hover:underline" href={releaseUrl} target="_blank" rel="noopener noreferrer">
            {downloads.releaseLabel}
          </a>
        </p>
      </div>
    </section>
  );
}

function Install() {
  const [active, setActive] = useState<(typeof installTabs)[number]["id"]>(installTabs[0].id);
  const current = installTabs.find((tab) => tab.id === active) ?? installTabs[0];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = installTabs.findIndex((tab) => tab.id === active);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const nextIndex =
      event.key === "Home" ? 0 : event.key === "End" ? installTabs.length - 1 : event.key === "ArrowRight" ? index + 1 : index - 1;
    const tab = installTabs[(nextIndex + installTabs.length) % installTabs.length];
    setActive(tab.id);
    document.getElementById(`cofounder-install-tab-${tab.id}`)?.focus();
  }

  return (
    <section id={install.id} aria-labelledby="install-title" className="scroll-mt-24 bg-[#E7EEFF]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{install.eyebrow}</p>
        <h2 id="install-title" className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-tight">
          {install.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{install.intro}</p>
        <div role="tablist" aria-label="Install instructions by file" className="mt-10 flex flex-wrap gap-2" onKeyDown={onKeyDown}>
          {installTabs.map((tab) => {
            const selected = tab.id === current.id;
            return (
              <button
                key={tab.id}
                id={`cofounder-install-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`cofounder-install-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                className={`min-h-11 rounded-full px-4 py-2 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A5CFF] ${selected ? "bg-[#0A5CFF] text-white" : "bg-white text-[#0B1B4A]"}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div role="tabpanel" id={`cofounder-install-panel-${current.id}`} aria-labelledby={`cofounder-install-tab-${current.id}`} className="mt-10 max-w-3xl">
          <ol className="space-y-10">
            {current.steps.map((step, index) => (
              <li key={step.title}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0A5CFF]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">{step.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[#1C2E5A]">{step.body}</p>
                {"href" in step && step.href ? (
                  <p className="mt-3 break-all">
                    <a className="font-semibold text-[#0A5CFF] underline-offset-4 hover:underline" href={step.href}>
                      {step.linkLabel}
                    </a>
                  </p>
                ) : null}
                {"commands" in step
                  ? step.commands.map((command) => (
                      <div key={command}>
                        <CommandLine command={command} />
                      </div>
                    ))
                  : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Models() {
  return (
    <section id={models.id} aria-labelledby="model-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{models.eyebrow}</p>
        <h2 id="model-title" className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-tight">
          {models.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{models.intro}</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.5rem] bg-[#0A5CFF] p-6 text-white sm:p-8">
            <h3 className="text-3xl font-extrabold tracking-tight">{models.inkwellTitle}</h3>
            <p className="mt-4 text-lg leading-relaxed">{models.inkwellBody}</p>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-lg leading-relaxed">
              {models.inkwellSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-6 flex flex-col items-start gap-3">
              <a className="font-extrabold underline decoration-white/50 underline-offset-4 hover:decoration-white" href={ollamaUrl} target="_blank" rel="noopener noreferrer">
                {models.ollamaCta}
              </a>
              <a className="font-extrabold underline decoration-white/50 underline-offset-4 hover:decoration-white" href={inkwellUrl} target="_blank" rel="noopener noreferrer">
                {models.inkwellCta}
              </a>
            </p>
          </article>
          <article className="rounded-[1.5rem] bg-[#07111F] p-6 text-white sm:p-8">
            <h3 className="text-3xl font-extrabold tracking-tight">{models.openRouterTitle}</h3>
            <p className="mt-4 text-lg leading-relaxed text-[#E7EEFF]">{models.openRouterBody}</p>
            <ol className="mt-6 list-decimal space-y-3 pl-5 text-lg leading-relaxed text-[#E7EEFF]">
              {models.openRouterSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-6">
              <a className="font-extrabold text-white underline decoration-[#0A5CFF] decoration-2 underline-offset-4 hover:decoration-white" href={openRouterKeysUrl} target="_blank" rel="noopener noreferrer">
                {models.openRouterCta}
              </a>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id={faq.id} aria-labelledby="faq-title" className="scroll-mt-24 bg-[#F4F0FF]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <h2 id="faq-title" className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-tight">
          {faq.title}
        </h2>
        <div className="mt-8 divide-y divide-[#0B1B4A]/10 border-y border-[#0B1B4A]/10">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer text-xl font-extrabold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A5CFF]">
                {item.question}
              </summary>
              <p className="mt-3 text-lg leading-relaxed text-[#1C2E5A]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Licence() {
  return (
    <section id={licence.id} aria-labelledby="licence-title" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0A5CFF]">{licence.eyebrow}</p>
        <h2 id="licence-title" className="mt-3 max-w-4xl text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.9] tracking-tight">
          {licence.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{licence.body}</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{licence.attribution}</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#1C2E5A]">{licence.asIs}</p>
        <ul className="mt-8 flex flex-col gap-3 text-lg font-extrabold">
          <li>
            <a className="text-[#0A5CFF] underline-offset-4 hover:underline" href={licenceUrl} target="_blank" rel="noopener noreferrer">
              {licence.licenceLabel}
            </a>
          </li>
          <li>
            <a className="text-[#0A5CFF] underline-offset-4 hover:underline" href={termsUrl} target="_blank" rel="noopener noreferrer">
              {licence.termsLabel}
            </a>
          </li>
          <li>
            <a className="text-[#0A5CFF] underline-offset-4 hover:underline" href={sourceRepo} target="_blank" rel="noopener noreferrer">
              {licence.sourceLabel}
            </a>
          </li>
        </ul>
        <p className="mt-8 text-lg text-[#1C2E5A]">
          {licence.contactLabel}:{" "}
          <a className="font-extrabold text-[#0A5CFF] underline-offset-4 hover:underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
