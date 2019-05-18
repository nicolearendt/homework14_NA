// from data.js
var tableData = data;

console.log(tableData);

var table = d3.select("#ufo-table");

var button = d3.select("#filter-btn");

button.on("click", function() {

    //makes sure the page doesn't refresh
    d3.event.preventDefault();

    //removes the body of the table then makes a new tbody
    //so that each button click is only the data from one date
    d3.select("tbody").remove();
    var tbody = table.append("tbody");
    
    //get the user's date they picked
    var date = d3.select("#datetime").property("value");
    
    data.forEach(function(alienData) {
        if(alienData.datetime == date){
            var row = tbody.append("tr");
            Object.entries(alienData).forEach(function([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        }
    });

});
