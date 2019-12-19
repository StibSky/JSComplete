/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        let userInput = Number(document.getElementById("year").value);


        function monthsWithFriday13(year) {
            for (let month=0; month<12; month++) {
                let d = new Date(year,month,13);
                //checks if it is friday
                if(d.getDay() == 5){
                    //prints the months that have a friday the 13th
                    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];
                    alert(monthNames[Number(month)]);

                }
            }
        }

        console.log(monthsWithFriday13(userInput));

    })
})();
