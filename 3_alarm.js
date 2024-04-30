// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

//Result example: "Time for bed after 10 seconds".


let seconds = prompt("¿Cuántos segundos necesitas para que la alarma suene?");

console.log("Tiempo para que suene la alarma: " + seconds + " segundos");

const message = "Es hora de ir a la cama";
setTimeout(() => {
    alert(`${message} han pasado ${seconds} segundos`);
}, seconds * 1000);

