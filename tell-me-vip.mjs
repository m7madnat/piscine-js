import { readFile, writeFile, readdir } from "fs/promises";
import path from "path";

async function main() {
  let directoryPath = process.argv[2];
  try {
    let files = await readdir(directoryPath);
    let answerYes = [];
    let x = 1;
    let res = "";
    for (let i = 0; i < files.length; i++) {
      let speFile = path.join(directoryPath, files[i]);
      let arr = await readFile(speFile, "utf8");
      let json = JSON.parse(arr);
      if (json.answer === "yes") {
        let first = files[i].split("_");
        let last = first[1].split(".")[0];
        answerYes.push(`${last} ${first[0]}`);
      }
    }
    for (let so of answerYes.sort()) {
      res += `${x}. ${so}` + "\n";
      x++;
    }
    await writeFile("vip.txt", res.trim());
  } catch (error) {
    console.error(error);
  }
}
main();
