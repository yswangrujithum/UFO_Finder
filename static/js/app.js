// from data.js
var tableData = data;

// Assign variable
var tbody = d3.select("tbody");
var dateInfo = d3.select('#datetime');
var cityInfo = d3.select('#city');
var button = d3.select("#filter-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];




// Insert data to the HTML
var originalTable = (dataInput) => {
    dataInput.forEach(sight => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append("td").text(sight[column])
        )    
    });
}

originalTable(data);
  

// Take the input from user and search through the data. 


button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = dateInfo.property('value').trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    console.log(filterDate);
    
    tbody.html("");
    let webData = {filterDate};
    if (webData.filterDate.length !== 0){
        originalTable(filterDate);
    }
    else {
        tbody.append('tr').append('td').text("Your input doesn't locate in the data");
    }

})


