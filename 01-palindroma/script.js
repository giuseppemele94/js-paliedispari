/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma * */

//output a schermo 
const mex = document.getElementById("text-console");

//input utente
const user = prompt("Inserisci una parola :");

// normalizzo la parola in minuscolo per il controllo
const normalized = user.toLowerCase();

//invoco la funzione 
const result = reversed(normalized);


if (result === normalized) {
    mex.textContent = `La parola ${user} è palindroma `;
    console.log("palindroma");
}
else {
    mex.textContent = `La parola ${user} non è palindroma `;
    console.log("non palindroma");
}


// Funzione palindroma 
function reversed(word) {

    let result = "";

    //salvo la parola al contrario 
    for (let x = word.length - 1; x >= 0; x--) {
        result += word[x];
    }

 return result  ; 
} 