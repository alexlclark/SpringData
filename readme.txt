Time to pirate top selling albums.

I’ll possibly be implementing a more thorough version of this into my master’s project if I can get enough data points without going insane.

Method:

I manually created a dataset of the top 10 albums of 2014 and manually inserted their album name, artist name, release date, and date they were released on waffles.fm, the world’s largest private torrent tracker for music.

I combined the albumName and albumArtist in excel for “album”, used in final data code.

I subtracted the days between the waffles.fm release and the official release date for each album to create a daysDiff number. 

I discovered that most of the top albums from 2014 were not released in 2014.

This created several problems, the most troublesome being that some early torrent releases on waffles.fm have been removed for older albums, as the result of a better version being uploaded in the mean time, or a renaming or update. The most accurate examples of daysDiff were for albums released in the past 6 months.

There was no way to retrieve the original dates of the album.

To solve this, I created a new label, daysDiffMaxSev, which capped the time between album release and it’s pirated version release to seven days. Alternately, this could have been set to 0 days if public trackers were also included, as EVERY major album is pirated on the day of its scene release in some form, but not with the quality of the waffles.fm releases I can track.

For the final version of this chart, I will be using only albums released in 2014, and including all albums which entered the Billboard top 10 for a minimum of 1 week in 2014. I’ve begun this on the second tab of the workbook included in the documentation.



Implementation:

I originally used the first chart page to create a dataset including ALL properties for the data I collected. After changing the data types to strings for all headers, dates for the releaseDate and waffleDate, and numbers for daysDiff and daysDiffMaxSev, I viewed the result as a bar chart. I decided that histograms were definitely the way to go.

Found examples of code to set an image to maxwidth.
Created a function within histogram to resize the chart to the maxwidth of the page. 
This required the removal of the exact dimensions from the .html

To center the image, I attempted to make a div with center alignment, but was unable to do so.
Used html <center> tag to center logo image.
Used padding to include space between image and chart. This resulted in a skewed chart size, so lowered padding to 30px.
Set maxwidth of logo image directly in image attributes to 75%.


Options:

From scripts.js

var options = {
		title : 'Time between album release and pirated, private BitTorrent tracker release', // main title
		legend : {
			position : 'none' // position is left aligned for now, no specification
		},colors: ['#e7711c'], // color of bars
		
		  // below, for h axis, the title is the tile along the axis. textStyle is noting the color, name of the font and also the fontsize. The same is done for v axis.
		 hAxis: { title: "Days from album release to torrent appearance on waffles.fm", textStyle: {color: '##32333e', fontName: 'arial', fontSize: 10} },
 vAxis: { title: "Number of albums in range", textStyle: {color: '#32333e', fontName: 'arial', fontSize: 10} },
	};
//This is where where we set the chart type as a histogram
	var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
	chart.draw(data, options);
	function resize () {
    // change dimensions if necessary
    chart.draw(data, options);
} //this if function actually determines when the chart needs to be resized to fit the width decided in styles.css, and resizes as the page is resized.
if (window.addEventListener) {
    window.addEventListener('resize', resize);
}
else {
    window.attachEvent('onresize', resize);
}
}




from styles.css:


This sets link preferences and attributes:
a {
	color: gray; // link color
	text-decoration: none; // nothing special
}
a:visited {
	color: #1a5952; //visited color
}
a:hover, {
color: #0599c2; // color on hover
text-decoration: underline; // yup, were underlining when we hover
}

This is the framing to keep the alignment as center. It only works when the function in scripts.js is implemented
#chart_div {
	padding: 30px;
	width: 60%;
	height: 100%;
	margin: 0 auto;
}





Full dataset created:
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


Unused/ Reference:

This is the original code from the FRED dataset.

From Scripts.js:

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



