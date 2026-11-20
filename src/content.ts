import type { PageMeta } from "./seo/types";

/**
 * Cordoval Co-Founder product page.
 * British English. Cordoval is a brand, never a company.
 * Windows and Linux only. Do not mention Llama.
 * The only public contact is management@cordoval.co.uk.
 * Installer file names are the v1.1.0 GitHub release assets. Use them exactly.
 */

export const COFOUNDER_ORIGIN = "https://cofounder.cordoval.co.uk";

export const cofounderSeo: PageMeta = {
  title: "Cordoval Co-Founder | Desktop app for a business idea",
  description:
    "Cordoval Co-Founder is a free, open-source desktop app for Windows and Linux. Nine AI agents turn a business idea into validation, research, financials, a roadmap, marketing, documents and a website. Your data stays on your machine.",
  canonical: `${COFOUNDER_ORIGIN}/`,
  image: `${COFOUNDER_ORIGIN}/cofounder/overview.png`,
  siteName: "Cordoval Co-Founder",
};

export const sourceRepo = "https://github.com/Gitkierenoffical/Cordoval-Co-Founder";
export const licenceUrl = `${sourceRepo}/blob/main/LICENSE`;
export const termsUrl = `${sourceRepo}/blob/main/TERMS_OF_USE.md`;
export const releaseUrl = `${sourceRepo}/releases/tag/v1.1.0`;
export const inkwellUrl = "https://huggingface.co/kierendaystudios/cordoval-inkwell-1";
export const ollamaUrl = "https://ollama.com/download";
export const openRouterKeysUrl = "https://openrouter.ai/keys";
export const contactEmail = "management@cordoval.co.uk";

const releaseBase = `${sourceRepo}/releases/download/v1.1.0`;

export const installerFiles = {
  exe: "Cordoval.Co-Founder_1.1.0_x64-setup.exe",
  msi: "Cordoval.Co-Founder_1.1.0_x64_en-US.msi",
  appImage: "Cordoval.Co-Founder_1.1.0_amd64.AppImage",
  deb: "Cordoval.Co-Founder_1.1.0_amd64.deb",
} as const;

export function installerUrl(file: string): string {
  return `${releaseBase}/${file}`;
}

export const hero = {
  eyebrow: "Cordoval Co-Founder",
  titleLead: "An AI co-founder",
  titleAccent: "that ships the work.",
  summary:
    "A free, open-source desktop app for Windows and Linux. Describe a business idea. Nine AI agents produce validation, a lean canvas, research, financials, a roadmap, marketing, documents and a website.",
  local: "It is a Tauri app, and it runs on your computer. Chat with the CEO agent, then export the work to Markdown, DOCX or ZIP.",
  facts: ["Free and open source", "Windows and Linux", "Local-first", "MIT licence"],
  windows: "Download for Windows",
  linux: "Download for Linux",
  all: "All downloads",
  github: "View on GitHub",
} as const;

export type CofounderShot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const heroShot: CofounderShot = {
  src: "/cofounder/overview.png",
  alt: "Cordoval Co-Founder overview of a sample workspace, with a validation score, pipeline stages, tasks and year-one revenue.",
  caption: "Overview of a workspace",
  width: 1608,
  height: 1030,
};

export const screenshots: readonly CofounderShot[] = [
  {
    src: "/cofounder/chat.png",
    alt: "A chat with the CEO agent in Cordoval Co-Founder. The reply says the Builder files are waiting for approval before anything is written to disk.",
    caption: "Chat with the CEO",
    width: 1608,
    height: 1030,
  },
  {
    src: "/cofounder/builder-progress.png",
    alt: "The Builder writing a website file, with a list of documents from the Builder, Documenter, Marketer and Researcher.",
    caption: "The Builder at work",
    width: 1370,
    height: 890,
  },
  {
    src: "/cofounder/builder-approval.png",
    alt: "An approval screen with a file tree and a preview of index.html. The files are not saved until you approve them.",
    caption: "Approve before it saves",
    width: 1370,
    height: 890,
  },
  {
    src: "/cofounder/financials-dark.png",
    alt: "Financials in dark mode for a sample workspace, with a revenue and costs chart and a 12-month table.",
    caption: "Financials, with the maths checked",
    width: 1608,
    height: 1030,
  },
];

export const screenshotNote =
  "The screenshots show sample workspaces. Financial figures are illustrative. AI output can be wrong, and it is not financial, legal or other professional advice.";

