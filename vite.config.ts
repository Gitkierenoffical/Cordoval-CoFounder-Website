import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import { cofounderSeo, faq } from "./src/content.ts";

function jsonLdScript(data: unknown): string {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function seoPlugin(): Plugin {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Cordoval Co-Founder",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, Linux",
        isAccessibleForFree: true,
        url: cofounderSeo.canonical,
        image: cofounderSeo.image,
        description: cofounderSeo.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
  const tag = `    ${jsonLdScript(data)}\n  `;
  return {
    name: "cofounder-jsonld",
    transformIndexHtml(html) {
      return html.replace("</head>", `${tag}</head>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
});
