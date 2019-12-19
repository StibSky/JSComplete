/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];


//set lets you look for only unique elements
// ... is spread operator here
    let unique = [...new Set(fruits)];

    //other options are with a for each with unique variable
    //or using filter!!
    //https://wsvincent.com/javascript-remove-duplicates-array/ for reference
    // set seemed the be the most logical one but made sure to test and tryout the other opti



    //done with 5!
})();
