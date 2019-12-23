/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


// set maxlength on pass-one
    document.getElementById("pass-one").setAttribute("maxlength", "10");
    //keydown = on key pressed
    document.getElementById("pass-one").addEventListener("keydown", function () {
        //changes counter to the length of password dynamically
        document.getElementById("counter").innerHTML = document.getElementById("pass-one").value.length + "/10"

    })
})();
