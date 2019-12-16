/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // for loop over numbers till 21
        for (var i = 1; i <= 21; i++) {
            //strict equality modulo to not print random comma numbers
            if (Math.sqrt(i) % 1 === 0)
            {
                alert(i);
            }

        }
    })


})();

