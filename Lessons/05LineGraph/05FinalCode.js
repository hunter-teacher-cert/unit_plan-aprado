let data;

function preload(){
  data = loadTable("GSTemp.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 400);
  background(220);
  let numRows = data.getRowCount();
  let year = data.getColumn('Year')
  let tempDiff = data.getColumn('Difference from mean')
  let yearScaled = []
  let tempScaled = []
  for(let i=0; i<year.length; i++){
    yearScaled.push(map(year[i],1880,2016,50,350))
    tempScaled.push(map(tempDiff[i],-0.5,1,250,100))
  }
  line(50,200,350,200)
  line(50,100,50,250)
  for(let i=0; i<year.length-1; i++){
    line(yearScaled[i],tempScaled[i],yearScaled[i+1],tempScaled[i+1])
  }
  textSize(8)
  for(let i = 1880; i<2020;i +=20){
    text(i, map(i,1880,2016,50,350),270)
  }
  for(let i = -0.5; i<1.5;i +=0.5){
    text(i, 30,map(i,-0.5,1,250,100))
  }
  textSize(12)
  text("Average global surface temperature difference from the mean",10,40)
  print(year)
  print(tempDiff)
  print(yearScaled)
}

function draw() {
  //background(220);
}