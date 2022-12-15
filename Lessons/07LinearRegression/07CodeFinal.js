//link to code: https://editor.p5js.org/ajprado@gmail.com/sketches/b8YzI6G7c 

let data;

function preload(){
  data = loadTable("animalBrainBody.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 450);
  background(220);
  let numRows = data.getRowCount();
  let name = data.getColumn(0)
  let body = data.getColumn(1)
  let brain = data.getColumn(2)
  console.log(brain)
  textSize(28)
  text("Body/Brain size of animals",50,50)
  
 stroke("blue")
  findLinearReg()
  stroke("black")
  strokeWeight(1)
  line(98,98,98,350)
  line(98,350,350,350)
  textSize(14)
  text("Body in kg",200,400)
  text("Brain in g",10,200)
  strokeWeight(5)
  for(let i=0; i<name.length;i++){
     point(map(body[i],0,521,100,350),map(brain[i],0,665,350,100))
  }
  
}
function draw() {
  //background(220);
}

function findLinearReg(){
  // just estimate the line for now, we will talk more about how to find this exactly later. 
}