/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {


 let textsizes = [
     "xx-small",
     "x-small",
     "small",
     "medium",
     "large",
     "x-large",
     "xx-large"
 ];

 reversesize = textsizes.reverse();
 console.log(reversesize);

   textsizes= textsizes.concat(reversesize);
    console.log(textsizes);
    let textElement = document.getElementById("target");
    let text = textElement.innerText;

    //makes array of text
    text = text.split("");
    console.log(text);

    //clears text out of original html ((otherwise no way to set font sizes?
    textElement.innerText = "";

    for (let j = 0; j < text.length; j++) {
        // wrap each letter in span
        let wrap = document.createElement("span");
        wrap.innerText = text[j];
        wrap.style.fontSize = textsizes[j];

        // append the letter
        textElement.appendChild(wrap);
    }


})();