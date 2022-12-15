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
  
  // use a for loop to go through the percentages, convert them into angles in radians, and then save those angles into the list angles. 
  // The percent goes from 0 to 100 and the circle in radian goes from 0 to "2*PI"
  
  
  // Use another for loop to go through the angle list, and use the arc() function to draw a PIE piece for each angle.  Have one section start where the other ends (this might be easier to have a variable for "startAngle" and "endAngle") Have the color change as you draw each sector. 
  
  
  
  // Create a key with a square of each color and a lable of the group it matches.  You should use the same colors as the graph.
  // Add a title
}

function draw() {
 // background(220);
}