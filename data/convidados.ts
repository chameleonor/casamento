// ─────────────────────────────────────────────────────────────────────────────
// Lista de convidados
//
// Cada convidado tem um `id` único usado na URL: /confirmar/<id>
// Para gerar um novo ID rode no terminal:
//   node -e "console.log(crypto.randomUUID().replace(/-/g,'').slice(0,12))"
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
  // ── Família ──────────────────────────────────────────────────────────────
  {
    id: "AbC123",
    nome: "Isabela",
    email: "isabela@example.com",
    acompanhantes: [{ nome: "Rafael" }, { nome: "Y" }, { nome: "Z" }],
  },
  {
    id: "AbD114",
    nome: "Ricardo Mendes",
    acompanhantes: [
      { nome: "Patrícia Mendes" },
      { nome: "Laura Mendes" },
    ],
  },

  // ── Amigos ───────────────────────────────────────────────────────────────
  {
    id: "Aba132",
    nome: "Fernanda Costa",
    email: "fecosta@example.com",
    acompanhantes: [],
  },
  {
    id: "Abk177",
    nome: "Lucas Almeida",
    acompanhantes: [{ nome: "Juliana Almeida" }],
  }
];

// ─────────────────────────────────────────────────────────────────────────────

export function getConvidadoById(id: string): Convidado | undefined {
  return convidados.find((c) => c.id === id);
}
