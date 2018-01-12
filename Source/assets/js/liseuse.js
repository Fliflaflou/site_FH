

  var bauto = 0;
  var dossier="images/images/visio/";
  var numero = 1;
  function objet() {
  this.length = objet.arguments.length
  for (var i = 0; i < this.length; i++) this[i+1] = objet.arguments[i]
  }
  var nom = new objet ("1.jpg","2.jpg", "3.jpg","4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg");
  function suivante() {
  numero += 1;
  if (numero == nom.length + 1) numero = 1;
  document.image.src = dossier+nom[numero];
  }
  function precedente() {
  numero -= 1;
  if (numero == 0) numero = nom.length;
  document.image.src = dossier+nom[numero];
  }
  function changer() {
  numero += 1;
  if (numero == nom.length + 1) numero = 1;
  document.image.src = dossier+nom[numero];
  roll=setTimeout("changer()", 1500);
  }
  function initial() {
  window.clearTimeout(roll);
  document.image.src = dossier+nom[numero];
  }
  function auto() {
  if (bauto == 0) {
  bauto =1; changer();
  document.vision.automat.value=" Lect/Stop ";
  }
  else {
  bauto =0; initial();
  document.vision.automat.value=" Lect/Auto ";
  }
  }
;
