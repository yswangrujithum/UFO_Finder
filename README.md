# UFO Finder
![UFO](Images/UFO.jpeg)

This project is focusing on filtering data table from user's input. The data is available in the form of the dictionary. Our assignment is to load the data onto the webpage as well as create the filtering function in response to the users' requests. 
## Getting Started
The following programs and the information are required on your local machine. 
### Required program
* D3.js

```src="https://d3js.org/d3-selection.v1.min.js"```
### Available Resources
* data.js
### Starting Code
* index.html
* app.js
## Project Breakdown 
### Load the available information onto the webpage. 
Assigning the data table as ```originalTable```
loop through each data dictionary and append them onto the webpage. 

```columns.forEach(column => row.append("td").text(sight[column])```
![original](Images/OriginalTable.jpeg)
### Assign variables
These variables will look for the particular tags or ids in the html page and "anchor" onto them. 
d3.select allows us to transform the document object model (DOM) 
```var tbody = d3.select("tbody");```

### User input and webpage responsiveness 
* Assigning the function to ```button.on("click", ()```

* Receive the user's inputs and assign to the variable 

```var inputDate = dateInfo.property('value').trim();```
* Filter the data table to match user's input

```var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);```

* Display the final output to the HTML Page 
use if...else statement to loop through every single data row. 

```if (webData.filterData.length !== 0){originalTable(filterData)};``` 
![filter](Images/filterTable.jpeg)
* Display the error message if the data is not found. 

```tbody.append('tr').append('td').text("Your input doesn't locate in the data");```

## Author
Yanin Swangrujithum 
