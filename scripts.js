<script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        
        
  ["album","daysDiffMaxSev"],
  ["Soundtrack - Frozen",7],
  ["Beyonce - Beyonce",7],
  ["Taylor Swift - 1989",-3],
  ["One Direction - Midnight Memories",-7],
  ["Eminem - The Marshall Mathers LP 2",7],
  ["Lorde - Pure Heroine",-1],
  ["Luke Bryan - Crash My Party",0],
  ["Katy Perry - Prism",0],
  ["Garth Brooks - Blame It All On My Roots: Five Decades Of Influences",7],
  ["Florida Georgia Line - Here's To The Good Times",2]

/*  
  Full chart below
  ["chartPos","albumName","albumArtist","album","releaseDate","waffleDate","daysDiff","daysDiffMaxSev"],
  [1,"Frozen","Soundtrack","Soundtrack - Frozen","11/25/13","12/2/13",7,7],
  [2,"Beyonce","Beyonce","Beyonce - Beyonce","12/13/13","12/20/13",7,7],
  [3,"1989","Taylor Swift","Taylor Swift - 1989","11/27/14","11/24/14",-3,-3],
  [4,"Midnight Memories","One Direction","One Direction - Midnight Memories","11/25/13","11/18/13",-7,-7],
  [5,"The Marshall Mathers LP 2","Eminem","Eminem - The Marshall Mathers LP 2","9/20/13","10/31/13",41,7],
  [6,"Pure Heroine","Lorde","Lorde - Pure Heroine","9/27/13","9/26/13",-1,-1],
  [7,"Crash My Party","Luke Bryan","Luke Bryan - Crash My Party","8/13/13","8/13/13",0,0],
  [8,"Prism","Katy Perry","Katy Perry - Prism","11/17/13","11/17/13",0,0],
  [9,"Blame It All On My Roots: Five Decades Of Influences","Garth Brooks","Garth Brooks - Blame It All On My Roots: Five Decades Of Influences","11/28/13","3/14/14",106,7],
  [10,"Here's To The Good Times","Florida Georgia Line","Florida Georgia Line - Here's To The Good Times","12/4/12","12/6/12",2,2]
*/
          ]);

        var options = {
          title: 'Lengths of dinosaurs, in meters',
          legend: { position: 'none' },
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>

/*
<!-- 
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

for (var i=0;/*spacesdont  matter in for loopsi<albumData.observations.length; i++){ //all for loops ever will appear like this. start, length,

var itemArray=[];
itemArray.push(albumData.observations[i].album);//adding date and value to item array (the small array)
itemArray.push( Number(albumData.observations[i].daysDiffMaxSev)); //noted itemarray as number


arraysFat.push(itemArray); //add my little array to the larger one, arraysFat


}
// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'album');
data.addColumn('number', 'daysDiffMaxSev');
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
}-->*/