var space;
var spaceType;

var sunX = 200;
var sunY = 600;
var sunSize = 250;

var sunButtonX = 200;
var sunButtonY = 250;
var sunButtonSize = 15;

var moonSky;
var crescent;
var fullMoon;
var ufo;
var ufoButton;
var showUfo = false;

var shootingStar;
var shootingStarX = -200;
var star;
var starAmount = 60;
var starLocationX = [];
var starLocationY = [];
var moveStar = false;

function preload() {
  moonSky = loadImage("assets/nightsky.jpg");
  //"Astronomy" by Suren Manvelyan is licensed under CC BY-NC-ND 4.0
  crescent = loadImage("assets/Crescent-moon.png");
  //by m1981 https://openclipart.org/detail/247072/crescent-moon
  fullMoon = loadImage("assets/moon-full.png");
  //Originally uploaded by AJ Ashton for OCAL 0.18
  ufo = loadImage("assets/UFO.png");
  //by rg1024 https://openclipart.org/detail/20150/ufo-in-cartoon-style
  star = loadImage("assets/star.png");
  //by acspike https://openclipart.org/detail/96517/star
  shootingStar = loadImage("assets/shootingstar.png");
  //remix of NicholasJudy456's upload converted to vector


}

function setup() {
  // put setup code here
  createCanvas(500,500);

  space = createSelect();
  space.position(10,10);
  space.option("");
  space.option("intro");
  space.option("sun");
  space.option("moon");
  space.option("stars");
  space.changed(function(){
    spaceType = space.value();
  });

  for(var l = 0; l < starAmount; l++){
    starLocationX[l] = random(0, width);
    starLocationY[l] = random(0, height);
}


ufoButton = createButton("UFO");
ufoButton.position(420,60);
ufoButton.mousePressed(function(){
  showUfo = true;
});

ufoButton.hide();


}

spaceType = "intro";

function draw() {
  // put drawing code here
  background(255);
  fill("black");
  stroke(0);
  textSize(20);
  text(spaceType, 10, 75);

  if(spaceType == "intro"){
    text("Explore the Sun, Moon and Stars", 10, 150);
    text("Use the menu to select a page", 10, 200);



  }else if(spaceType == "sun"){
    text("When the sun rises, hover your mouse to make rays!", 20,50);
    fill("orange");
    ellipse(sunX, sunY, sunSize, sunSize);
    if (sunY > 250) {
      sunY = sunY - 5;
    }
    fill("yellow");
    ellipse(sunButtonX, sunButtonY, sunButtonSize, sunButtonSize);

    if(mouseX > sunButtonX && mouseX < sunButtonX + sunButtonSize && mouseY > sunButtonY && mouseY < sunButtonY + sunButtonSize == true){

      for(var i = 0; i < 6; i++){
        push();
        translate(200,250);
        rotate(i + 3);
        fill("yellow");
        ellipse(130,100,120,30);
        pop();
      }

    }
    ufoButton.hide();
    showUfo = false;


  }else if(spaceType == "moon"){
    image(moonSky, 0,0);
    fill("White");
    text("move your mouse to watch the moon phase",20,50);
    text("press the UFO button to see an alien", 20,450);
    if(mouseX < width/2){
      image(crescent, mouseX, mouseY, crescent.width/3, crescent.height/3);
    }if(mouseX > width/2){
      image(fullMoon, mouseX, mouseY, fullMoon.width/2, fullMoon.width/2);
    }if(showUfo == true){
      image(ufo,170,200,ufo.width/2,ufo.height/2);
    }

    ufoButton.show();

  }else if(spaceType == "stars"){
    background("black");
    fill("white");
    text("press and hold the mouse to see a shooting star", 20, 70);

    for(var x = 0; x < starAmount; x++){
      push();
      translate(starLocationX[x], starLocationY[x]);
      scale((sin(radians(frameCount)) * .5 ));
      image(star, 0,0, star.width/7, star.height/7);
      pop();

      if(starLocationY[x]< height - 20){
        starLocationY[x];
        starLocationX[x] = starLocationX[x] + (sin(radians(frameCount)) * .1 );
      }

    ufoButton.hide();
}

    if(moveStar == true){
      //show image
      // imgX = imgX + 1;
      console.log("star moving");
      image(shootingStar, shootingStarX, 200, shootingStar.width/2, shootingStar.height/2);
      shootingStarX++;

    }else{
      shootingStarX = -200;
    }
}


}

function mousePressed(){
  moveStar = true;
}

function mouseReleased(){
  moveStar = false;
}
