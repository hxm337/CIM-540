var page1;
var page2;
var page3;
var page4;

var button1;
var button2;
var button3;
var button4;

var currentImage = 0;

function preload(){

  page1 = loadImage("assets/Page1.jpeg");
  page2 = loadImage("assets/Page2.jpeg");
  page3 = loadImage("assets/Page3.jpeg");
  page4 = loadImage("assets/Page4.jpeg");

}



function setup() {
  // put setup code here
  createCanvas(1000,1000);

  button1 = createButton("Page 1");
  button1.position(100,20);
  button1.mousePressed(function(){
    currentImage = 0;
  });

  button2 = createButton("Page 2");
  button2.position(200,20);
  button2.mousePressed(function(){
    currentImage = 1;
  });

  button3 = createButton("Page 3");
  button3.position(300,20);
  button3.mousePressed(function(){
    currentImage = 2;
  });

  button4 = createButton("Page 4");
  button4.position(400,20);
  button4.mousePressed(function(){
    currentImage = 3;
  });

}

function draw() {
  // put drawing code here

  if(currentImage == 0){
    image(page1,0,20,page1.width/4,page1.height/4);
  }else if(currentImage == 1){
    image(page2,0,20,page2.width/4,page2.height/4);
  }else if(currentImage == 2){
    image(page3,0,20,page3.width/4,page3.height/4);
  }else if(currentImage == 3){
    image(page4,0,20,page4.width/4,page4.height/4)
  }





}
