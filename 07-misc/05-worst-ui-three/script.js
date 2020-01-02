/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // getbytagname to get all buttons
    const buttons = document.getElementsByTagName("button");
    const input = document.getElementsByTagName("input");

    // go over all buttons with for loop
    for (let i =0; i<input.length; i++){
        buttons[i].addEventListener("click", function(){
            let minVal = input[i].getAttribute("data-min");
            let maxVal = input[i].getAttribute("data-max");
            console.log(minVal, maxVal);

            let randomVal = Math.floor(Math.random()*(maxVal-minVal) + minVal);
            let randomBig = Math.floor(Math.random()*(499-460) + 460);
            // console.log(currentVal);
            console.log(input[i].value);
            input[i].value = randomVal;
            input[0].value = randomBig;


            document.getElementById("target").innerHTML = "+0" +
                input[0].value +
                input[1].value +
                input[2].value +
                input[3].value
        });
    }



})();
