export function build(n) {
  let body = document.querySelector("body");
  let i = 1;
  let a = setInterval(() => {
    let brick = document.createElement("div");
    brick.id = `brick-${i}`;
    brick.textContent = `${i}`;
    if (i % 3 === 2) {
      brick.dataset.foundation = true;
    }
    i++;
    body.appendChild(brick);
    if (i > n) {
      clearInterval(a);
    }
  }, 100);
}

export function repair(...ids) {
  for (let i = 0; i < ids.length; i++) {
    let idd = document.getElementById(ids[i]);
    let n = (ids[i] = `${i}`);
    if (n % 3 === 2) {
      idd.dataset.repaired = "in progress";
      idd.textContent = n;
    } else {
      idd.dataset.repaired = "true";
      idd.textContent = n;
    }
  }
}
export function destroy() {
  let dmr = document.getElementsByTagName("div");
  dmr[dmr.length - 1].remove();
}
