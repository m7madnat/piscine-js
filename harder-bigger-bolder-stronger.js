export function generateLetters() {
  let body = document.querySelector("body");
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= 120; i++) {
    let a = document.createElement("div");
    let rndChar = alphabet[Math.floor(Math.random() * alphabet.length)];
    a.innerHTML = rndChar;
    a.style.fontSize = `${i + 10}px`;
    if (i <= 40) {
      a.style.fontWeight = 300;
    } else if (i <= 80) {
      a.style.fontWeight = 400;
    } else {
      a.style.fontWeight = 600;
    }
    body.append(a);
  }
}
