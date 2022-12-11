# Lesson 1
## Intro to Data Science, importing data into p5

### Objective
- Brief introduction of what is "data science".
- Understand the different file types for data sets.
- Viewing data in spreadsheets and saving as .csv
- Importing data sets into p5
- accessing the p5 data by column, rows, headers,
  
### Standards
9-12.CT.7 Design or remix a program that utilizes a data structure to maintain changes to related pieces of data.  

### Resources
File Types: https://open.manchester.gov.uk/open/homepage/12/data_formats 

Slide Deck:
https://docs.google.com/presentation/d/1ohMUGJz7rXY9S_yrUz0BZovShrxZCHiW8yhSS2Asfck/edit#slide=id.g1b229c06801_0_81 

State Data Spreadsheet: https://docs.google.com/spreadsheets/d/1241xpUus1rFffiF-1-MHlLfjYJzX27taAkmdWZIntgs/edit#gid=1105489287 

p5 Final code: 
https://editor.p5js.org/ajprado@gmail.com/sketches/lDLyKD-A_ 

### Activity
- Lesson starts with an introduction of what is "data science".
- Slides and short video explaining data science.
- Brief class discussion, asking students about their thoughts and questions they have.
- Give students access to the google sheet file of state data (statedata.csv), go over it in google sheets.
- Show them how to save the file as a .csv
- Go over how to load the file into p5 using preload() and loadTable() functions.  See the slides and final code for examples.
- Go over data.columns  : it gets the column headers, categories
- data.getRowCount()  and data.getColumnCount() can find the number of each
- data.getColumn(0) or data.getColumn("Population") will return the data of a single column.
- Give students time to explore these functions.   

### Assessment/Reflection
- Students will submit their finished p5 project
- This is mostly a code-along so it's just to make sure students have the ability to load data sets into p5
