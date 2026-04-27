import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "megaphone",
    title: "Campañas masivas por WhatsApp",
    description:
      "Crea y lanza campañas de mensajes a gran escala con una experiencia enfocada en velocidad y control.",
  },
  {
    icon: "chat",
    title: "Gestión de conversaciones",
    description:
      "Centraliza chats entrantes y salientes en una sola plataforma para tu equipo comercial y de soporte.",
  },
  {
    icon: "workflow",
    title: "Flujo de trabajo unificado",
    description:
      "Diseña, ejecuta y monitorea campañas sin saltar entre herramientas externas.",
  },
  {
    icon: "rocket",
    title: "Despliegue simple para equipos",
    description:
      "Instalación rápida y ejecución local para empezar en minutos en entornos de desarrollo o producción.",
  },
];

const widgets = [
  {
    icon: "github",
    title: "GitHub",
    description: "Código y releases.",
    href: "https://github.com/SenFlow-App/senflow",
  },
  {
    icon: "docs",
    title: "Documentation",
    description: "Guía rápida y comandos.",
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
    description: "Extensiones y automatización.",
    href: "#skills",
  },
];

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

export default function Home() {
  return (
    <div className="starry-bg min-h-screen">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12 md:px-10 lg:px-12">
        <section className="space-y-5 pt-4 text-center">
          <div className="space-y-1">
            <div className="mx-auto w-fit">
              <Image
                src="/logo.png"
                alt="Mascota oficial de SenFlow"
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
          <p className="senflow-tagline mx-auto max-w-3xl">
            Lanza campañas de WhatsApp sin API
          </p>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:text-lg">
            SenFlow te permite enviar campañas de mensajes masivas por WhatsApp y
            administrar conversaciones desde una misma plataforma.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              href="https://github.com/SenFlow-App/senflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.2 1.83 1.2 1.05 1.78 2.76 1.27 3.43.97.1-.75.42-1.27.76-1.56-2.67-.3-5.48-1.32-5.48-5.9 0-1.3.47-2.37 1.2-3.2-.12-.3-.52-1.52.12-3.17 0 0 .98-.31 3.22 1.2a11.3 11.3 0 0 1 5.86 0c2.24-1.5 3.22-1.2 3.22-1.2.64 1.65.24 2.87.12 3.17.75.83 1.2 1.9 1.2 3.2 0 4.6-2.82 5.6-5.5 5.9.44.37.82 1.1.82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              Ver repositorio en GitHub
            </Link>
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/20"
              href="#quick-start"
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
              Ir a Quick Start
            </a>
          </div>
        </section>

        <section id="quick-start" className="space-y-5">
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-white">Quick Start</h2>
            <article className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/85 shadow-xl shadow-blue-950/30">
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/90" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                </div>
                <p className="text-xs font-medium tracking-wide text-slate-400">
                  Terminal - Paso 1
                </p>
                <span className="w-[52px]" />
              </div>
              <div className="space-y-2 px-4 py-4 font-mono text-sm text-slate-100">
                <p className="text-slate-400"># Instala el launcher</p>
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
          <h2 className="text-3xl font-semibold text-white">¿Qué hace?</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-950/75 p-6 text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-400/80 hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)]"
              >
                <div className="mb-3 flex justify-center text-blue-300 transition-colors group-hover:text-blue-200">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-lg font-semibold text-blue-200">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="recursos" className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Recursos</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {widgets.map((widget) => (
              <a
                key={widget.title}
                id={`recurso-${widget.icon}`}
                href={widget.href}
                target={widget.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  widget.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-6 text-center transition hover:border-blue-400/60 hover:bg-slate-900/90"
              >
                <div className="mb-3 flex justify-center text-blue-300 group-hover:text-blue-200">
                  <ResourceIcon type={widget.icon} />
                </div>
                <h3 className="text-lg font-semibold text-blue-200">
                  {widget.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{widget.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p className="text-center">
            Hecho con 🤍 en 🇨🇴 por{" "}
            <Link
              href="https://www.linkedin.com/in/nfabianr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 transition hover:text-blue-200"
            >
              Fabián Rodríguez
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <a href="#recurso-github" className="transition hover:text-blue-300">
              GitHub
            </a>
            <a
              href="#quick-start"
              className="transition hover:text-blue-300"
            >
              Quick Start
            </a>
            <a
              href="#what-it-does"
              className="transition hover:text-blue-300"
            >
              ¿Qué hace?
            </a>
            <a
              href="#recursos"
              className="transition hover:text-blue-300"
            >
              Recursos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
