/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto
*/


//l'utente sceglie pari o dispari 
let userchoise = prompt("Scegli tra pari o dispari").toLowerCase(); 


//controllo sull'input ("pari o dispari ") dell'utente 
while(userchoise !== "pari" && userchoise != "dispari") {
     userchoise = prompt("Scelta non valida, scegli tra pari o dispari").toLowerCase();
}

console.log("Valore inserito dall'utente:" ,userchoise); 

//controllo sull'input ("numero da 1 a 5") dell'utente 
let userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5")); 
while(userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {
    userNumber = parseInt(prompt("Numero inserito non valido ,inserisci un numero tra 1 e 5"));
}

console.log("Numero inserito dall'utente :", userNumber); 

//richiamo la funzione random e salvo il risultato in una variabile 
const randomPcNumber = randomNumber(); 
console.log("Numero generato dalla macchina :", randomPcNumber); 


//sommo i due numeri 
const sumOfNumbers = sum(userNumber,randomPcNumber); 
console.log("Somma dei due numeri :", sumOfNumbers); 

//richiamo funzione isEven per definire se il risultato è pari 
const resultIsEven = isEven(sumOfNumbers); 
console.log("Somma del risultato pari o dispari ?",resultIsEven); 

//dichiaro chi ha vinto 
if(userchoise === resultIsEven ) {
    console.log("Complimenti hai vinto");
}
else {
    console.log("Hai perso"); 
}



// FUNZIONI 
//Funzione numero casuale da 1 a 5
function randomNumber () {
    return Math.floor(Math.random() * 5) + 1 ; 
}

//Funzione somma 
function sum (num1, num2) {
    return num1 + num2 ; 
}

//funzione pari o dispari 
function isEven (number) {
    if(number %2 === 0) {
        return "pari";
    }else{
        return "dispari"; 
    }
}