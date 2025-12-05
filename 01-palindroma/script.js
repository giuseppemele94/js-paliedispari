/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma * */

//output a schermo 
const mex = document.getElementById("text-console") ;  

//input utente
const user = prompt("Inserisci una parola :"); 

//invoco la funzione 
palindroma(user.toLowerCase()); 



// Funzione palindroma 
function palindroma (parola) {

    let risultato =""; 
    
    //salvo la parola al contrario 
    for ( let x = parola.length - 1; x >= 0 ; x--) {
        risultato += parola[x]; 
    }


    if(risultato === parola) {
       mex.textContent = `La parola ${parola} è palindroma `; 
        console.log("palindroma");
    }
    else {
        mex.textContent = `La parola ${parola} non è palindroma `;  
        console.log("non palindroma");
    }

    return risultato ; 
} 