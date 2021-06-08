var bgImg;
var cat , catImg1, catImg2, catImg3;
var rat, ratImg1, ratImg2, ratImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    catImg1= loadAnimation("images/cat1.png"); 
    catImg2=loadAnimation("images/cat2.png","images/cat3.png"); 
    catImg3= loadAnimation("images/cat4.png");
    ratImg1=loadAnimation("images/ratOne.png");
    ratImg2= loadAnimation("images/ratTwo.png","images/ratThree.png");
    ratImg3=loadAnimation("images/ratFour.png");

}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.2;

    rat = createSprite(200, 600);
    rat.addAnimation("ratStanding", ratImg1);
    rat.scale = 0.18;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width - rat.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        rat.addAnimation("ratLastImage", ratImg3);
        rat.scale=0.15;
        rat.changeAnimation("ratLastImage");
    }  
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keycode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

  }

}
