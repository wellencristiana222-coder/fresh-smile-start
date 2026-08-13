import { createFileRoute } from "@tanstack/react-router";
import equipeImg from "@/assets/equipe.jpg";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Sorriso Vivo Odontologia" },
      {
        name: "description",
        content:
          "Conheça a história, a missão e a equipe de especialistas da clínica odontológica Sorriso Vivo em Rio Verde-GO.",
      },
      { property: "og:title", content: "Quem Somos | Sorriso Vivo" },
      {
        property: "og:description",
        content: "História, valores e equipe da clínica Sorriso Vivo Odontologia.",
      },
    ],
  }),
  component: QuemSomos,
});

const valores = [
  { t: "Acolhimento", d: "Escuta ativa e respeito ao tempo de cada paciente." },
  { t: "Ética", d: "Indicamos apenas o que é necessário, com orçamento claro." },
  { t: "Excelência", d: "Educação continuada e materiais de alta qualidade." },
  { t: "Inovação", d: "Fluxo digital do diagnóstico à prótese finalizada." },
];

const equipe = [
  { nome: "Dra. Helena Barros", cargo: "Ortodontia e Estética", cro: "CRO-GO 11111" },
  { nome: "Dr. Tiago Moreira", cargo: "Implantodontia", cro: "CRO-GO 22222" },
  { nome: "Dra. Paula Nunes", cargo: "Odontopediatria", cro: "CRO-GO 33333" },
];

function QuemSomos() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Quem somos
        </p>
        <h1 className="mt-3 text-4xl font-semibold">
          Uma clínica criada para tirar o medo do consultório
        </h1>
        <p className="mt-4 text-muted-foreground">
          A Sorriso Vivo nasceu em 2014, em Rio Verde, com a proposta de unir
          odontologia de alta precisão a um atendimento verdadeiramente humano. Hoje
          somos uma equipe multidisciplinar que já cuidou de mais de 8.000 sorrisos.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <img
          src={equipeImg}
          alt="Equipe da clínica Sorriso Vivo atendendo uma paciente"
          width={1200}
          height={900}
          loading="lazy"
          className="w-full rounded-3xl object-cover shadow-card"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-3xl bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold">Missão</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Promover saúde bucal e autoestima com atendimento acolhedor e acessível.
            </p>
          </article>
          <article className="rounded-3xl bg-card p-6 shadow-card">
            <h2 className="text-lg font-semibold">Visão</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Ser a clínica odontológica referência do sudoeste goiano até 2030.
            </p>
          </article>
          <article className="rounded-3xl bg-primary-soft p-6 sm:col-span-2">
            <h2 className="text-lg font-semibold">Valores</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {valores.map((v) => (
                <li key={v.t} className="text-sm">
                  <strong>{v.t}:</strong>{" "}
                  <span className="text-muted-foreground">{v.d}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Nossa equipe</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-3">
          {equipe.map((p) => (
            <li key={p.nome} className="rounded-3xl border border-border bg-card p-6 text-center shadow-card">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero text-2xl text-primary-foreground" aria-hidden="true">
                🦷
              </span>
              <h3 className="mt-4 text-base font-semibold">{p.nome}</h3>
              <p className="text-sm text-muted-foreground">{p.cargo}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.cro}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
