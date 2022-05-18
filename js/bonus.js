/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Formula per il calcolo: km * 0.21 = prezzoBiglietto

Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50

BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili?
*/

// Assegnazione elementi HTML a variabili
let docKm = document.getElementById("span-km");
let docAge = document.getElementById("span-age");
const docPrice = document.getElementById("span-price");

// Kilometri che l'utente vuole percorrere
let km = prompt("Quanti km vuoi percorrere?");
docKm.innerHTML = km;

if (isNaN(km)) {
  km = null;
  alert("I km inseriti non sono validi")
} else if (km < 2) {
  km = null;
  alert("Il numero minimo di km è 2")
  docKm.innerHTML = "numero troppo piccolo";
} else if (km > 300) {
  km = null;
  alert("Il numero massimo di km è 300")
  docKm.innerHTML = "numero troppo grande";
}

// Prezzo senza sconti e sconti
let price = km * 0.21;
const discountUnder18 = price / 100 * 20;
const discountOver65 = price / 100 * 40;

// Età dell'utente
let age = Math.floor(prompt("Quanti anni hai?"));
docAge.innerHTML = age;

if (isNaN(age) || age <= 0 || age > 1) {
  age = null;
  alert("L'età inserita non è valida, non verranno applicati sconti.");
  docAge.innerHTML = "sconosciuta";
} else if (age <= 17) {
  price = price - discountUnder18;
  alert("Hai diritto a uno sconto del 20%");
} else if (age >= 65) {
  price = price - discountOver65;
  alert("Hai diritto a uno sconto del 40%");
}

// Prezzo finale
docPrice.innerHTML = `${price.toFixed(2)}€`;