import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { clinica, linkWhatsApp } from "@/lib/clinica";

const links = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setAberto(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-hero text-lg text-primary-foreground">
            🦷
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">
              Sorriso Vivo
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Odontologia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              activeProps={{ className: "bg-primary-soft text-secondary-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsApp("Olá! Quero agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Agendar consulta
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-label="Abrir menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border md:hidden"
          >
            <span aria-hidden="true">{aberto ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {aberto && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden" aria-label="Navegação mobile">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setAberto(false)}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"
                  activeProps={{ className: "bg-primary-soft text-secondary-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-xs text-muted-foreground">{clinica.telefone}</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
