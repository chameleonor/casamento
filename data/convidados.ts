// ─────────────────────────────────────────────────────────────────────────────
// Lista de convidados
//
// Cada convidado tem um `id` único usado na URL: /confirmar/<id>
// Para gerar um novo ID rode no terminal:
//   node -e "console.log(crypto.randomUUID().replace(/-/g,'').slice(0,5))"
//
// Compartilhe com cada convidado o link:
//   https://seusite.com/confirmar/<id>
// ─────────────────────────────────────────────────────────────────────────────

export interface Convidado {
  id: string;
  nome: string;
  email?: string;
  // Todas as pessoas deste convite que precisam confirmar presença.
  convidados: string[];
}

export const convidados: Convidado[] = [
  {
    id: "ufBTw",
    nome: "Suely & Fernando",
    convidados: ["Suely", "Fernando"],
  },
  {
    id: "7MX9f",
    nome: "Leticia & Silvan",
    convidados: ["Leticia", "Silvan"],
  },
  {
    id: "dLq4R",
    nome: "Roseli & Nathan",
    convidados: ["Roseli", "Nathan"],
  },
  {
    id: "SqMGQ",
    nome: "Therezinha & Jerson",
    convidados: ["Therezinha", "Jerson"],
  },
  {
    id: "pOQqq",
    nome: "Danilo",
    convidados: ["Danilo", "Acompanhante"],
  },
  {
    id: "rYuY8",
    nome: "Daniel & Lissa",
    convidados: ["Daniel", "Lissa"],
  },
  {
    id: "FIPi0",
    nome: "Rodrigo Dau",
    convidados: ["Rodrigo Dau"],
  },
  {
    id: "vjrnT",
    nome: "Artur Pereira",
    convidados: ["Artur"],
  },

  {
    id: "Phe7h",
    nome: "Edson Katayama",
    convidados: ["Edson"],
  },
  {
    id: "Zq7IR",
    nome: "Mitsue & Rafael",
    convidados: ["Mitsue", "Rafael", "Pedro"],
  },
  {
    id: "jsVfR",
    nome: "Érica & Claudio",
    convidados: ["Érica", "Claudio"],
  },
  {
    id: "S0Njf",
    nome: "Regina & Edson",
    convidados: ["Regina", "Edson"],
  },
  {
    id: "WL352",
    nome: "Valeria & Luis",
    convidados: ["Valeria", "Luis"],
  },
  {
    id: "5oImP",
    nome: "Tania & Fernando",
    convidados: ["Tania", "Fernando", "Iasmin", "Matheus"],
  },
  {
    id: "h80ws",
    nome: "Gabrielle Katayama",
    convidados: ["Gabrielle", "Gabriel"],
  },
  {
    id: "jDxrj",
    nome: "Leticia Katayama",
    convidados: ["Leticia", "Miguel"],
  },
  {
    id: "7KOHa",
    nome: "Julia Iwamoto",
    convidados: ["Julia Iwamoto"],
  },
  {
    id: "WoPqr",
    nome: "Karina Iwamoto",
    convidados: ["Karina", "Luisa"],
  },
  {
    id: "EzBlu",
    nome: "Rosa Katayama",
    convidados: ["Rosa"],
  },
  {
    id: "Fq7MD",
    nome: "Michelli & Arthur",
    convidados: ["Michelli", "Arthur", "Iris", "Henry"],
  },
  {
    id: "JSLtC",
    nome: "Audrey & Augusto",
    convidados: ["Audrey", "Augusto", "Alice"],
  },

  {
    id: "fAcyT",
    nome: "Marina & Helio",
    convidados: ["Marina", "Helio"],
  },
  {
    id: "laB9j",
    nome: "Fernanda & Helio",
    convidados: ["Fernanda", "Helio"],
  },
  {
    id: "rt5cu",
    nome: "Emiko & Fabio",
    convidados: ["Emiko", "Fabio", "Caroline"],
  },
  {
    id: "hRZ1u",
    nome: "Priscila & Luan",
    convidados: ["Priscila", "Luan", "Laura", "Manuela"],
  },
  {
    id: "sA4y8",
    nome: "Neusa & Marcos",
    convidados: ["Neusa", "Marcos"],
  },
  {
    id: "FMEyH",
    nome: "Elisa & Eduardo",
    convidados: ["Elisa", "Eduardo"],
  },
  {
    id: "EYCNe",
    nome: "Keyla & Felipe",
    convidados: ["Keyla", "Felipe", "Naomi"],
  },
  {
    id: "nUltd",
    nome: "Luiza & Nelson",
    convidados: ["Luiza", "Nelson"],
  },
  {
    id: "t3MV2",
    nome: "Thiago Fujita",
    convidados: ["Thiago", "Acompanhante"],
  },
  {
    id: "1Cu0o",
    nome: "Raquel & Bruno",
    convidados: ["Raquel", "Bruno", "Enzo"],
  },
  {
    id: "S7sCN",
    nome: "Isabela Oliveira",
    convidados: ["Isabela", "Acompanhante"],
  },
  {
    id: "R6ceb",
    nome: "Alice & Rogerio",
    convidados: ["Maria", "Rogerio"],
  },
  {
    id: "AHPuB",
    nome: "Byanca & Caio",
    convidados: ["Byanca", "Caio"],
  },
  {
    id: "pR0v9",
    nome: "Felipe Kawakami",
    convidados: ["Felipe"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export function getConvidadoById(id: string): Convidado | undefined {
  return convidados.find((c) => c.id === id);
}
