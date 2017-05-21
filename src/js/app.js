// Place JS here.
var creatBtn = function(lab) {
  var btn = document.createElement("BUTTON");
  btn.appendChild(document.createTextNode(lab));
  document.body.appendChild(btn);
  return btn;
};

var villes = ["villeneuve d'ascq", "lille", "cysoing", "Anstaing"];

// sans closure les btn retourne le dernier item Anstaing
for (var i = 0; i < villes.length; i++) {
  var btn = creatBtn(villes[i]);
  // console.log('Ta ville : ', villes[i]);
  btn.onclick = function() {
    // la val final de i est 4 (villes.length)
    console.log('Ta ville : ', villes[i - 1]);
  };
}