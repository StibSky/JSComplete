/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

//use 3 different prompts
    let age = prompt("Please enter your age", "empty");
    let gender = prompt("Please enter your gender", "empty");
    let town = prompt("Please enter your home town", "empty");
    confirmation();


    function confirmation() {
        let txt;
        if (confirm("Please confirm")) {
            alert(age + " " +gender + " " + town);
        } else {
            txt = "You pressed Cancel!";
        }
        document.getElementById("demo").innerHTML = txt;
    }

    // your code here

})();
