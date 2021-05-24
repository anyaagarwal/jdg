const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Rcx2(600,height,1200,40)
    
    stone = new Rcx3(700,320,277,100);
    iron = new Rcx4(300,350);
    rubber=new circle(900,450,170);
    hammer = new Hitter(10,100);

    rubber1 = new Rub(505,450,10);
    rubber2 = new Rub(510,450,10);
    rubber3 = new Rub(515,450,10);
    rubber4 = new Rub(520,450,10);
    rubber5 = new Rub(525,450,10);
    rubber6 = new Rub(515,445,10);
    rubber7 = new Rub(520,445,10);
    rubber8 = new Rub(525,445,10);
    rubber9 = new Rub(530,445,10);
    rubber10 = new Rub(535,445,10);



}

function draw(){
    background("pink");
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();

    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
}