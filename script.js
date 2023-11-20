var randomNum = function () {
  return Math.ceil(Math.random() * 100);
};
var diff = function (a, b) {
  return Math.abs(a - b);
};
var scommessa = function (a, b, puntata) {
  var main = document.querySelector("main");
  if (a === b) {
    main.innerText = "Non potete scommetere lo stesso numero";
  } else if (a === puntata) {
    main.innerText = "Il primo giocatore ha indovinato ";
  } else if (b === puntata) {
    main.innerText = "Il primo giocatore ha indovinato ";
  } else {
    diff(a, puntata) < diff(b, puntata)
      ? (main.innerText = "Il primo giocatore si è avvicinato di più al numero")
      : (main.innerText =
          "Il secondo giocatore si è avvicinato di più al numero");
  }
};
var form = document.getElementById("my-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var player1 = document.getElementById("player1").value;
  console.log("Il giocatore 1 ha puntato " + player1);
  var player2 = document.getElementById("player2").value;
  console.log("Il giocatore 2 ha puntato " + player2);
  var rndNum = randomNum();
  console.log("Il numero casuale è: " + rndNum);
  scommessa(player1, player2, rndNum);
});
