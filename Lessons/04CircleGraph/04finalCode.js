let data;

function preload(){
  data = loadTable("RaceUS.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 400);
  background(220);
  let numRows = data.getRowCount();
  let race = data.getColumn('Race')
  let percent = data.getColumn('Percent')
  print(race)
  print(percent)
  let angles = []
  for (let i=0; i<percent.length;i++){
    angles.push(map(percent[i],0,100,0,2*PI))
  }
  let color= 20;
  let start = 0
  let stop;
  for(let i=0; i<angles.length; i++){
    stop = start + angles[i]
    fill(color,30,30)
    arc(200,120,200,200,start,stop,PIE)
    color += 40
    start = stop;
    rect(30+(i*80),250,20,20)
    fill(0)
    textAlign(CENTER,TOP)
    textSize(12)
    text(race[i],35+(i*80),280)
  }
  textSize(30)
  text("Races in US", 200,350)
  print(angles)
}

function draw() {
 // background(220);
}