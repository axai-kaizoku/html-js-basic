const SpellChecker = require('spellchecker');

// let word = "helo"

// let mis = SpellChecker.getCorrectionsForMisspelling(word);

export function GetWords (word)  {
    return SpellChecker.getCorrectionsForMisspelling(word);
}

// let words = ['v','ve','vech','vechi','vechicl','vechicle'];

// for (word of words){

//     console.log(GetWords(word))

// }



// console.log(mis);