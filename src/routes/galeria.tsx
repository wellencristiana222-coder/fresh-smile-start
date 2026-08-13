import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinica.jpg";
import equipeImg from "@/assets/equipe.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Imagens | Sorriso Vivo Odontologia" },
      {
        name: "description",
        content:
          "Veja fotos da estrutura, dos consultórios e dos resultados de tratamentos da clínica Sorriso Vivo.",
      },
      { property: "og:title", content: "Galeria | Sorriso Vivo Odontologia" },
      {
        property: "og:description",
        content: "Estrutura, consultórios e resultados dos nossos pacientes.",
      },
    ],
  }),
  component: Galeria,
});

const fotos = [
  { src: heroImg, alt: "Recepção da clínica com balcão verde-água e plantas", legenda: "Recepção" },
  { src: g1, alt: "Consultório odontológico moderno com cadeira e equipamentos", legenda: "Consultório 1" },
  { src: equipeImg, alt: "Dentista atendendo paciente sorridente", legenda: "Atendimento" },
  { src: g2, alt: "Paciente sorrindo após clareamento dental", legenda: "Resultado de clareamento" },
];

function Galeria() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Galeria
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Nossa estrutura e resultados</h1>
        <p className="mt-4 text-muted-foreground">
          Um ambiente pensado para o seu conforto, com equipamentos digitais e
          protocolos rigorosos de biossegurança.
        </p>
      </header>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {fotos.map((f) => (
          <li key={f.legenda} className="group overflow-hidden rounded-3xl bg-card shadow-card">
            <img
              src={f.src}
              alt={f.alt}
              loading="lazy"
              width={1000}
              height={1000}
              className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <p className="px-4 py-3 text-sm font-medium">{f.legenda}</p>
          </li>
        ))}
        <li className="flex min-h-40 flex-col justify-center rounded-3xl bg-gradient-hero p-6 text-primary-foreground shadow-card">
          <p className="font-display text-xl font-semibold">Antes e depois</p>
          <p className="mt-2 text-sm opacity-90">
            Novas fotos de casos clínicos são publicadas todo mês no nosso Instagram
            @sorrisovivo (simulado).
          </p>
        </li>
      </ul>
    </div>
  );
}
