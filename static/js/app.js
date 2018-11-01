// from data.js
var tableData = data;

// Assign variable
var tbody = d3.select("tbody");
var dateInfo = d3.select('#datetime');
var cityInfo = d3.select('#city-info');
var stateInfo = d3.select('#state-info');
var countryInfo = d3.select('#country-info');
var shapeInfo = d3.select('#shape-info');
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
    // received input from users. 
    var inputDate = dateInfo.property('value').trim();
    var inputCity = cityInfo.property('value').toLowerCase().trim();
    var inputState = stateInfo.property('value').toLowerCase().trim();
    var inputCountry = countryInfo.property('value').toLowerCase().trim();
    var inputShape = shapeInfo.property('value').toLowerCase().trim();

    // filter the data table to match user information. 
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    var filterState = tableData.filter(tableData => tableData.stateInfo === inputState);
    var filterCountry = tableData.filter(tableData => tableData.country === inputCountry);
    var filterShape = tableData.filter(tableData => tableData.shape === inputShape);
    var filterData = tableData.filter(tableData => tableData.datetime === inputDate || tableData.city === inputCity
    || tableData.state === inputState || tableData.country === inputCountry
    || tableData.shape === inputShape);
    console.log(filterData);
    
    // display the final output to the html page. 
    tbody.html("");
    let webData = {filterDate, filterCity, filterState, filterCountry, filterShape, filterData};
    if (webData.filterData.length !== 0){
        originalTable(filterData);
    }
    else {
        tbody.append('tr').append('td').text("Your input doesn't locate in the data");
    }

})


