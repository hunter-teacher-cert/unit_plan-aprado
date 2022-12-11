//Adam Prado
//Lesson 2, Intro to univariate data
//best used throught p5 editor, otherwise you will need to install the p5 package through the HTMLS
//https://editor.p5js.org/ajprado@gmail.com/sketches/tZhxLE3cp 
let data;

//loads data for fish lengths
function preload(){
  data = loadTable("FishLength.csv","csv","header")
}

function setup() {
  createCanvas(400, 400);
  background(220);
 
    // create a variable for the lengths and use .getColumn(0) to save the data
 
  // at the bottom of the program finish the mean() function
  
  // run the mean function with your data set (should return 26.028)
  
  // create a function to find the range of values
 
  // create scrpit counts the number of fish over 30 
  // hint: go through the list with a for loop and add to a count variable if the value meets the condition
  // print the result as a statement
 
  //counts the number of fish between 20 and 30   
   // similar to the previous one but will need to use && (or nested conditions)
  
  //create your own script to find fish that meet some criteria
  
  //CHALLENGE
  //Create a function to find the 
}


function draw() {
  background(220);
}

//takes a list of numbers and returns the mean
function mean(list){
  

}

//takes a list of numbers and returns the median
function median(list){
  // this line of code will sort the numbers in the list, then you will need to find the middle value 
   sorted = list.sort(function(a, b){return a-b});
  // technically for data sets with even # of values you should average the middle two values for the median, but for today if you return either value it will be close enough
 
  
}
