// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.


//PERSONAL CHALLENGE:
/*
a) If user click on ACEPT instead of enteringing a value, don't save the NULL value.
b) If enters a blank space or a letter, don't save.
Instead, generate an "alert" indicating only numbers are accepted, and continue saving from the last digit entered. Example: 
Users enters digits from requests 1 to 6 and during 7 enters a blankspace, afer the alert, number requests 7 to 10 will be accepted.
*/
var numbers = [];
var addNumber = "";

for (var i = 0; i < 10; i++) {
  addNumber = prompt("Ingresa un número");
  if(addNumber == null || addNumber.trim() == "" ||
    isNaN(addNumber))
  {
    alert("Solo ingresa números");
    i--;
    // "i--" returns back to the last request, to ask again for a number and don't skip a request = enter 10 numbers instead of 9 numebrs and a letter (even if the letter isn't saved).
  }
  else {
    numbers.push(addNumber);
  }
}

var highest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}

console.log("El número más grande es: " + highest);

  /*
  - No accept NULL values (when user clicks on Accept without entering a number). 
  - Neither BLANCKSPACES (although 'trim' is used to cut spaces bf and after, also helps with avoiding entering spaces when numebers are request).
  - Nor letters (using 'isNaN' = is Not a Number)
  */