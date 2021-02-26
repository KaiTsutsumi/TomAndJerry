var tom, jerry;
var jerryImg1, jerryImg2, jerryImg3, tomImg1, tomImg2, tomImg3;
var bg;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    tomImg1 = loadAnimation("images/cat1.png");
    tomImg3 = loadAnimation("images/cat4.png");
    tomImg2 = loadAnimation("images/cat2.png", "images/cat3.png");

    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
    jerryImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    tom = createSprite(670, 600, 1000, 500);
    tom.addAnimation(tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600, 100, 500);
    jerry.addAnimation(jerryImg1);
    jerry.scale = 0.15;

}

function draw() {
    background(bg);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width + jerry.width) {
      tom.changeAnimation(tomImg3);
      jerry.changeAnimation(jerryImg3);
    }

    keyPressed();

    drawSprites();
}

function keyPressed(){

    //For moving and changing animation write code here
    if(keyDown("LEFT_ARROW")) {
        tom.changeAnimation(tomImg2);
        jerry.changeAnimation(jerryImg2);
        
        tom.x = tom.x-15;
    }
    
  }

