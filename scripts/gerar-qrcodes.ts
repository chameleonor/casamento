/**
 * Gera um QR code PNG para cada convidado e salva em /qrcodes
 *
 * Uso:
 *   npx tsx scripts/gerar-qrcodes.ts
 *   npx tsx scripts/gerar-qrcodes.ts --base https://seusite.com
 */

import QRCode from "qrcode";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { convidados } from "../data/convidados";

// ── Configuração ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const baseFlag = args.indexOf("--base");
const BASE_URL =
  baseFlag !== -1 && args[baseFlag + 1]
    ? args[baseFlag + 1]
    : "http://192.168.15.40:3000";

const OUT_DIR = join(process.cwd(), "qrcodes");

// ── Gerar ─────────────────────────────────────────────────────────────────────

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  console.log(`\nGerando QR codes para ${convidados.length} convidados...`);
  console.log(`Base URL: ${BASE_URL}\n`);

  const linhas: string[] = ["Nome,Link,Arquivo"];

  for (const convidado of convidados) {
    const url = `${BASE_URL}/confirmar/${convidado.id}`;

    // Slug para o nome do arquivo: remove acentos e espaços
    const slug = convidado.nome
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\s+/g, "_")
      .toLowerCase();

    const filename = `${slug}.png`;
    const filepath = join(OUT_DIR, filename);

    const buffer = await QRCode.toBuffer(url, {
      type: "png",
      width: 400,
      margin: 2,
      color: {
        dark: "#241810",  // marrom escuro do site
        light: "#FAF7F0", // creme do site
      },
      errorCorrectionLevel: "M",
    });

    writeFileSync(filepath, buffer);

    linhas.push(`"${convidado.nome}","${url}","${filename}"`);
    console.log(`  ✓ ${convidado.nome.padEnd(30)} → qrcodes/${filename}`);
  }

  // Salva CSV com todos os links
  const csvPath = join(OUT_DIR, "_lista.csv");
  writeFileSync(csvPath, linhas.join("\n"), "utf-8");

  console.log(`\nCSV salvo em: qrcodes/_lista.csv`);
  console.log(`\nPronto! ${convidados.length} QR codes gerados em /qrcodes\n`);
}

main().catch((err) => {
  console.error("Erro:", err);
  process.exit(1);
});
