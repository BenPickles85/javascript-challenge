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

    // Prevent the page from refreshing
    

    tableData.forEach((sighting) => {
            
        // Create table
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
    });

    d3.event.preventDefault();
    
    // Obtain input date and assign as variable
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city")
    var inputState = d3.select("#state")
    var inputCountry = d3.select("#country")
    var inputShape = d3.select("#shape")
    
    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountryValue);
    console.log(inputShapeValue);

    var filteredData = tableData.filter((sighting) => {
        
        var matchesDate = false;
        var matchesCity = false;
        var matchesState = false;
        var matchesCountry = false;
        var matchesShape = false;

        if (inputDateValue.length == '0' || sighting.datetime === inputDateValue) {
            matchesDate = true;
        }

        if (inputCityValue.length == '0' || sighting.city.toLowerCase().includes(inputCityValue)) {
            matchesCity = true;
        }

        if (inputStateValue.length == '0' || sighting.state.toLowerCase().includes(inputStateValue)) {
            matchesState = true;
        }

        if (inputCountryValue.length == '0' || sighting.country.toLowerCase().includes(inputCountryValue)) {
            matchesCountry = true;
        }

        if (inputShapeValue.length == '0' || sighting.shape.toLowerCase().includes(inputShapeValue)) {
            matchesShape = true;
        }

        return matchesDate && matchesCity && matchesState && matchesCountry && matchesShape;

    });

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


