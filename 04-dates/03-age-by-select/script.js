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

        //zet input om in een string van getallen, split deze om een datum te krijgen
        let dateString = currentDay + "/" + currentMonths + "/" + currentYear;
        let toDate = new Date(dateString);
        dateString = toDate.getFullYear() + "/" + toDate.getMonth() + "/" + toDate.getDate();
        console.log(toDate);

        //function for calculating birthday
        function getAge(birthdateString)
        {
            var today = new Date();
            var birthDate = new Date(birthdateString);
            //compares year of today with year of birthdate
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            //checks if birthdaymonth passed
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
            {
                age--;
            }
            return age;
        }
        alert(getAge(toDate))

    });




})();
