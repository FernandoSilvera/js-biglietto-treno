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

const km = prompt("Quanti km vuoi percorrere?");
const age = prompt("Quanti anni hai?");
let price = km * 0.21;
const discountUnder18 = price / 100 * 20;
const discountOver65 = price / 100 * 40;

const docKm = document.getElementById("span-km");
const docAge = document.getElementById("span-age");
const docPrice = document.getElementById("span-price");

if (age <= 17) {
  price = price - discountUnder18;
} else if (age >= 65) {
  price = price - discountOver65;
}

docKm.innerHTML = km;
docAge.innerHTML = age;
docPrice.innerHTML = `${price.toFixed(2)}€`;