export const agents = {
  id: "agents",
  eyebrow: "Nine agents",
  title: "One idea, a whole desk.",
  intro:
    "The nine agents take a business idea and produce validation, a lean canvas, research, financials with built-in maths checks, a roadmap, marketing, documents and website code. You can export that work to Markdown, DOCX or ZIP.",
  items: [
    {
      name: "CEO",
      body: "The agent you chat with. It works out which specialists to call, then reports back.",
    },
    {
      name: "Clarifier",
      body: "Turns a rough idea into a clear profile: problem, customer, solution, unique value, assumptions, risks and a validation score.",
    },
    {
      name: "Researcher",
      body: "Searches the web for market size, trends and competitors, and cites its sources. That search uses DuckDuckGo, so it does not need an API key.",
    },
    {
      name: "Planner",
      body: "Lean canvas, a 12-month financial model, milestones and a task backlog. After the model answers, the app checks the maths: revenue, costs, profit, break-even, CAC payback and LTV.",
    },
    {
      name: "Builder",
      body: "Writes real website code, including HTML, CSS and JS. Files are saved to disk only after you approve them.",
    },
    {
      name: "Marketer",
      body: "Positioning, messaging, channels, an 8-week content calendar, SEO keywords and an email draft.",
    },
    {
      name: "Documenter",
      body: "Business plans and the other documents you ask for, in Markdown. Every version is kept.",
    },
    {
      name: "Operations",
      body: "Reviews the backlog, flags blockers and adds the next tasks. It can run on a schedule while the app is open.",
    },
    {
      name: "Critic",
      body: "Reviews the work for consistency, grounding and quality. If the score is below the threshold you set, it sends the plan back for revision.",
    },
  ],
} as const;

export const privacy = {
  id: "privacy",
  eyebrow: "Local-first",
  title: "Your work stays on your machine.",
  body: "Workspaces live in a SQLite database on your computer. API keys live in the operating system keychain, not in that database. Nothing is written to disk until you approve it.",
  none: "No account. No telemetry.",
  linux:
    "On Linux, the keychain needs a Secret Service provider such as GNOME Keyring or KWallet. Most desktops already have one.",
} as const;

export const downloads = {
  id: "download",
  eyebrow: "Download",
  title: "Version 1.1.0",
  intro: "Direct downloads for Windows and Linux. These are the files from release v1.1.0.",
  releaseLabel: "Release v1.1.0 on GitHub",
  items: [
    {
      id: "exe",
      platform: "Windows",
      label: "Installer (.exe)",
      file: installerFiles.exe,
      href: installerUrl(installerFiles.exe),
    },
    {
      id: "msi",
      platform: "Windows",
      label: "Installer (.msi)",
      file: installerFiles.msi,
      href: installerUrl(installerFiles.msi),
    },
    {
      id: "appimage",
      platform: "Linux",
      label: "AppImage",
      file: installerFiles.appImage,
      href: installerUrl(installerFiles.appImage),
    },
    {
      id: "deb",
      platform: "Linux",
      label: "Debian package (.deb)",
      file: installerFiles.deb,
      href: installerUrl(installerFiles.deb),
    },
  ],
} as const;

export const install = {
  id: "install",
  eyebrow: "Install",
  title: "Step by step.",
  intro: "Pick the file you downloaded. Each set of steps stands on its own.",
} as const;

export const installTabs = [
  {
    id: "exe",
    label: "Windows .exe",
    steps: [
      {
        title: "Download the installer",
        body: "Save the Windows setup file.",
        href: installerUrl(installerFiles.exe),
        linkLabel: installerFiles.exe,
      },
      {
        title: "Run it",
        body: "SmartScreen shows that the app is unsigned. Click More info, then Run anyway.",
      },
      {
        title: "Open the app",
        body: "Open Cordoval Co-Founder from the Start menu and follow the setup steps.",
      },
    ],
  },
  {
    id: "msi",
    label: "Windows .msi",
    steps: [
      {
        title: "Download the installer",
        body: "Save the Windows installer package.",
        href: installerUrl(installerFiles.msi),
        linkLabel: installerFiles.msi,
      },
      {
        title: "Run it",
        body: "SmartScreen shows that the app is unsigned. Click More info, then Run anyway.",
      },
      {
        title: "Open the app",
        body: "Open Cordoval Co-Founder from the Start menu and follow the setup steps.",
      },
    ],
  },
  {
    id: "appimage",
    label: "Linux AppImage",
    steps: [
      {
        title: "Download the AppImage",
        body: "Save the file, then open a terminal in that folder.",
        href: installerUrl(installerFiles.appImage),
        linkLabel: installerFiles.appImage,
      },
      {
        title: "Allow it to run, then start it",
        body: "chmod +x makes the file executable. The second command starts it.",
        commands: [`chmod +x ${installerFiles.appImage}`, `./${installerFiles.appImage}`],
      },
    ],
  },
  {
    id: "deb",
    label: "Linux .deb",
    steps: [
      {
        title: "Download the package",
        body: "This package is for Debian and Ubuntu. Save it, then open a terminal in that folder.",
        href: installerUrl(installerFiles.deb),
        linkLabel: installerFiles.deb,
      },
      {
        title: "Install it",
        body: "apt installs the package from the current folder.",
        commands: [`sudo apt install ./${installerFiles.deb}`],
      },
    ],
  },
] as const;

