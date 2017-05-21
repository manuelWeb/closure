// Place JS here.
// IEF globale
(function() {

  var villes = ["villeneuve d'ascq", "lille", "cysoing", "Anstaing"];

  var cpt = function(index) {
    console.log("valeur de index outer closure: ", index); // valeur de index outer
    return function() {
      console.log(
        `valeur de index inner closure: ${index}`,
        `ville[${index}]: ${villes[index]}` // valeur de  index inner
      );
    };
  };
  for (var j = 0; j < villes.length; j++) {
    var milleSec = 1000 * j;
    setTimeout(cpt(j), milleSec);
  }
  // création btn + evt => console.log(memoVille(i))
  var creatBtn = function(lab) {
    var btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode(lab));
    document.body.appendChild(btn);
    return btn;
  };

  var memoVille = function(index_ary) {
    return function() {
      console.log('Votre ville est : ', villes[index_ary]);
    };
  };

  for (var i = 0; i < villes.length; i++) {
    var btn = creatBtn(villes[i]);
    var logVilleMemo = memoVille(i);
    btn.onclick = logVilleMemo; // attention pas de () car la fct s'exe au click
  }
})();

// cas setTimeout sans closure
/*
for (var i = 0; i <= 3; i++) {
  var milleSec = 1000 * i;
  setTimeout(function () {
    if (i < 3) {
      console.log(i + 1);
    } else {
      console.log("c'est parti !");
    }
  }, milleSec);
} // affiche 4 fois le dernier état
*/

// avec closure (vers longue) pour memoriser cpt dans memoSec
// memorisation du contexte i de la bcl for transmi par arg cpt de la <= memoSec
/*
var memoSec = function (cpt) {
  return function () {
    if (cpt <= 3) {
      console.log(cpt);
    } else {
      console.log("on y est !");
    }
  };
};

for (var i = 0; i <= 4; i++) {
  var milleSec = 1000 * i;
  setTimeout(memoSec(i), milleSec);
} // affiche 0 puis 1 puis 2 puis 3 puis on y est !, toutes les sec
*/

// IEF dans la boucle (mauvaise pratique)
/*
for (var i = 0; i < villes.length; i++) {
  var milleSec = 1000 * i;
  setTimeout((function(i) {
    console.log(i); // valeur de i outer
    return function() {
      console.log(i); // valeur de (i)
      console.log(`ville[${i}]: ${villes[i]}`);
    };
  })(i), milleSec);
}
*/
