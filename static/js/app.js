// from data.js
var tableData = data;
var submit = d3.select('#filter-btn');
// Insert data to the HTML
function originalTable(){
    var tbody = d3.select("tbody");
    data.forEach(function(tableData) {
        // console.log(tableData);
        var row = tbody.append('tr');
        Object.entries(tableData).forEach(function([key,value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    }); 
};

// Take the input from user and search through the data. 

// var submit = d3.select('#filter-btn');

submit.on('click',function() {
    
    d3.event.preventDefault();
    var inputText = d3.select('#datetime');
    var inputValue = inputText.property("value");
    var filterData = tableData.filter(dateData => dateData.datetime === inputValue);
    var tbody = d3.select('tbody');
    filterData.forEach(function(filterData) {

        console.log(filterData);
        var row = tbody.append("tr");
        Object.entries(filterData).forEach(function([key,value]){
            console.log(key,value);
            // tbody.clear();
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
originalTable();












