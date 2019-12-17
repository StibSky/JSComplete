/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //gets value from list
let numberlist = (document.getElementById("numbers").value);
    let numberArray = numberlist.split(',');

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

    // sorts the elements by comparing which one is bigger
        alert(numberArray.sort((a, b) => {return a-b;}))

    });

})();



