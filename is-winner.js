async function isWinner(country) {
  try {
    const dawla = await db.getWinner(country);
    if (dawla.continent != "Europe") {
      return `${country} is not what we are looking for because of the continent`;
    }
    let wins = await db.getResults(dawla.id);
    if (wins.length < 3) {
      return `${country} is not what we are looking for because of the number of times it was champion`;
    }

    let years = wins.map((result) => result.year).join(", ");
    let scores = wins.map((result) => result.score).join(", ");
    return `${country} won the FIFA World Cup in ${years} winning by ${scores}`;
  } catch (error) {
    return `${country} never was a winner`;
  }
}
// isWinner("Palestine");
// isWinner("Brazil");
// isWinner("France");
// isWinner("Germany");
