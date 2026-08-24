import { createFileRoute } from "@tanstack/react-router";
import { linkWhatsApp, servicos } from "@/lib/clinica";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços Odontológicos | Sorriso Vivo" },
      {
        name: "description",
        content:
          "Ortodontia, implantes, clareamento, odontopediatria e urgência 24h com preços transparentes na clínica Sorriso Vivo.",
      },
      { property: "og:title", content: "Serviços | Sorriso Vivo Odontologia" },
      {
        property: "og:description",
        content: "Todos os tratamentos da clínica com valores e agendamento por WhatsApp.",
      },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Serviços
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Tratamentos para cada fase do sorriso</h1>
        <p className="mt-4 text-muted-foreground">
          Todos os procedimentos incluem avaliação inicial, plano de tratamento digital
          e orçamento fechado antes de começar.
        </p>
      </header>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((s) => (
          <li key={s.titulo} className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card">
            <span className="text-2xl" aria-hidden="true">{s.icone}</span>
            <h2 className="mt-3 text-lg font-semibold">{s.titulo}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.descricao}</p>
            <p className="mt-4 text-sm font-semibold text-secondary-foreground">{s.preco}</p>
            <a
              href={linkWhatsApp(`Olá! Quero saber mais sobre ${s.titulo}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Solicitar orçamento
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-14 rounded-3xl bg-sand p-8">
        <h2 className="text-2xl font-semibold">Convênios e formas de pagamento</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Atendemos particular e os principais convênios odontológicos (simulado):
          Unidental, OdontoPrev, Amil Dental e Bradesco Dental. Parcelamos em até 12x
          sem juros no cartão ou via PIX com desconto de 5%.
        </p>
      </section>
    </div>
  );
}
