import { Link } from "@tanstack/react-router";
import { clinica } from "@/lib/clinica";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-lg font-semibold">Sorriso Vivo</h3>
          <p className="mt-2 text-sm text-muted-foreground">{clinica.slogan}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Navegue</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Início</Link></li>
            <li><Link to="/quem-somos" className="hover:text-foreground">Quem Somos</Link></li>
            <li><Link to="/servicos" className="hover:text-foreground">Serviços</Link></li>
            <li><Link to="/galeria" className="hover:text-foreground">Galeria</Link></li>
            <li><Link to="/contato" className="hover:text-foreground">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{clinica.telefone}</li>
            <li>{clinica.whatsappExibicao}</li>
            <li>{clinica.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Horários</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {clinica.horarios.map((h) => (
              <li key={h.dia}>
                {h.dia}: {h.hora}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sorriso Vivo Odontologia — projeto acadêmico simulado. CRO-GO 00000.
      </div>
    </footer>
  );
}
