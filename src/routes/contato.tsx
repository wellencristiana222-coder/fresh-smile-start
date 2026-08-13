import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { clinica, linkWhatsApp } from "@/lib/clinica";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Localização | Sorriso Vivo Odontologia" },
      {
        name: "description",
        content:
          "Telefone, WhatsApp, e-mail, horários de atendimento e localização da clínica Sorriso Vivo em Rio Verde-GO.",
      },
      { property: "og:title", content: "Contato | Sorriso Vivo Odontologia" },
      {
        property: "og:description",
        content: "Fale com a clínica, veja horários e como chegar até nós.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Contato
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Vamos marcar o seu horário</h1>
        <p className="mt-4 text-muted-foreground">
          Responderemos em até 1 hora útil. Para urgências, prefira o WhatsApp.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-xl font-semibold">Envie uma mensagem</h2>
          {enviado ? (
            <p className="mt-6 rounded-2xl bg-primary-soft p-4 text-sm">
              Mensagem enviada com sucesso (simulado)! Nossa recepção entrará em contato.
            </p>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="text-sm font-medium">Nome</label>
                <input
                  id="nome"
                  required
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="text-sm font-medium">Telefone</label>
                <input
                  id="telefone"
                  required
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="assunto" className="text-sm font-medium">Assunto</label>
                <select
                  id="assunto"
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Agendar avaliação</option>
                  <option>Orçamento de tratamento</option>
                  <option>Urgência</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </section>

        <div className="space-y-5">
          <section className="rounded-3xl bg-card p-6 shadow-card">
            <h2 className="text-xl font-semibold">Informações</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><strong className="text-foreground">Telefone:</strong> {clinica.telefone}</li>
              <li><strong className="text-foreground">WhatsApp:</strong> {clinica.whatsappExibicao}</li>
              <li><strong className="text-foreground">E-mail:</strong> {clinica.email}</li>
              <li><strong className="text-foreground">Endereço:</strong> {clinica.endereco}</li>
            </ul>
            <a
              href={linkWhatsApp("Olá! Quero falar com a recepção da Sorriso Vivo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground"
            >
              Chamar no WhatsApp
            </a>
          </section>

          <section className="rounded-3xl bg-card p-6 shadow-card">
            <h2 className="text-xl font-semibold">Horário de atendimento</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {clinica.horarios.map((h) => (
                <li key={h.dia} className="flex justify-between gap-4">
                  <span>{h.dia}</span>
                  <span className="font-medium text-foreground">{h.hora}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold">Localização</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Estacionamento gratuito no local e acesso para cadeirantes. (Mapa simulado.)
        </p>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
          <div className="relative h-72 bg-gradient-soft sm:h-96">
            <div className="absolute inset-0 opacity-60" aria-hidden="true">
              <svg viewBox="0 0 800 400" className="h-full w-full">
                <rect width="800" height="400" fill="none" />
                <g stroke="currentColor" className="text-primary/40" strokeWidth="10">
                  <line x1="0" y1="120" x2="800" y2="120" />
                  <line x1="0" y1="280" x2="800" y2="280" />
                  <line x1="200" y1="0" x2="200" y2="400" />
                  <line x1="520" y1="0" x2="520" y2="400" />
                </g>
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card px-5 py-4 text-center shadow-float">
              <p className="text-2xl" aria-hidden="true">📍</p>
              <p className="mt-1 text-sm font-semibold">Sorriso Vivo Odontologia</p>
              <p className="text-xs text-muted-foreground">{clinica.endereco}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
