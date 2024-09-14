import { readdir } from "node:fs/promises";

let directoryPath = process.argv[2] || "./";

try {
  let files = await readdir(directoryPath);
  console.log(files.length);
} catch (err) {
  console.error(err);
}
