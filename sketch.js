const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var pedrona, bolacha, fero;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    pedrona = new Rock(1000, 590, 70,70);
    bolacha = new Rubber(900, 450,70);
    fero = new Iron(800, 590, 80, 100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    pedrona.display();  
    bolacha.display();
    fero.display();
}