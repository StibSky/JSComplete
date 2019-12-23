/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
    newTable.style.border = '1px solid black';

    //makes table with 10 rows
    for(let i = 0; i < 10; i++){
        let tr = newTable.insertRow();
        let td = tr.insertCell();
        //puts text in each cell
        td.appendChild(document.createTextNode('Cell'));
    }
    document.getElementById("target").appendChild(newTable);

})();
