/**
 * Gera um QR code PNG para o link principal do site e salva em /qrcodes
 *
 * Uso:
 *   npx tsx scripts/gerar-qrcode-site.ts
 */

import QRCode from "qrcode";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const URL = "https://casamento-virid-five.vercel.app/";
const OUT_DIR = join(process.cwd(), "qrcodes");
const OUT_PATH = join(OUT_DIR, "site.png");

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const buffer = await QRCode.toBuffer(URL, {
    type: "png",
    width: 400,
    margin: 2,
    color: {
      dark: "#241810",  // marrom escuro do site
      light: "#FAF7F0", // creme do site
    },
    errorCorrectionLevel: "M",
  });

  writeFileSync(OUT_PATH, buffer);

  console.log(`QR code gerado: qrcodes/site.png`);
  console.log(`Link: ${URL}`);
}

main().catch((err) => {
  console.error("Erro:", err);
  process.exit(1);
});
