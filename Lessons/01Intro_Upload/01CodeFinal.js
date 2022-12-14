//Adam Prado
//Lesson 1, Intro to data science
//best used throught p5 editor, otherwise you will need to install the p5 package through the HTMLS
//https://editor.p5js.org/ajprado@gmail.com/sketches/lDLyKD-A_ 

//creates a data to store the table of data
let data;

// use preload() and loadTable("filename","csv","header")
function preload(){
  data = loadTable("statedata.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 400);
  background(220);
 
  //returns the headers for each column
  let categories = data.columns
  console.log(categories)
  
  //returns the number of rows, ammount of data
  let num = data.getRowCount()
  console.log(num)
  
  //returns number of columns , caregories
  let cols = data.getColumnCount()
  console.log(cols)
  
  //returns data in the 0th (first) column
  let stNames = data.getColumn(0)
  console.log(stNames)
  
  // returns data in the column titled "Population"
  let populations = data.getColumn("Population")
  console.log(populations)
  
}

function draw() {
  //background(220);
}