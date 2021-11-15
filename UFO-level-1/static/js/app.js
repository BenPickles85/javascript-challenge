// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
// var dateInput = d3.select("#datetime");
var button = d3.select("#filter-btn");
var form = d3.select("form")

// Create event handlers for clicking the button or pressing the enter key
button.on("click", renderTable);
form.on("submit", renderTable);

// Complete the event handler function for the form
function renderTable() {

    tableData.forEach((sighting) => {
            
        // Create table
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
    });

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Obtain input date and assign as variable
    var inputDate = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputDate.property("value");

    console.log(inputDate);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    // Render full table if date value cleared
    if (filteredData.length == "0") {
        filteredData = tableData
    };

    // Check data is populating
    console.log(filteredData);

    // Clear anything in the table
    tbody.html("");
    
        filteredData.forEach((sighting) => {
            
            // Create table
            var row = tbody.append("tr");

            Object.entries(sighting).forEach(([key, value]) => {
                    var cell = row.append("td");
                    cell.text(value);
                })
        });
};

renderTable();

