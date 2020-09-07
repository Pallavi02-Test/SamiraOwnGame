var bg;
var form;
var rules;
function preload(){
  bg = loadImage("images/droneBg.jpg");
}

function setup(){
//createCanvas(displayWidth,displayHeight)
form = new Form();
}

function draw (){
form.display();
}