export function getArchitects() {
  let fA = document.querySelectorAll("a");
  let sA = document.querySelectorAll("span");

  return [fA, sA];
}

export function getClassical() {
  let fA = document.querySelectorAll("a.classical");
  let sA = document.querySelectorAll("a:not(.classical)");

  return [fA, sA];
}

export function getActive() {
  let fA = document.querySelectorAll("a.classical.active");
  let sA = document.querySelectorAll("a.classical:not(.active)");

  return [fA, sA];
}

export function getBonannoPisano() {
  let fA = document.getElementById("BonannoPisano");
  let sA = document.querySelectorAll("a.classical.active");
  return [fA, sA];
}
