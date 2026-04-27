"use client";

import Link from "next/link";
import Image from "next/image";

type Locale = "en" | "es";

const copy = {
  en: {
    toggleThemeAria: "Switch between dark and light mode",
    logoAlt: "Official SenFlow mascot",
    tagline: "Launch WhatsApp campaigns with no API",
    heroDescription:
      "SenFlow lets you send bulk WhatsApp messaging campaigns and manage conversations from a single platform.",
    githubCta: "View repository on GitHub",
    quickStartTitle: "Quick Start",
    quickStartCta: "Go to Quick Start",
    terminalStep: "Terminal - Step 1",
    installComment: "# Install the launcher",
    whatItDoesTitle: "What does it do?",
    resourcesTitle: "Resources",
    madeBy: "Built with 🤍 in 🇨🇴 by",
    footerWhatItDoes: "What it does",
  },
  es: {
    toggleThemeAria: "Cambiar entre modo oscuro y claro",
    logoAlt: "Mascota oficial de SenFlow",
    tagline: "Lanza campanas de WhatsApp sin API",
    heroDescription:
      "SenFlow te permite enviar campanas de mensajes masivas por WhatsApp y administrar conversaciones desde una misma plataforma.",
    githubCta: "Ver repositorio en GitHub",
    quickStartTitle: "Inicio rapido",
    quickStartCta: "Ir a Inicio rapido",
    terminalStep: "Terminal - Paso 1",
    installComment: "# Instala el launcher",
    whatItDoesTitle: "Que hace?",
    resourcesTitle: "Recursos",
    madeBy: "Hecho con 🤍 en 🇨🇴 por",
    footerWhatItDoes: "Que hace?",
  },
} as const;

const features = {
  en: [
    {
      icon: "megaphone",
      title: "Bulk WhatsApp campaigns",
      description:
        "Create and launch high-scale messaging campaigns with a workflow focused on speed and control.",
    },
    {
      icon: "chat",
      title: "Conversation management",
      description:
        "Centralize inbound and outbound chats in one place for your sales and support teams.",
    },
    {
      icon: "workflow",
      title: "Unified workflow",
      description:
        "Design, launch, and monitor campaigns without jumping between external tools.",
    },
    {
      icon: "rocket",
      title: "Simple team deployment",
      description:
        "Fast setup and local runtime so your team can start in minutes in dev or production.",
    },
  ],
  es: [
    {
      icon: "megaphone",
      title: "Campanas masivas por WhatsApp",
      description:
        "Crea y lanza campanas de mensajes a gran escala con una experiencia enfocada en velocidad y control.",
    },
    {
      icon: "chat",
      title: "Gestion de conversaciones",
      description:
        "Centraliza chats entrantes y salientes en una sola plataforma para tu equipo comercial y de soporte.",
    },
    {
      icon: "workflow",
      title: "Flujo de trabajo unificado",
      description:
        "Disena, ejecuta y monitorea campanas sin saltar entre herramientas externas.",
    },
    {
      icon: "rocket",
      title: "Despliegue simple para equipos",
      description:
        "Instalacion rapida y ejecucion local para empezar en minutos en entornos de desarrollo o produccion.",
    },
  ],
} as const;

const widgets = {
  en: [
    {
      icon: "github",
      title: "GitHub",
      description: "Code and releases.",
      href: "https://github.com/SenFlow-App/senflow",
    },
    {
      icon: "docs",
      title: "Documentation",
      description: "Quick guide and commands.",
      href: "https://github.com/SenFlow-App/senflow",
    },
    {
      icon: "discord",
      title: "Discord",
      description: "Community and support.",
      href: "https://discord.com",
    },
    {
      icon: "skills",
      title: "Skills",
      description: "Extensions and automation.",
      href: "#skills",
    },
  ],
  es: [
    {
      icon: "github",
      title: "GitHub",
      description: "Codigo y releases.",
      href: "https://github.com/SenFlow-App/senflow",
    },
    {
      icon: "docs",
      title: "Documentation",
      description: "Guia rapida y comandos.",
      href: "https://github.com/SenFlow-App/senflow",
    },
    {
      icon: "discord",
      title: "Discord",
      description: "Comunidad y soporte.",
      href: "https://discord.com",
    },
    {
      icon: "skills",
      title: "Skills",
      description: "Extensiones y automatizacion.",
      href: "#skills",
    },
  ],
} as const;

