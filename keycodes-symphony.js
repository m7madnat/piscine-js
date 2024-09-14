function compose() {
  document.body.addEventListener("keydown", (key) => {
    let div = document.createElement("div");
    let lastDiv = document.querySelectorAll(".note");
    if (key.key == "Backspace") {
      if (lastDiv.length > 0) {
        lastDiv[lastDiv.length - 1].remove();
      }
    } else if (key.key == "Escape") {
      lastDiv.forEach((div) => div.remove());
    } else {
      div.classList.add("note");
      let hue = Math.floor(Math.random() * 360);
      div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
      div.textContent = key.key;
      console.log(key.key);
      document.body.appendChild(div);
    }
  });
}
export { compose };
// export function compose() {
//   document.addEventListener("keydown", (key) => {
//     let event = key.key;

//     let last = document.querySelectorAll("div");
//     if (event === "Backspace") {
//       if (last.length > 0) {
//         last[last.length - 1].remove();
//       }
//     } else if (event === "Escape") {
//       last.forEach((div) => div.remove());
//     } else {
//       let div = document.createElement("div");
//       div.classList.add("note");
//       let hue = Math.floor(Math.random() * 360);
//       div.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
//       div.innerHTML = event;
//       document.body.appendChild(div);
//     }
//   });
// }
