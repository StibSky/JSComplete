/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        // perform an addition
        currentDay=     document.getElementById("dob-day").value;
        currentMonths=  document.getElementById("dob-month").value;
        currentYear=    document.getElementById("dob-year").value;

        let dateString = currentDay + "/" + currentMonths + "/" + currentYear;
        let toDate = new Date(dateString);
        dateString = toDate.getFullYear() + "/" + toDate.getMonth() + "/" + toDate.getDate();
        console.log(toDate);


    });




})();
