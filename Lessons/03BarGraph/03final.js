let data;

function preload(){
  data = loadTable("Animals.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 400);
  background(220);
  let numRows = data.getRowCount();
  let animal = data.getColumn('Animal')
  let cute = data.getColumn('Cuteness')
  let legs = data.getColumn('Legs')
  
  print(cute)
  for(let i = 0; i<numRows;i++){
    textAlign(RIGHT);
    fill(0)
    text(animal[i],100,100+(i*20))
    
    if(legs[i]==4){
      fill("blue")
    }else if (legs[i]==2){
      fill("green")
    }else{
      fill("red")
    }
  
    
    let mapCute = map(cute[i],0,10,0,200)
    rect(110,90+(i*20),mapCute,10)
  }
  fill(0)
  line(110,70,110,230)
  line(110,230, 350, 230)
  for(let i=0; i<11;i++){
    textAlign(CENTER);
    text(i, map(i,0,10,110,310),250)
  }
  text("Cuteness",220,270)
}

function draw() {
  //background(220);
  
}