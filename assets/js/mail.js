// MAIL VALIDATION
//Variables declaration
let userMail;
const mailArray = [
  "giuseppino@gmail.com",
  "pippo@libero.it",
  "pluto@gmail.com",
  "topolino@gmail.com",
];
console.log(mailArray);

// On Click Check
document.getElementById("mail-check").addEventListener("click", function () {
  userMail = document.getElementById("user-mail").value;
  console.log(userMail);
  let mailFound = false;
  //Loop to scroll through mails
  for (let i = 0; i < mailArray.length; i++) {
    const mailIndex = mailArray[i];
    if (userMail == mailIndex) {
      mailFound = true;
    }
  }
  if (mailFound == true) {
    document.querySelector(".mail-result").innerHTML = "Puoi accedere";
  } else {
    document.querySelector(".mail-result").innerHTML = "Riprova";
  }
});
