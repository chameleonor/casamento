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
    convidados: ["Tania", "Fernando"],
  },
  {
    id: "h80ws",
    nome: "Gabrielle & Gabriel",
    convidados: ["Gabrielle", "Gabriel"],
  },
  {
    id: "jDxrj",
    nome: "Leticia & Miguel",
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
  {
    id: "A2S3d",
    nome: "Iasmin & Matheus",
    convidados: ["Iasmin", "Matheus"],
  },
  {
    id: "Lo2Id",
    nome: "Michele & Marcelo",
    convidados: ["Michele", "Marcelo", "Pietra", "Pedro"],
  },
  {
    id: "Poq02",
    nome: "G",
    convidados: ["G", "V"],
  },
  {
    id: "6777e",
    nome: "Emerson",
    convidados: ["Emerson", "Acompanhante", "Acompanhante"],
  },
  {
    id: "ea1ee",
    nome: "Silvia",
    convidados: ["Silvia"],
  },
  {
    id: "b09cc",
    nome: "Guilherme",
    convidados: ["Guilherme"],
  },
  {
    id: "699af",
    nome: "Caio",
    convidados: ["Caio"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export function getConvidadoById(id: string): Convidado | undefined {
  return convidados.find((c) => c.id === id);
}


// Suely & Fernando Ör - https://casamento-virid-five.vercel.app/landing/ufBTw
// Leticia & Silvan Mira - https://casamento-virid-five.vercel.app/landing/7MX9f
// Roseli & Nathan - https://casamento-virid-five.vercel.app/landing/dLq4R
// Therezinha & Jerson Zampirolli - https://casamento-virid-five.vercel.app/landing/SqMGQ
// Daniel & Lissa - https://casamento-virid-five.vercel.app/landing/rYuY8
// Rodrigo Dau - https://casamento-virid-five.vercel.app/landing/FIPi0
// Edson Katayama - https://casamento-virid-five.vercel.app/landing/Phe7h
// Mitsue & Rafael Katayama - https://casamento-virid-five.vercel.app/landing/Zq7IR
// Érica & Claudio Kawakami - https://casamento-virid-five.vercel.app/landing/jsVfR
// Felipe - https://casamento-virid-five.vercel.app/landing/pR0v9
// Regina & Edson Kondo - https://casamento-virid-five.vercel.app/landing/S0Njf
// Valeria & Luis Katayama - https://casamento-virid-five.vercel.app/landing/WL352
// Julia Iwamoto - https://casamento-virid-five.vercel.app/landing/7KOHa
// Karina Iwamoto - https://casamento-virid-five.vercel.app/landing/WoPqr
// Rosa Katayama - https://casamento-virid-five.vercel.app/landing/EzBlu
// Michelli & Arthur Tamari - https://casamento-virid-five.vercel.app/landing/Fq7MD
// Audrey & Augusto Isayama - https://casamento-virid-five.vercel.app/landing/JSLtC
// Luiza & Nelson Fujita - https://casamento-virid-five.vercel.app/landing/nUltd
// Thiago Fujita - https://casamento-virid-five.vercel.app/landing/t3MV2
// Isabela Oliveira - https://casamento-virid-five.vercel.app/landing/S7sCN
// Maria Alice & Rogerio Oliveira - https://casamento-virid-five.vercel.app/landing/R6ceb
// Byanca & Caio Inácio - https://casamento-virid-five.vercel.app/landing/AHPuB


// Tania & Fernando Katayama - https://casamento-virid-five.vercel.app/landing/5oImP
// Gabrielle Katayama - https://casamento-virid-five.vercel.app/landing/h80ws
// Leticia Katayama - https://casamento-virid-five.vercel.app/landing/jDxrj
// Marina & Helio Isayama - https://casamento-virid-five.vercel.app/landing/fAcyT
// Fernanda & Helio Isayama - https://casamento-virid-five.vercel.app/landing/laB9j
// Emiko & Fabio Katayama - https://casamento-virid-five.vercel.app/landing/rt5cu
// Priscila & Luan Bordino - https://casamento-virid-five.vercel.app/landing/hRZ1u
// Neusa & Marcos Katayama - https://casamento-virid-five.vercel.app/landing/sA4y8
// Elisa & Eduardo Katayama - https://casamento-virid-five.vercel.app/landing/FMEyH
// Keyla & Felipe Borodiak - https://casamento-virid-five.vercel.app/landing/EYCNe



// Raquel & Bruno Andrade - https://casamento-virid-five.vercel.app/landing/1Cu0o
// Danilo - https://casamento-virid-five.vercel.app/landing/pOQqq
// Artur Pereira - https://casamento-virid-five.vercel.app/landing/vjrnT