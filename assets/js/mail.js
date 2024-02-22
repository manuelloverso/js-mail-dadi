// MAIL VALIDATION
//Variables declaration
const userMail = "geppino@gmail.com";
const mailArray = [
  "giuseppino@gmail.com",
  "pippo@libero.it",
  "pluto@gmail.com",
  "topolino@gmail.com",
];
console.log(mailArray);

//Loop to scroll through mails
for (let i = 0; i < mailArray.length; i++) {
  const mailIndex = mailArray[i];
  if (userMail == mailIndex) {
    console.log("Puoi accedere");
  } else {
    console.log("La tua mail non è stata trovata, riprova");
  }
}
