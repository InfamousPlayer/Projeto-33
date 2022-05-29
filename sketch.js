const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var slingShot;
var polygon_img;

var gameState = "onSling";

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
  

  //fileira 1
  block1 = new Block(510,386,30,40);
  console.log(block1);
  block2 = new Block(540,386,30,40);
  block3 = new Block(570,386,30,40);
  block4 = new Block(600,386,30,40);
  block5 = new Block(630,386,30,40);
  block6 = new Block(660,386,30,40);
  block7 = new Block(690,386,30,40);
  block8 = new Block(720,386,30,40);
  block9 = new Block(750,386,30,40);
  block10 = new Block(780,386,30,40);
  block11 = new Block(480,386,30,40);
  block12 = new Block(450,386,30,40);
  block13 = new Block(420,386,30,40);

  //fileira 2
  block14 = new Block(450,326,30,40);
  block15 = new Block(480,326,30,40);
  block16 = new Block(510,326,30,40);
  block17 = new Block(540,326,30,40);
  block18 = new Block(570,326,30,40);
  block19 = new Block(600,326,30,40);
  block20 = new Block(630,326,30,40);
  block21 = new Block(660,326,30,40);
  block22 = new Block(690,326,30,40);
  block23 = new Block(720,326,30,40);
  block24 = new Block(750,326,30,40);

  //fileira 3
  block25 = new Block(480,260,30,40);
  block26 = new Block(510,260,30,40);
  block27 = new Block(540,260,30,40);
  block28 = new Block(570,260,30,40);
  block29 = new Block(600,260,30,40);
  block30 = new Block(630,260,30,40);
  block31 = new Block(660,260,30,40);
  block32 = new Block(690,260,30,40);
  block33 = new Block(720,260,30,40);

  //fileira 4
  block34 = new Block(510,200,30,40);
  block35 = new Block(540,200,30,40);
  block36 = new Block(570,200,30,40);
  block37 = new Block(600,200,30,40);
  block38 = new Block(630,200,30,40);
  block39 = new Block(660,200,30,40);
  block40 = new Block(690,200,30,40);

  //fileira 5
  block41 = new Block(540,140,30,40);
  block42 = new Block(570,140,30,40);
  block43 = new Block(600,140,30,40);
  block44 = new Block(630,140,30,40);
  block45 = new Block(660,140,30,40);

  //fileira 6
  block46 = new Block(570,80,30,40);
  block47 = new Block(600,80,30,40);
  block48 = new Block(630,80,30,40);

  //fileira 7
  block49 = new Block(600,20,30,40);

  polygon = Bodies.circle(90,200,20);
  World.add(world,polygon);
   
  slingShot = new SlingShot(this.polygon,{x:150,y:200});
}

function draw() {
  background(255,255,255);  

  ground.display();
  
  
  strokeWeight(2);
  stroke(15);
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("red");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  fill("turquoise");
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  fill("blue");
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  fill("black");
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  fill("white");
  block46.display();
  block47.display();
  block48.display();
  fill("purple");
  block49.display();
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && this.polygon.speed < 5){
    Matter.Body.setPosition(this.polygon,{x:150, y:200});
    slingShot.attach(this.polygon);
  }
}