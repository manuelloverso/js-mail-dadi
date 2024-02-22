// DICE GAME

// Variables declaration
let computerNumb;
let userNumb;

document.getElementById("dice-attempt").addEventListener("click", function () {
  //Generating random numbers
  computerNumb = Math.floor(Math.random() * 6 + 1);
  console.log(computerNumb + " computer");

  userNumb = Math.floor(Math.random() * 6 + 1);
  console.log(userNumb + " user");

  // Check the larger number
  if (userNumb > computerNumb) {
    console.log("Hai vinto!");
  } else if (userNumb < computerNumb) {
    console.log("Hai perso");
  } else {
    console.log("Nessun vincitore , riprova");
  }
});
