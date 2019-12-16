/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(maths) {
        // perform the operation
        var x = Number(document.getElementById("op-one").value);

        var y = Number(document.getElementById("op-two").value);

        var solution;

        switch (maths) {
            case "addition":
                solution = (x + y);
                break;
            case "substraction":
                solution = (x - y);
                break;
            case "multiplication":
                solution = (x * y);
                break;
            case "division":
                solution = (x / y);
                break;
            default:
                alert("error");
        }
        alert(solution);
    };
// use Array to go over buttons so you can put them in cases more easily
    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            //performoperation uses name of the button
            performOperation($btn.id);
        });
    });
})();
//copied a lot of code from online uses cuz own solution was not elegant and didn't really use switch cases ((made sure to understand code))
//some parts of the code ((for each, use of array for buttons)) seemed far fetched for this solution but made sure I understand them