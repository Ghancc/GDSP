/* tabs.js - javascript for the navigation feature
 *
 * D Provine, 13 Feb 2013 - Implemented for DeSymbol Symbolic Logic Interpreter
 */


/* not in a function: these execute immediately */

tab0 = document.getElementById("rules0");
tab1 = document.getElementById("rules1");
tab2 = document.getElementById("rules2");
tab3 = document.getElementById("rules3");
tab4 = document.getElementById("rules4");

tab0.addEventListener("click", function() {showme(tab0);}, false);
tab1.addEventListener("click", function() {showme(tab1);}, false);
tab2.addEventListener("click", function() {showme(tab2);}, false);
tab3.addEventListener("click", function() {showme(tab3);}, false);
tab4.addEventListener("click", function() {showme(tab4);}, false);

function showme(activetab)
{
    var tabbar    = activetab.parentNode;
    var alltabs   = tabbar.childNodes;
    var tabnum    = -1; // when we hit the first one, we'll add 1
    var hottab;

    for (i = 0; i < alltabs.length; i++) {
        if ( alltabs[i].hasAttribute ) { // make sure it's an object
            if (alltabs[i].hasAttribute("class") ) {
                alltabs[i].removeAttribute("class");
            }
            tabnum++;
            if ( alltabs[i] == activetab ) {
                hottab = tabnum;
            }
        }
    }
    activetab.setAttribute("class", "thistab");

    var allcards = document.querySelectorAll(".card");

    for (i = 0; i < allcards.length; i++) {
        if (i == hottab) {
            allcards[i].setAttribute("style", "display: block");
        } else {
            allcards[i].setAttribute("style", "display: none");
        }
    }
}