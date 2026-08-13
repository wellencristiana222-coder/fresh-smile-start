export const clinica = {
  nome: "Sorriso Vivo Odontologia",
  slogan: "Cuidar do seu sorriso é cuidar da sua confiança.",
  telefone: "(64) 3611-2200",
  whatsappNumero: "5564999990000",
  whatsappExibicao: "(64) 99999-0000",
  email: "contato@sorrisovivo.com.br",
  endereco: "Av. das Acácias, 1200 — Centro, Rio Verde/GO — CEP 75901-970",
  horarios: [
    { dia: "Segunda a sexta", hora: "08h às 19h" },
    { dia: "Sábado", hora: "08h às 13h" },
    { dia: "Domingo e feriados", hora: "Plantão de urgência" },
  ],
} as const;

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${clinica.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}

export const servicos = [
  {
    titulo: "Clínica Geral e Prevenção",
    descricao:
      "Limpeza, restaurações e check-ups periódicos para manter a saúde bucal em dia.",
    icone: "🦷",
    preco: "a partir de R$ 120",
  },
  {
    titulo: "Ortodontia",
    descricao:
      "Aparelhos fixos, autoligados e alinhadores transparentes com acompanhamento mensal.",
    icone: "🪥",
    preco: "a partir de R$ 180/mês",
  },
  {
    titulo: "Implantodontia",
    descricao:
      "Implantes com planejamento digital 3D e próteses que devolvem função e estética.",
    icone: "⚙️",
    preco: "sob avaliação",
  },
  {
    titulo: "Estética do Sorriso",
    descricao:
      "Clareamento a laser, lentes de contato dental e harmonização do sorriso.",
    icone: "✨",
    preco: "a partir de R$ 690",
  },
  {
    titulo: "Odontopediatria",
    descricao:
      "Atendimento lúdico e acolhedor para crianças criarem uma boa relação com o dentista.",
    icone: "🧸",
    preco: "a partir de R$ 140",
  },
  {
    titulo: "Urgência 24h",
    descricao:
      "Dor, trauma ou restauração quebrada? Temos plantão para encaixar você no mesmo dia.",
    icone: "🚑",
    preco: "avaliação gratuita",
  },
];

export const beneficios = [
  {
    titulo: "Atendimento sem dor",
    texto: "Protocolos de sedação consciente e anestesia computadorizada.",
    icone: "😌",
  },
  {
    titulo: "Tecnologia digital",
    texto: "Escaneamento intraoral e raio-x digital com menos radiação.",
    icone: "🖥️",
  },
  {
    titulo: "Horário flexível",
    texto: "Agenda estendida até 19h e atendimento aos sábados.",
    icone: "🕒",
  },
  {
    titulo: "Preço transparente",
    texto: "Orçamento fechado antes de iniciar, sem surpresas na cadeira.",
    icone: "💳",
  },
  {
    titulo: "Biossegurança total",
    texto: "Esterilização rastreada e materiais descartáveis por paciente.",
    icone: "🧼",
  },
  {
    titulo: "Time especialista",
    texto: "Profissionais com pós-graduação em cada área de tratamento.",
    icone: "🎓",
  },
];

export const depoimentos = [
  {
    nome: "Marina Alves",
    texto:
      "Tinha muito medo de dentista. Fui super acolhida e hoje faço meu clareamento tranquila.",
  },
  {
    nome: "Rodrigo Peixoto",
    texto:
      "Coloquei dois implantes. Planejamento explicado passo a passo e prazo cumprido.",
  },
  {
    nome: "Cláudia Menezes",
    texto:
      "Levo meus filhos desde pequenos. A equipe de odontopediatria é maravilhosa.",
  },
];
