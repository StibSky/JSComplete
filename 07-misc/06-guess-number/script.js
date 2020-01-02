/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let solution = Math.floor(Math.random()*(100-1) +1);
    let guessedNumber;
    let numberGuesses = 1;

    while (parseInt(guessedNumber) !== solution) {
        //generates number 1-100
        guessedNumber = prompt("guess a number between 1 and 100");
        if (parseInt(guessedNumber) > solution) {
            alert("guess lower");
            numberGuesses++;
        }
        else if (parseInt(guessedNumber) < solution) {
            alert("guess higher");
            numberGuesses++;
        }
    }
     alert("that is correct!! you needed " + numberGuesses + " guesses")

})();
