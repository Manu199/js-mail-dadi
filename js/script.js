/*
- Chiedere all'utente la sua email
- Controllare che la email sia presente nella lista di chi può accedere
- Stamapre un messaggio appropriato sull'esito del controllo
- -----
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
- Stabilire il vincitore, in base a chi fa il punteggio più alto
*/ 


const acceptedemails = ('papa@gmail.com', 'booleans@gmail.com', 'javascript@gmail.com', 'html@gmail.com', 'css@gmail.com', 'python@gmail.com');
const inputElement = document.getElementById('email');
const buttonElement = document.createElement("send");


// send.addEventListener("click", function(){

//   const inputValue = inputElement.value;

//   console.log(inputValue);
// });

const inputValue = inputElement.value;


for (let i = 0; i < acceptedemails; i++){

  const inputValue = inputElement.value;

  let emailTrovata = false;

  for (let a = 0; a < acceptedemails.length;c++){

    const squadra = acceptedemails[a];

    if(squadra === inputValue){

      emailTrovata = true;

    }

  }
  
  if (!emailTrovata){

    acceptedemails.push(inputValue);

  }

}
console.log(inputValue);


