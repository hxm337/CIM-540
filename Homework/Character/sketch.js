//Global Variables
var beakColor = "orange";
var bodyColor = "yellow";
var beakY = 180;
var pupilX = 98;
var legHeight = 80;
var backgroundColor = "skyblue";


function setup() {
  // put setup code here
  createCanvas(500,500);
  background("skyblue");
}

function draw() {
  // put drawing code here


  //body
  fill("yellow");
  ellipse(250,300,280,160);
  fill(255);

  //neck
  fill(bodyColor);
  ellipse(125,230,40,115);

  //head
  ellipse(105,170,80,80);
  fill(255);

  //beak
  fill (beakColor);
  triangle(15,180,90,170,90,195);
  line(15,beakY,90,180);




  //eyes
  fill(255);
  ellipse(100,148,20,30);
  ellipse(72,148,20,30);

  //pupils
  fill(0);
  ellipse(pupilX,155,10,15);
  ellipse(pupilX - 28,155,10,15);

  fill(255);

  //wing
  angleMode(DEGREES);
  noFill();
  strokeWeight(3);
  arc(250,280,140,100,10,180);
  arc(250,260,140,100,10,45);
  arc(250,245,140,100,8,40);

  strokeWeight(1);

  //legs
  fill(bodyColor);
  rect(220,360,20,legHeight);
  rect(260,370,20,legHeight);

  //feet
  fill(beakColor);
  triangle(180,420,240,440,180,470);
  triangle(180+41,430,240+41,450,180+41,480);
  line(180,440,200,440);
  line(180,450,200,450);
  line(180+41,440+20,200+41,440+20)
  line(180+41,450,200+41,450);

  fill(255);

  //tail feathers
  fill(bodyColor);
  triangle(360,250,410,240,385,280);


}

function mousePressed(){
  beakColor = "purple";
  pupilX = 102;


}

function mouseReleased(){
  pupilX = 98;
}
