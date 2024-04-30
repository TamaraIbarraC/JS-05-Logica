//Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

//PERSONAL CHALLENGE for username: 
/*
1) If user clicks on 'Cancel' when 'prompt' pops up, don't save the 'null' value, therefore, show an 'ALERT', then ask again to introduce a username.
Repeat the cicle if the user keeps clicking on 'Cancel'.

2) Ask the user to type a username without spaces, and more than 8 caracters and les than 16:
*/

var username = prompt("Por favor ingresa un nombre de usuario sin espacios (que tenga entre 8 y 16 caracteres ");

while (username == null) {
    alert("No has introducido un nombre de usuario");
    username = prompt("Tu nombre de usuario debe ir sin espacios y tener entre 8 y 16 caracteres ");
}

while (username.length < 8 || username.length > 16 || username.includes(" ")) {
    username = prompt("Recuerda que el nombre de usuario debe tener entre 8 y 16 caracteres y no debe contener espacios");
}
console.log(username);

//PERSONAL CHALLENGE for age: 
/*
1) Only accept numbers without spaces.
2) Create a request similar to the one used for the username when user clicks on "Cancel" to unsafe 'null' values.
*/

var age = prompt("Ingresa tu edad");

//Asking only for numbers:

while (isNaN(age) || age.trim() == "") {
    age = prompt("Solo ingresa números");
}

//If user clicks CANCEL, don't keep the null value:

while (age == null) {
    alert("No has introducido tu edad");
    age = prompt("Por favor ingresa tu edad");
//Repeating the request of not entering letters or spaces if user tries to:

    while (isNaN(age) || age.trim() == "") {
        age = prompt("Solo ingresa números");
    }
}
console.log(age);
/*
3) If age < 12 or >= 90, forvide the entrance.

//PERSONAL CHALLENGE for entering films:

Not allow 'nulls' and ask differently for entering 2 favorite movies:
*/
var favoriteMovies = [];
    if (age < 12) {
        console.log("Disculpa, debes tener mas de 11 anos para ingresar");
    } else if (age > 89) {
        console.log("Se requiere una persona menor a 90 para poder ingresar");
    } else {
        for (var i = 0; i < 3; i++) {
            alert("¿Cuáles son tus dos películas favoritas?");
            favoriteMovies.push(prompt("Dime tu primer pelicula favorita"));
            if (favoriteMovies[1] == null){
                alert("No has introducido una pelicula");
                i--;
            } else {
                favoriteMovies.push(prompt("Dime otra pelicula"));
                break;
            }
        }
        console.log(favoriteMovies.join(", "));
        console.log(`'This film ${favoriteMovies[1]} is one of my favorites'`);
    }


