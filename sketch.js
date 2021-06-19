var bgImg;
var cat , catImg1, catImg2, catImg3;
var rat, ratImg1, ratImg2, ratImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    catImg1= loadAnimation("images/cat1.png"); 
    catImg2=loadAnimation("images/cat2.png","images/cat3.png"); 
    catImg3= loadAnimation("images/cat4.png");
    ratImg1=loadAnimation("images/rat1.png");
    ratImg2= loadAnimation("images/rat2.png","images/rat3.png");
    ratImg3=loadAnimation("images/rat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.2;

    rat = createSprite(200, 600);
    rat.addAnimation("ratStanding", ratImg1);
    rat.scale = 0.18;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rat.x < (cat.width - rat.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
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
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
cat.frameDelay=25
      rat.addAnimation("ratRunning", ratImg2);
      rat.changeAnimation("ratRunning");
      rat.frameDelay=25
  }

}
