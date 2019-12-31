/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("keydown", function () {
        let input = document.getElementById("pass-one");
        let validInput = document.getElementById("validity");



        function checkInput() {
            //regex used to filter for specific characters or numbers etc
            // .* in regex means 0 or more of ANY character
            let twoNumbers = new RegExp("[0-9].*[0-9]");
            //checks if input is 8 char long and
            // at least 8 characters long and contains at least two numbers
            //test method checks for tests in a string, ideal for RegEx
            return (input.value.length >= 8) && (twoNumbers.test(input.value))
        }
        if (checkInput() === true){
            validInput.innerHTML = "ok";
        } else {
            validInput.innerHTML = "not ok";
        }
    })


})();
