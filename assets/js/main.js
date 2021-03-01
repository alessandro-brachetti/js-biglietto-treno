var age = parseInt(prompt("Dimmi la tua età"));

console.log(age);

var km = parseInt(prompt("Dimmi quanti km devi fare"));

console.log(km);

var priceTicket = km * 0.21;

console.log(priceTicket);

var discount20 = priceTicket * 0.2;

var discount40 = priceTicket * 0.4;


if (age < 18) {
var priceTicket = priceTicket - discount20;
} else if (age > 65) {
var priceTicket = priceTicket - discount40;
} else {
var priceTicket = priceTicket;
}

document.getElementById("ticket").innerHTML = "Il prezzo del tuo biglietto è: " + priceTicket + " euro";
