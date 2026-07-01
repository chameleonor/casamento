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

export interface Acompanhante {
  nome: string;
}

export interface Convidado {
  id: string;
  nome: string;
  email?: string;
  acompanhantes: Acompanhante[];
}

export const convidados: Convidado[] = [
  {
    id: "ufBTw",
    nome: "Suely & Fernando Ör",
    acompanhantes: [],
  },
  {
    id: "7MX9f",
    nome: "Leticia & Silvan Mira",
    acompanhantes: [],
  },
  {
    id: "dLq4R",
    nome: "Roseli & Nathan",
    acompanhantes: [],
  },
  {
    id: "SqMGQ",
    nome: "Therezinha & Jerson Zampirolli",
    acompanhantes: [],
  },

  {
    id: "pOQqq",
    nome: "Danilo",
    acompanhantes: [{ nome: "Acompanhante" }],
  },
  {
    id: "rYuY8",
    nome: "Daniel & Lissa",
    acompanhantes: [],
  },
  {
    id: "FIPi0",
    nome: "Rodrigo Dau",
    acompanhantes: [],
  },
  {
    id: "vjrnT",
    nome: "Artur Pereira",
    acompanhantes: [],
  },

  {
    id: "Phe7h",
    nome: "Edson Katayama",
    acompanhantes: [],
  },
  {
    id: "Zq7IR",
    nome: "Mitsue & Rafael Katayama",
    acompanhantes: [{ nome: "Pedro" }],
  },
  {
    id: "jsVfR",
    nome: "Érica & Claudio Kawakami",
    acompanhantes: [{ nome: "Felipe" }],
  },
  {
    id: "S0Njf",
    nome: "Regina & Edson Kondo",
    acompanhantes: [],
  },
  {
    id: "WL352",
    nome: "Valeria & Luis Katayama",
    acompanhantes: [],
  },
  {
    id: "5oImP",
    nome: "Tania & Fernando Katayama",
    acompanhantes: [{ nome: "Iasmin" }, { nome: "Matheus" }],
  },
  {
    id: "h80ws",
    nome: "Gabrielle Katayama",
    acompanhantes: [{ nome: "Gabriel" }],
  },
  {
    id: "jDxrj",
    nome: "Leticia Katayama",
    acompanhantes: [{ nome: "Miguel" }],
  },
  {
    id: "7KOHa",
    nome: "Julia Iwamoto",
    acompanhantes: [],
  },
  {
    id: "WoPqr",
    nome: "Karina Iwamoto",
    acompanhantes: [{ nome: "Luisa" }],
  },
  {
    id: "EzBlu",
    nome: "Rosa Katayama",
    acompanhantes: [],
  },
  {
    id: "Fq7MD",
    nome: "Michelli & Arthur Tamari",
    acompanhantes: [{ nome: "Iris" }, { nome: "Henry" }],
  },
  {
    id: "JSLtC",
    nome: "Audrey & Augusto Isayama",
    acompanhantes: [{ nome: "Alice" }],
  },

  {
    id: "fAcyT",
    nome: "Marina & Helio Isayama",
    acompanhantes: [],
  },
  {
    id: "laB9j",
    nome: "Fernanda & Helio Isayama",
    acompanhantes: [],
  },
  {
    id: "rt5cu",
    nome: "Emiko & Fabio Katayama",
    acompanhantes: [{ nome: "Carolina" }],
  },
  {
    id: "hRZ1u",
    nome: "Priscila & Luan Bordino",
    acompanhantes: [{ nome: "Laura" }, { nome: "Manuela" }],
  },
  {
    id: "sA4y8",
    nome: "Neusa & Marcos Katayama",
    acompanhantes: [],
  },
  {
    id: "FMEyH",
    nome: "Elisa & Eduardo Katayama",
    acompanhantes: [],
  },
  {
    id: "EYCNe",
    nome: "Keyla & Felipe Borodiak",
    acompanhantes: [{ nome: "Naomi" }],
  },
  {
    id: "nUltd",
    nome: "Luiza & Nelson Fujita",
    acompanhantes: [],
  },
  {
    id: "t3MV2",
    nome: "Thiago Fujita",
    acompanhantes: [{ nome: "Acompanhante" }],
  },
  {
    id: "1Cu0o",
    nome: "Raquel & Bruno Andrade",
    acompanhantes: [{ nome: "Enzo" }],
  },
  {
    id: "S7sCN",
    nome: "Isabela Oliveira",
    acompanhantes: [{ nome: "Acompanhante" }],
  },
  {
    id: "R6ceb",
    nome: "Maria Alice & Rogerio Oliveira",
    acompanhantes: [],
  },
  {
    id: "AHPuB",
    nome: "Byanca & Caio Inácio",
    acompanhantes: [],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export function getConvidadoById(id: string): Convidado | undefined {
  return convidados.find((c) => c.id === id);
}
