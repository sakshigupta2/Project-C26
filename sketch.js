const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1, ball2, ball3, ball4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ball1 = new Ball(200,70,30);
    ball2 = new Ball(350,110.30);
    ball3 = new Ball(400,150,30);
    ball4 = new Ball(450,100,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(ball2.body.position.x);
    console.log(ball2.body.position.y);
    console.log(ball2.body.angle);
    fill("green");
    rect (2,380, 800,30);
    fill("red");
    rect (80,height-100, 100,20);
    fill("red");
    rect (20,height-40, 100, 20);
    fill("red");
    rect (20,height-60, 100,20);
    fill("black");
    ellipse (70,height-60,50);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
   
}