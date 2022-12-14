//Adam Prado
//Lesson 2, Intro to univariate data
//best used throught p5 editor, otherwise you will need to install the p5 package through the HTMLS

//https://editor.p5js.org/ajprado@gmail.com/sketches/oJiqObcvB

let data;

function preload(){
  data = loadTable("FishLength.csv","csv","header")
  
}

function setup() {
  createCanvas(400, 400);
  background(220);
 
  let lengths = data.getColumn(0)
  //print(lengths)
  print(mean(lengths))
  print(median(lengths))
  let countBig = 0
  for(let i=0;i<lengths.length;i++){
    if(lengths[i]>30){
      countBig++
    }
  }
  print("number of Big Fish is: "+ countBig)
    
  let countBetween = 0
  for(let i=0;i<lengths.length;i++){
    if(lengths[i]>20 && lengths[i]<30){
      countBetween++
    }
  }
  print("number of fish between 20 and 30: "+ countBetween)
  
}


function draw() {
  background(220);
}

function mean(list){
  let sum = 0;
  for(let i=0; i<list.length;i++){
    sum = sum + (list[i]*1)
  }
  return sum/list.length
}

function median(list){
  sorted = list.sort(function(a, b){return a-b});
  return sorted[Math.floor(list.length/2)]
}

