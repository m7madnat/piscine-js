import { readdir } from "node:fs/promises";

async function main() {
  let directoryPath = process.argv[2];

  try {
    let files = await readdir(directoryPath);
    files.sort((a, b) => {
      let lastA = a.split("_")[1].split(".")[0];
      let lastB = b.split("_")[1].split(".")[0];
      return lastA.localeCompare(lastB);
    });
    for (let i = 0; i < files.length; i++) {
      let first = files[i].split("_");
      let last = first[1].split(".")[0];
      console.log(`${i + 1}. ${last} ${first[0]}`);
    }
  } catch (err) {
    console.error(err);
  }
}

main();
