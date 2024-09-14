import { styles } from "./pimp-my-style.data.js";
let i = 0;
function pimp() {
  const button = document.querySelector("button.button");
  if (!button.classList.contains("unpimp")) {
    button.classList.add(styles[i]);
    i++;
  } else {
    i--;
    button.classList.remove(styles[i]);
    if (i === 0) {
      button.classList.toggle("unpimp");
    }
  }
  if (i === styles.length) {
    button.classList.toggle("unpimp");
  }
}

export { pimp };
