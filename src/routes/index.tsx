import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinica.jpg";
import equipeImg from "@/assets/equipe.jpg";
import { beneficios, clinica, depoimentos, linkWhatsApp, servicos } from "@/lib/clinica";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sorriso Vivo Odontologia | Clínica em Rio Verde-GO" },
      {
        name: "description",
        content:
          "Clínica odontológica com atendimento sem dor, tecnologia digital e horário flexível. Agende sua avaliação em Rio Verde-GO.",
      },
      { property: "og:title", content: "Sorriso Vivo Odontologia" },
      {
        property: "og:description",
        content:
          "Atendimento humanizado, tecnologia digital e preço transparente para o seu sorriso.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
              Rio Verde • GO
            </span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Um sorriso saudável muda o jeito como você fala com o mundo
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              {clinica.slogan} Na Sorriso Vivo você encontra especialistas, tecnologia
              digital e um atendimento pensado para quem tem medo de dentista.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={linkWhatsApp("Olá! Quero agendar minha avaliação gratuita.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-card transition-transform hover:scale-[1.03]"
              >
                Agendar pelo WhatsApp
              </a>
              <Link
                to="/servicos"
                className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-primary-soft"
              >
                Ver tratamentos
              </Link>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "+12 anos", v: "de atuação" },
                { k: "+8.000", v: "sorrisos atendidos" },
                { k: "4,9★", v: "avaliação dos pacientes" },
              ].map((i) => (
                <div key={i.k} className="rounded-2xl bg-card p-3 shadow-card">
                  <dt className="font-display text-lg font-semibold">{i.k}</dt>
                  <dd className="text-xs text-muted-foreground">{i.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Recepção moderna da clínica odontológica Sorriso Vivo"
              width={1600}
              height={1100}
              className="w-full rounded-3xl object-cover shadow-float"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">
            Por que se consultar na Sorriso Vivo?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reunimos os cuidados que fazem diferença real na sua experiência — do
            primeiro contato até a manutenção do tratamento.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <li
              key={b.titulo}
              className="rounded-3xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-xl" aria-hidden="true">
                {b.icone}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold">Tratamentos em destaque</h2>
            <Link to="/servicos" className="text-sm font-semibold text-secondary-foreground underline underline-offset-4">
              Ver todos os serviços
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.slice(0, 3).map((s) => (
              <li key={s.titulo} className="rounded-3xl bg-card p-6 shadow-card">
                <span className="text-2xl" aria-hidden="true">{s.icone}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.descricao}</p>
                <p className="mt-4 text-sm font-semibold text-secondary-foreground">{s.preco}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <img
          src={equipeImg}
          alt="Dentista sorrindo ao lado de paciente na cadeira odontológica"
          width={1200}
          height={900}
          loading="lazy"
          className="w-full rounded-3xl object-cover shadow-card"
        />
        <div>
          <h2 className="text-3xl font-semibold">Cuidado humano em cada etapa</h2>
          <p className="mt-3 text-muted-foreground">
            Nossa equipe explica cada procedimento antes de começar, apresenta o
            orçamento fechado e acompanha você por WhatsApp durante o pós-atendimento.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Avaliação inicial gratuita com plano de tratamento digital",
              "Parcelamento em até 12x sem juros no cartão",
              "Retorno de acompanhamento incluso nos tratamentos",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true">✅</span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/quem-somos"
            className="mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Conheça a clínica
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="text-3xl font-semibold">O que dizem nossos pacientes</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d) => (
            <li key={d.nome} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <p className="text-sm text-muted-foreground">“{d.texto}”</p>
              <p className="mt-4 text-sm font-semibold">{d.nome}</p>
              <p className="text-xs text-accent-foreground">★★★★★</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-hero px-6 py-12 text-center text-primary-foreground shadow-float">
          <h2 className="text-3xl font-semibold">Pronto para agendar sua avaliação?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90">
            Escolha o melhor horário e fale agora com a nossa recepção pelo WhatsApp.
          </p>
          <a
            href={linkWhatsApp("Olá! Vim pelo site e quero agendar uma avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-card px-7 py-3 text-sm font-semibold text-secondary-foreground"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
