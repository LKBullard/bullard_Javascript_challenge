// from data.js
var tableData = data;

// D3 will select the body of the txt in index.html
var tbody = d3.select("tbody")

// Loop through data & put in the rows to the body
tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        console.log(key, value)
        var cell = row.append("td").text(value);
    });
});

// Select button & create function to click 
var button = d3.select("#filter-btn");

button.on("click", function(){
    // Select element to put in
    var inputElement = d3.select(".form-control");
    var inputDate = inputElement.property("value");
    console.log(inputDate)
    // Filter Data
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    console.log(filteredData);

    // Select table body to use to put table rows & cells in
    var tbody = d3.select("tbody")
    tbody.html("");

    // Loop through filtered data in order to input rows & cells for every object
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});