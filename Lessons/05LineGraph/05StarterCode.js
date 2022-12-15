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
  
  /
   // pick a lower corner for your graph, draw a vertical and horizontal axis meeting at that corner.  You will use these number to line up scales for your data points. 
      
      
  // use a for loop to go through the data and scaling each data point using the map function. The years go from 1880 to 2016 and should be converted using map() to something that will fit on your graph. The temp goes from -0.5 to 1.  Save each value in the list that goes with each. 
 
// use a for loop to draw a line connecting one data points (year,temp) to the next (year,temp), continue this for all of the data points. hint: you will have to adjust for the last point in the set

// use the same scale that you mapped the points to, use it to draw a scale for the vertical and horizontal axis      
}

function draw() {
  //background(220);
}