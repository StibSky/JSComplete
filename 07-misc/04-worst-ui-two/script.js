/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // getbytagname to get all buttons
    const buttons = document.getElementsByTagName("button");

    // go over all buttons with for loop
    for (let i =0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            let minVal = buttons[i].getAttribute("data-min");
            let maxVal = buttons[i].getAttribute("data-max");
            let currentVal = buttons[i].innerHTML;
            //ups value by one on every click

            if (currentVal < maxVal) {
                currentVal++;
                // console.log(currentVal);
                buttons[i].innerHTML = currentVal;
            }



            //makes sure it writes a 0 instead of deleting a number when in single digit
            if (buttons[i].innerHTML < 10) {
                buttons[i].innerHTML = "0" +buttons[i].innerHTML;
            }

            document.getElementById("target").innerHTML =
                "+" + buttons[0].innerHTML
                + (buttons[1].innerHTML)
                + (buttons[2].innerHTML)
                + (buttons[3].innerHTML)
        });
    }



})();