
const Engine = Matter.Engine;
const  World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

var engine,world; 

var particles=[];
var plinkos=[];



function setup() {
  var canvas = createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  
  g1 = new ground(120,693,800,10);
  div0 = new division(05,620,10,150);
  div1 = new division(100,620,10,150);
  div2 = new division(200,620,10,150);
  div3 = new division(300,620,10,150);
  div4 = new division(400,620,10,150);
  div5 = new division(495,620,10,150);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  
  
}
 


function draw() {

  background("pink"); 

  if (frameCount % 30 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  Engine.update(engine);
   
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  

    
  
  
  
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  

  g1.display();
  div0.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();




  
  drawSprites();
}
