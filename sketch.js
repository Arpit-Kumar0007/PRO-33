var backgroundimg
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var ice = [],snowflake1
function setup() {

  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  if(frameCount%275===0){
    for(var i=0;i<100;i++){
      ice.push(new Snow(random(0,1350),random(0,50)))
    }
  }

}

function draw() {
  background(backgroundimg);  
  drawSprites();
  Engine.update(engine)
  for(var i = 0;i < 100; i++)
  { ice[i].display(); ice[i].changePosition(); }
}
function preload(){
  backgroundimg = loadImage("snow2.jpg")
}