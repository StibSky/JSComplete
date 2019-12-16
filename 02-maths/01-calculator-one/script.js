/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let x = document.getElementById("op-one").value;
    let y = document.getElementById("op-two").value;
    let sum = Number(x)+ Number(y);
    let sub = Number(x) - Number(y);
    let mul = Number(x) * Number(y);
    let div = Number(x) / Number(y);

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        alert(mul);
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        alert(div);
        // perform an division
    });
})();
