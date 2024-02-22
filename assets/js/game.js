// DICE GAME

// Variables declaration
let computerNumb;
let userNumb;

document.getElementById("dice-attempt").addEventListener("click", function () {
  //Generating random numbers
  computerNumb = Math.floor(Math.random() * 6 + 1);
  document.getElementById("computer-dice").innerHTML = computerNumb;

  userNumb = Math.floor(Math.random() * 6 + 1);
  document.getElementById("user-dice").innerHTML = userNumb;

  // Check the larger number
  if (userNumb > computerNumb) {
    document.querySelector(".dice-result").innerHTML = "Hai Vinto!";
  } else if (userNumb < computerNumb) {
    document.querySelector(".dice-result").innerHTML = "Hai Perso!";
  } else {
    document.querySelector(".dice-result").innerHTML = "Nessun vincitore ";
  }
});
