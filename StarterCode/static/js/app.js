// from data.js
var tableData = data;

var table = d3.select("#ufo-table");

var button = d3.select("#filter-btn");

button.on("click", function() {

    //makes sure the page doesn't refresh
    d3.event.preventDefault();

    //removes the body of the table then makes a new tbody
    //so that each button click is only the data from one date
    d3.select("tbody").remove();
    var tbody = table.append("tbody");

    var ufoData = [];

    //get the user's date they picked
    var date = d3.select("#datetime").property("value");
    if(date){
        ufoData = tableData.filter(ufo => ufo.datetime == date);
    }
    else{
        ufoData = tableData;
    }
    
    var city = d3.select("#city").property("value").toLowerCase();;
    if(city){
        ufoData = ufoData.filter(ufo => ufo.city == city);
    }
    else{
        if(!ufoData){
            ufoData = tableData; 
        }
    }
    
    var state = d3.select("#state").property("value").toLowerCase();;
    if(state){
        ufoData = ufoData.filter(ufo => ufo.state == state);
    }
    else{
        if(!ufoData){
            ufoData = tableData;
        }
    }

    var country = d3.select("#country").property("value").toLowerCase();;
    if(country){
        ufoData = ufoData.filter(ufo => ufo.country == country);
    }
    else{
        if(!ufoData){
            ufoData = tableData;
        }
    }

    var shape = d3.select("#shape").property("value").toLowerCase();;
    if(shape){
        ufoData = ufoData.filter(ufo => ufo.shape == shape);
    }
    else{
        if(!ufoData){
            ufoData = tableData;
        }
    }
    
    ufoData.forEach(function(alienData) {
        var row = tbody.append("tr");
        Object.entries(alienData).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});