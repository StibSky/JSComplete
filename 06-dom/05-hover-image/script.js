/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //select img (first tag)
    //can also use queryselector
    let img = document.getElementsByTagName("img")[0];
    console.log(img);

    //hover = mouseover

    img.addEventListener("mouseover", function () {
        img.setAttribute("src", "../../_shared/img/kiss-wink-heart.svg");
    });

    //add mouseout, otherwise image gets stuck on the mouseover image
    img.addEventListener('mouseout', function () {
        img.setAttribute("src", "../../_shared/img/kiss.svg");
    })



})();
