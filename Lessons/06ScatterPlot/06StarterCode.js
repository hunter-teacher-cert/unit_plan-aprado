// Best viewed by using the link below
//https://editor.p5js.org/ajprado@gmail.com/sketches/_FUQbHlCS 

let data;

function preload(){
  data = loadTable("realEstate.csv","csv","header")
  
}

function setup() {
  createCanvas(450, 450);
  background(220);
  let numRows = data.getRowCount();
  let age = data.getColumn(2)
  let price = data.getColumn(4)
  // create a variable and get the data for the other columns of data
  
 
  textSize(28)
  // select a different pair of variables to compare other than age of home and price per sqft.
  text("Age and Price of Homes",50,50)
  strokeWeight(1)
  line(98,98,98,350)
  line(98,350,400,350)
  textSize(14)
  text("Price of Home/ sqft",200,400)
  text("Age of home",10,200)
  strokeWeight(5)
  
  // edit this code to graph the new data set
  for(let i=0; i<age.length;i++){
     point(map(price[i],0,1700,100,400),map(age[i],0,45,350,100))
  }
  textSize(10)
  for(let x=0; x<1800;x+=250){
    text(x, map(x,0,1700,100,400), 370)
  }
  //Challenge:  can you display 4 different scatter plots of the same data set at once?
}
function draw() {
 // background(220);
}