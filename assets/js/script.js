var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");


ctx.beginPath();      // Début du chemin rectangle
ctx.moveTo(140,140);   // Le tracé part du point 150,80
ctx.lineTo(140,320);  // Un segment est ajouté vers 300,230
ctx.lineTo(280,320);
ctx.lineTo(280,140);  // Un segment est ajouté vers 150,230
ctx.closePath();      // Fermeture du chemin
ctx.fillStyle = "#a0d7e6"; // Définition de la couleur de remplissage
ctx.fill();


ctx.beginPath();      // Début du toit
ctx.moveTo(280,140);
ctx.lineTo(210,50);
ctx.lineTo(140,140);
ctx.closePath();
ctx.fillStyle = "#d88437";
ctx.fill();


ctx.beginPath();      // Début du chemin fenêtre gauche
ctx.moveTo(160,160);
ctx.lineTo(160,200);
ctx.lineTo(200,200);
ctx.lineTo(200,160);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();

ctx.beginPath();      // Début du chemin fenêtre droite
ctx.moveTo(220,160);
ctx.lineTo(220,200);
ctx.lineTo(260,200);
ctx.lineTo(260,160);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();

ctx.beginPath();      // Début du chemin porte
ctx.moveTo(190,320);
ctx.lineTo(190,260);
ctx.lineTo(230,260);
ctx.lineTo(230,320);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();
