
var artArray = [];
var soundArray = [];
var textArray = [];
var next;
var back;

var currentPage = 0;

function preload() {
  artArray[1] = loadImage("assets/venice.jpeg");
  artArray[2] = loadImage("assets/twosome.jpeg");
  artArray[3] = loadImage("assets/sunflower.jpeg");
  artArray[4] = loadImage("assets/shore.jpeg");
  artArray[5] = loadImage("assets/pear.jpeg");
  artArray[6] = loadImage("assets/palette.jpeg");
  artArray[7] = loadImage("assets/horse.jpeg");
  artArray[8] = loadImage("assets/hat.jpeg");
  artArray[9] = loadImage("assets/field.jpeg");
  artArray[10] = loadImage("assets/ermilov.jpeg");
  artArray[11] = loadImage("assets/cubist.jpeg");
  artArray[12] = loadImage("assets/capri.jpeg");
  artArray[13] = loadImage("assets/boat.jpeg");
  artArray[14] = loadImage("assets/blue.jpeg");
  artArray[15] = loadImage("assets/annunciation.jpeg");

  soundFormats("mp3");
  soundArray[1] = loadSound("assets/Bushwick_Tarantella.mp3");
  soundArray[2] = loadSound("assets/Always_Be_My_Unicorn.mp3");
  soundArray[3] = loadSound("assets/How_it_Began.mp3");
  soundArray[4] = loadSound("assets/Island_Coconuts.mp3");
  soundArray[5] = loadSound("assets/bensound-jazzyfrenchy.mp3");
  soundArray[6] = loadSound("assets/Ubiquitous.mp3");
  soundArray[7] = loadSound("assets/bensound-psychedelic.mp3");
  soundArray[8] = loadSound("assets/bensound-allthat.mp3");
  soundArray[9] = loadSound("assets/Sunflower.mp3");
  soundArray[10] = loadSound("assets/From_Russia_With_Love.mp3");
  soundArray[11] = loadSound("assets/Dreams_Electric.mp3");
  soundArray[12] = loadSound("assets/bensound-newdawn.mp3");
  soundArray[13] = loadSound("assets/City_Plaza.mp3");
  soundArray[14] = loadSound("assets/bensound-deepblue.mp3");
  soundArray[15] = loadSound("assets/Anxious.mp3");

}


function setup() {
  // put setup code here
  createCanvas(1000,1000);

  next = createButton("Next");
  next.position(400,600);
  next.mousePressed(function(){
    if(currentPage > 0){
      soundArray[currentPage].stop();
    }
    currentPage = currentPage + 1;
    if(currentPage > 15){
      currentPage = 0;
    }
    if(currentPage > 0){
      soundArray[currentPage].play();
    }


  });

  back = createButton("Back");
  back.position(100,600);
  back.mousePressed(function(){

      if(currentPage > 0){
        soundArray[currentPage].stop();
      }
      currentPage = currentPage - 1;
      if(currentPage <= -1){
        currentPage = 0;
      }
      if(currentPage > 0){
        soundArray[currentPage].play();
      }
  });
}

function draw() {
  // put drawing code here
  console.log(currentPage);
  background(255);
    if(currentPage == 0){
      text("page 0", 200,200);
    }

    if(currentPage > 0){
      image(artArray[currentPage],50,50,width/2,height/2);

    }
}
