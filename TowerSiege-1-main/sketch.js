const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var  slingshot;
var polygon_Img


function preload() {
    //polygon_Img= loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground();
    stand1=new  Stand(380,300,270,10)
    stand2= new Stand(700,200,200,10);

   //level two
   block8= new Block(330,235,30,40);
   block9= new Block(360,235,30,40);
   block10= new Block(390,235,30,40);
   block11= new Block(420,235,30,40);
   block12= new Block(450,235,30,40);

   //level three
   block13= new Block(360,195,30,40);
   block14= new Block(390,195,30,40);
   block15= new Block(420,195,30,40);
    

   //top
   block16= new Block(390,155,30,40);
  
   //polygon with slings
   polygon=Bodies.circle(50,200,20);
   world.add(world,polygon);

   slingshot= new slingshot(this.polygon,{x:100,y:200});
   
}
function draw(){
  background("black")  
  engine.update(engine);

  //ground.display();
  strokeWeight(2);
  stroke(15);

  stand1.display();
  stand2.display();

  
  stroke(15);
  Fill("orange")
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block1.display();

   stroke(15);
  Fill("blue")
  block13.display();
  block14.display();
  block15 .display();

  stroke(15);
  Fill("yellow")
  block16.display();

  text("drag the line and hit the crazy boxes",600,250)

  imageMode(CENTER)
  image(polygon_Img,polygon.position.x,polygon.position.y,40,40);



}

function mouseDragged(){
    Matter.body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingshot.fly();
}
