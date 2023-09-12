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


send.addEventListener("click", function(){

  const inputValue = inputElement.value;

  console.log(inputValue);

  let squadraTrovata = false;

  for (let c = 0; c < acceptedemails.length;c++){

    const squadra = acceptedemails[c];

    if(inputValue === acceptedemails){
      squadraTrovata = true;
    }
  }
});

console.log(inputElement.value);