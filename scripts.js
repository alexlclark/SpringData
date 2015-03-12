var myTextStyle = {
color: 'yellow', 
fontName: 'arial', 
fontSize: 10,};


google.load('visualization', '1.0', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

//NEW - Use a for loop to  make an array of arrays out of relevant JSON data
var arraysFat = [] //created big empty array to hold smaller date/val arrays0

for (var i=0;/*spacesdont  matter in for loops*/i<jsonFREDData.observations.length; i++){ //all for loops ever will appear like this. start, length,

var itemArray=[];
itemArray.push(jsonFREDData.observations[i].date);//adding date and value to item array (the small array)
itemArray.push( Number(jsonFREDData.observations[i].value)); //noted itemarray as number


arraysFat.push(itemArray); //add my little array to the larger one, arraysFat


}
// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'date');
data.addColumn('number', 'value');
data.addRows(arraysFat); // this has to equal the array at the top (the fat one)

// Set chart options
var options = {'title':'Litres of Vodka Exported by Year',
'width':800,
'height':1700,
hAxis: { gridlines: {color: '#fcd116', count: 4} },
vAxis: { textStyle: {color: '#fcd116', fontName: 'arial', fontSize: 10} },
backgroundColor: "transparent",};

options.hAxis.textStyle = myTextStyle;
console.log(options.height)

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}