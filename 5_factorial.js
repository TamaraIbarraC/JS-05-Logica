//Write a program that prompts for an intenger number n:
//Where  1 <= n. 
// Solve this using recursion.

function factorial(n) {
    //If 'n' equals 1, return 1, else introduce a recursive where the factorial of 'n-1' is returned n times:
    
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let n = parseInt(prompt("Ingresa un número entero >= 1: "), 10);

//PERSONAL CHALLENGE: 
/* 
Assuring user entered a number with 'isNaN', and that is higher than 1:
*/

if (!isNaN(n) && n >= 1) {
    alert(n + " factorial es: " + factorial(n));
} else {
    alert("Solo ingresa números enteros mayores o iguales a 1");
}

