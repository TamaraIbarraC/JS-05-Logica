//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

var normalWord = prompt("Ingresa una palabra o frase");

//Converting capitalized letters to lowercases in order to ignore how the user wrote the sentence/word (capitalized or not):
var normalWord = normalWord.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

//Using 'split' to create an array of substrings made of each word in a sentence: then, using 'join' to write the words together:
var reverseWord = normalWord.split("").reverse().join("");

//Evaluating if the word/sentence writen forward is the same as written backwards:

if (normalWord === reverseWord) {
    console.log("Es palíndromo");
} else {
    console.log("No es palíndromo");
}
