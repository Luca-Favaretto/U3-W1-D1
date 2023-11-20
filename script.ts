const randomNum = () => Math.ceil(Math.random() * 100);

const diff = (a: number, b: number) => Math.abs(a - b);

const scommessa = (a: number, b: number, puntata: number) => {
  let main = document.querySelector("main") as HTMLBodyElement;

  if (a === b) {
    main.innerText = "non potete scommetere lo stesso numero";
  } else if (a === puntata) {
    main.innerText = "Il primo giocatore ha indovinato ";
  } else if (b === puntata) {
    main.innerText = "Il primo giocatore ha indovinato ";
  } else {
    diff(a, puntata) < diff(b, puntata)
      ? (main.innerText = "il primo giocatore si è avvicinato di più al numero")
      : (main.innerText =
          "il secondo giocatore si è avvicinato di più al numero");
  }
};

const form = document.getElementById("my-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let player1: number = (document.getElementById("player1") as HTMLInputElement)
    .value;
  console.log("il giocatore 1 ha puntato " + player1);
  let player2: number = (document.getElementById("player2") as HTMLInputElement)
    .value;
  console.log("il giocatore 2 ha puntato " + player2);

  let rndNum = randomNum();
  console.log("il numero casuale è: " + rndNum);

  scommessa(player1, player2, rndNum);
});
