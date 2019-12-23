/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    let newTable = document.createElement('table');
    newTable.style.width  = '100px';

    //makes table with 10 rows
    for(let i = 1; i <= 10; i++){
        let tr = newTable.insertRow();
        for(let j=1; j<=10; j++){
            let col = tr.insertCell(j-1);
            // show the multiplication results
            col.innerHTML = i * j ;
        }
    }
    document.getElementById("target").appendChild(newTable);



})();
