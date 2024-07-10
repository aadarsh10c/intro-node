import fs from "node:fs/promises";

try {
  const filePath = new URL("./package.json", import.meta.url);
  console.log("fliePath", filePath);
  const data = await fs.readFile(filePath, "utf8");
  console.log(data);
} catch (err) {
  console.log(err.message);
}
