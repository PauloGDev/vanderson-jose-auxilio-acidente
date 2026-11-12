import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const htmlPath = resolve(root, "dist/index.html");
const serverPath = pathToFileURL(resolve(root, ".prerender/entry-server.js")).href;
const [{ render }, html] = await Promise.all([import(serverPath), readFile(htmlPath, "utf8")]);
const content = render();
if (!content.includes("Sofreu um acidente de trabalho") || !content.includes("DÚVIDAS FREQUENTES")) {
  throw new Error("O HTML pré-renderizado não contém o conteúdo principal esperado.");
}
await writeFile(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${content}</div>`));
console.log("Conteúdo principal pré-renderizado em dist/index.html");
