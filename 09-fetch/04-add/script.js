/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // your code here
    let hero = {}; // empty array for multiple elements;
        fetch('http://localhost:12345/_shared/api.json')
            .then(function (link) {
                return link.json();
            })
            .then(function (data) {
                document.getElementById("run").addEventListener("click", function() {
             let newName = document.getElementById("hero-name").value;
             let newEgo = document.getElementById("hero-alter-ego").value;
             let newPowers = document.getElementById("hero-powers").value;
                hero ["id"] = data.heroes.length +1;
                hero ["name"] = newName;
                hero ["alterEgo"] = newEgo;
                hero ["abilities"] = []; /*array in array */
                /* could just do id: data.heroes.length +1; ... to set the new values" */
                hero.abilities.push(newPowers);
                //push the new hero in the array
                data.heroes.push(hero);
                console.log(data.heroes)
            })

    })
})();