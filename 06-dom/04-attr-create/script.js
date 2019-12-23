/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //get data-image attribute
    let dataSource = document.getElementById("source").getAttribute("data-image");
    console.log(dataSource);

    //create new img that uses value from the other
    let img = document.createElement("img");
    img.setAttribute("src", dataSource);

    //appendchild appends (adds) a node as a last child of a node
    //also useable in arrays
    document.getElementById("target").appendChild(img);
    console.log(document.getElementById(("target")));


    //remove old element
    document.getElementById("source").remove();

})();
