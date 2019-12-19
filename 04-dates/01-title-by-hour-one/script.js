/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    //put in variable first to use getters
let currentHour = new Date();
console.log(currentHour.getHours());
if (currentHour.getHours() < 18) {
    document.getElementById("target").innerHTML = "hello";
}

else {
    document.getElementById("target").innerHTML = "Good Evening! ";
}
    // your code here

})();