function FeatureIcon({ type }: { type: string }) {
  if (type === "megaphone") {
    return (
      <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-current" fill="none" strokeWidth="2">
        <path d="M3 11v2" />
        <path d="M6 10v4" />
        <path d="M9 9a11 11 0 0 0 10-4v14a11 11 0 0 0-10-4z" />
        <path d="M9 15v5" />
      </svg>
    );
  }
  if (type === "chat") {
    return (
      <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-current" fill="none" strokeWidth="2">
        <path d="M7 10h10" />
        <path d="M7 14h6" />
        <path d="M4 5h16v10H8l-4 4z" />
      </svg>
    );
  }
  if (type === "workflow") {
    return (
      <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-current" fill="none" strokeWidth="2">
        <rect x="3" y="4" width="6" height="6" rx="1" />
        <rect x="15" y="4" width="6" height="6" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M9 7h6" />
        <path d="M12 10v4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10 stroke-current" fill="none" strokeWidth="2">
      <path d="m12 3 2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5z" />
    </svg>
  );
}

function ResourceIcon({ type }: { type: string }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.2 1.83 1.2 1.05 1.78 2.76 1.27 3.43.97.1-.75.42-1.27.76-1.56-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.37 1.2-3.2-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.22 1.2a11.3 11.3 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.17.75.83 1.2 1.9 1.2 3.2 0 4.6-2.82 5.6-5.5 5.9.44.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }
  if (type === "docs") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M15 3v5h4" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    );
  }
  if (type === "discord") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M20.3 5.4A16.7 16.7 0 0 0 16.2 4a11.7 11.7 0 0 0-.5 1.1 15.5 15.5 0 0 0-7.4 0A12 12 0 0 0 7.7 4a16.6 16.6 0 0 0-4.1 1.4C1 9.2.3 12.9.6 16.5a16.8 16.8 0 0 0 5 2.5c.4-.6.8-1.3 1.1-2a10.8 10.8 0 0 1-1.8-.9l.4-.3a12 12 0 0 0 10.4 0l.4.3c-.6.4-1.2.7-1.9.9.3.7.7 1.4 1.1 2a16.7 16.7 0 0 0 5-2.5c.4-4.2-.6-7.9-2.9-11.1ZM8.8 14.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
      <path d="M12 3v6" />
      <path d="M12 15v6" />
      <path d="M3 12h6" />
      <path d="M15 12h6" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const localeFeatures = features[locale];
  const localeWidgets = widgets[locale];
  const isSpanish = locale === "es";
  const homeHref = isSpanish ? "/es" : "/";
  const quickStartHref = `${homeHref}#quick-start`;
  const whatItDoesHref = `${homeHref}#what-it-does`;
  const resourcesHref = `${homeHref}#resources`;

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("senflow-theme", nextTheme);
  };

  return (
    <div className="starry-bg min-h-screen" lang={locale}>
      <div className="floating-controls">
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={t.toggleThemeAria}
        >
          <svg
            viewBox="0 0 24 24"
            className="theme-icon theme-icon-sun h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.9 4.9 1.4 1.4" />
            <path d="m17.7 17.7 1.4 1.4" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m4.9 19.1 1.4-1.4" />
            <path d="m17.7 6.3 1.4-1.4" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="theme-icon theme-icon-moon h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
          </svg>
        </button>
        <nav className="language-toggle" aria-label="Language switcher">
          <span className="language-icon-wrap">
            <GlobeIcon />
          </span>
          <Link href="/" className={isSpanish ? "language-pill" : "language-pill is-active"} aria-current={isSpanish ? undefined : "page"}>
            EN
          </Link>
          <Link href="/es" className={isSpanish ? "language-pill is-active" : "language-pill"} aria-current={isSpanish ? "page" : undefined}>
            ES
          </Link>
        </nav>
      </div>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 md:px-10 lg:px-12">
        <section className="space-y-5 pt-4 text-center">
          <div className="space-y-1">
            <div className="mx-auto w-fit">
              <Image
                src="/logo.png"
                alt={t.logoAlt}
                width={144}
                height={144}
                className="h-32 w-32 object-contain"
                priority
              />
            </div>
            <h1 className="senflow-title-gradient text-6xl font-extrabold tracking-tight md:text-8xl">
              SenFlow
            </h1>
          </div>
          <p className="senflow-tagline mx-auto max-w-3xl">{t.tagline}</p>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:text-lg">{t.heroDescription}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              href="https://github.com/SenFlow-App/senflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.2 1.83 1.2 1.05 1.78 2.76 1.27 3.43.97.1-.75.42-1.27.76-1.56-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.37 1.2-3.2-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.22 1.2a11.3 11.3 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.17.75.83 1.2 1.9 1.2 3.2 0 4.6-2.82 5.6-5.5 5.9.44.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              {t.githubCta}
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/20"
              href={quickStartHref}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 9 3 3-3 3" />
                <path d="M13 15h4" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
              </svg>
              {t.quickStartCta}
            </a>
          </div>
        </section>

        <section id="quick-start" className="space-y-5">
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-white">{t.quickStartTitle}</h2>
            <article className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/85 shadow-xl shadow-blue-950/30">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/90" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                </div>
                <p className="text-xs font-medium tracking-wide text-slate-400">{t.terminalStep}</p>
                <span className="w-[52px]" />
              </div>
              <div className="space-y-2 px-4 py-4 font-mono text-sm text-slate-100">
                <p className="text-slate-400">{t.installComment}</p>
                <p className="flex items-start gap-2">
                  <span className="select-none text-blue-300">$</span>
                  <code className="overflow-x-auto">
                    curl -fsSL
                    https://raw.githubusercontent.com/fabianrod/senflow/main/install.sh
                    | bash
                  </code>
                </p>
              </div>
            </article>

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <span className="font-medium text-blue-300">2.</span>
              <code className="rounded-md border border-slate-700 bg-slate-900/90 px-3 py-1.5 font-mono text-slate-100">
                senflow install
              </code>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <span className="font-medium text-blue-300">3.</span>
              <code className="rounded-md border border-slate-700 bg-slate-900/90 px-3 py-1.5 font-mono text-slate-100">
                senflow run
              </code>
            </div>
          </div>
        </section>

        <section id="what-it-does" className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">{t.whatItDoesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {localeFeatures.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-950/75 p-6 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-400/80 hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)]"
              >
                <div className="mb-3 flex justify-center text-blue-300 transition-colors group-hover:text-blue-200">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-lg font-semibold text-blue-200">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">{t.resourcesTitle}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {localeWidgets.map((widget) => (
              <a
                key={widget.title}
                id={`resource-${widget.icon}`}
                href={widget.href}
                target={widget.href.startsWith("http") ? "_blank" : undefined}
                rel={widget.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-center transition hover:border-blue-400/60 hover:bg-slate-900/90"
              >
                <div className="mb-3 flex justify-center text-blue-300 group-hover:text-blue-200">
                  <ResourceIcon type={widget.icon} />
                </div>
                <h3 className="text-lg font-semibold text-blue-200">{widget.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{widget.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p className="text-center">
            {t.madeBy}{" "}
            <Link
              href="https://www.linkedin.com/in/nfabianr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 transition hover:text-blue-200"
            >
              Fabian Rodriguez
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <a href={`${homeHref}#resource-github`} className="transition hover:text-blue-300">
              GitHub
            </a>
            <a href={quickStartHref} className="transition hover:text-blue-300">
              {t.quickStartTitle}
            </a>
            <a href={whatItDoesHref} className="transition hover:text-blue-300">
              {t.footerWhatItDoes}
            </a>
            <a href={resourcesHref} className="transition hover:text-blue-300">
              {t.resourcesTitle}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
