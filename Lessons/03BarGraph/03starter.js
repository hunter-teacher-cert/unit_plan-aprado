let data;

//this loads the table into the variable "data"
function preload(){
  data = loadTable("Animals.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 400);
  background(220);
  let numRows = data.getRowCount();
  //create variables for each column of data
 
  
   // pick a lower corner for your graph, draw a vertical and horizontal axis meeting at that corner.  You will use these number so line up the bars and the lables and scales
  
  
  //Set up a for loop to draw a rectangle for animals cuteness.  Should start at the vertical line and extend horizontally depending on the cuteness level.
  // the map() function will allow you to scale the number from 0 to 10, to something more like 50 to 350 so it will fill up your graph but still be proportional.  

// Use another for loop to draw a numbered scale, you should use a map very similar to when you created the rectangle, you want the bars and scale to match up.
  
// Use another for loop to add the animal lables along the vertical axis
  
  // CHALLENGE:  Have the bars color depend on the number of legs for each animal, ex:  all 4 legged animals would have one color, 2-legged another,...
}

function draw() {
  //background(220);
  
}