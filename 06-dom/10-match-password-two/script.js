/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        //compares values of pass one and pass two
        if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value) {
            document.querySelectorAll("input").forEach(password => password.setAttribute("class", "error"))
        }
        else {
            document.querySelectorAll("input").forEach(password => password.classList.remove("error"))
        }
    })
})();