export const models = {
  id: "model",
  eyebrow: "A model",
  title: "Inkwell-1 on your machine, or OpenRouter.",
  intro: "Use Cordoval Inkwell-1 locally, or bring an OpenRouter key.",
  inkwellTitle: "Cordoval Inkwell-1",
  inkwellBody:
    "Run the model on your computer with Ollama. It needs Ollama and about 8 GB of free RAM. A GPU is much faster.",
  inkwellSteps: [
    "Install Ollama.",
    "Open Cordoval Co-Founder and choose Inkwell-1. The app can download the model and set it up in Ollama.",
    "Leave about 8 GB of RAM free. A GPU is much faster than a CPU.",
  ],
  inkwellCta: "Inkwell-1 on Hugging Face",
  ollamaCta: "Download Ollama",
  openRouterTitle: "OpenRouter",
  openRouterBody: "Use OpenRouter with your own key. Free models are used by default. The key stays in the OS keychain.",
  openRouterSteps: ["Create a key at OpenRouter.", "Add the key in the app. It is stored in the OS keychain."],
  openRouterCta: "Create an OpenRouter key",
} as const;

export const faq = {
  id: "faq",
  title: "FAQ",
  items: [
    {
      question: "What is Cordoval Co-Founder?",
      answer:
        "A free, open-source desktop app from Cordoval, for Windows and Linux. Nine AI agents take a business idea and produce validation, a lean canvas, research, financials with built-in maths checks, a roadmap, marketing, documents and website code. You chat with the CEO agent.",
    },
    {
      question: "Which systems can run it?",
      answer:
        "Windows and Linux. Version 1.1.0 has a setup .exe and an .msi for Windows, and an AppImage and a .deb for Linux.",
    },
    {
      question: "Where does my work go?",
      answer:
        "It stays on your machine. Workspaces are stored in SQLite. API keys are stored in the OS keychain. There is no account and no telemetry.",
    },
    {
      question: "Does the Builder save files on its own?",
      answer: "No. It writes real website code, and those files are saved to disk only after you approve them.",
    },
    {
      question: "What can I export?",
      answer: "Markdown, DOCX and ZIP.",
    },
    {
      question: "Windows says the app is unsigned. What do I click?",
      answer: "SmartScreen shows that the app is unsigned. Click More info, then Run anyway.",
    },
    {
      question: "How do I start the AppImage?",
      answer: `In the folder where you saved it, run chmod +x ${installerFiles.appImage} and then ./${installerFiles.appImage}.`,
    },
    {
      question: "How do I install the .deb?",
      answer: `In the folder where you saved it, run sudo apt install ./${installerFiles.deb}.`,
    },
    {
      question: "How do I use Cordoval Inkwell-1?",
      answer:
        "Install Ollama, then choose Inkwell-1 in the app. It needs about 8 GB of free RAM. A GPU is much faster. The model is published on Hugging Face.",
    },
    {
      question: "How do I use OpenRouter?",
      answer: "Add your own key. Free models are used by default. The key stays in the OS keychain.",
    },
    {
      question: "What licence is it under?",
      answer:
        "MIT with an attribution requirement. Credit Cordoval (Kieren Day). The app is provided as is and may contain bugs. The terms of use are in the repository.",
    },
    {
      question: "How do I contact you?",
      answer: `Email ${contactEmail}. That is the only public contact.`,
    },
  ],
} as const;

export const licence = {
  id: "licence",
  eyebrow: "Licence",
  title: "MIT, with credit.",
  body: "Cordoval Co-Founder is free and open source under the MIT licence, with an attribution requirement. Credit Cordoval (Kieren Day).",
  attribution:
    "If you ship a product, a fork or a derivative, keep the copyright notice and show that credit, with a link to the repository, in your documentation and in an About or credits screen.",
  asIs: "The app is provided as is and may contain bugs.",
  licenceLabel: "Read the licence",
  termsLabel: "Read the terms of use",
  sourceLabel: "Source on GitHub",
  contactLabel: "Contact",
} as const;

/** Links to the other Cordoval sites. Legal pages live on the brand host. */
export const sites = {
  brand: "https://cordoval.co.uk/",
  products: "https://cordoval.co.uk/#products",
  whatWeDo: "https://cordoval.co.uk/#what-we-do",
  howWeWork: "https://cordoval.co.uk/#how-we-work",
  workWithUs: "https://cordoval.co.uk/#work-with-us",
  code: "https://code.cordoval.co.uk/",
  media: "https://media.cordoval.co.uk",
  labs: "https://labs.cordoval.co.uk",
  privacy: "https://www.cordoval.co.uk/privacy",
  terms: "https://www.cordoval.co.uk/terms",
} as const;

export const footer = {
  line: "Cordoval, an independent AI brand by Kieren Day.",
  contactLabel: "Contact",
  email: contactEmail,
  mediaLabel: "Cordoval Media",
  labsLabel: "Cordoval Labs",
  cofounderLabel: "Cordoval Co-Founder",
  codeLabel: "Cordoval Code",
  privacyLabel: "Privacy",
  termsLabel: "Terms",
} as const;
