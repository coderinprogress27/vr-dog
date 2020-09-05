//Create variables here
var dogimage
var doghappyimage
var dog
var database
var foods
var foodstock
function preload()
{
  //load images here
  loadImage("images/dogImg.png")
  loadImage("images/dogImg1.png")
  dogimage.addImage("images/dogImg.png")
  doghappyimage.addImage("images/dogImg1.png")
  database = firebase.database
  foodstock=database.ref('food')
foodstock.on("value",readStock)
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(doghappyimage)
}
textSize(15)
fill("white")
stroke("black")
text("Note:Press UP_ARROW Key to Feed doogy the doggy",50,20)
}
function readStock(data){
  foods=data.val
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


