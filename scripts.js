google.load("visualization", "1", {
	packages : ["corechart"]
});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([["Album", "Days To Pirate"], ["Soundtrack - Frozen", 7], ["Beyonce - Beyonce", 7], ["Taylor Swift - 1989", -3], ["One Direction - Midnight Memories", -7], ["Eminem - The Marshall Mathers LP 2", 7], ["Lorde - Pure Heroine", -1], ["Luke Bryan - Crash My Party", 0], ["Katy Perry - Prism", 0], ["Garth Brooks - Blame It All On My Roots: Five Decades Of Influences", 7], ["Florida Georgia Line - Here's To The Good Times", 2]

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
		title : 'Time between album release and pirated, private BitTorrent tracker release',
		legend : {
			position : 'none'
		},colors: ['#e7711c'],
		 hAxis: { title: "Days from album release to torrent appearance on waffles.fm", textStyle: {color: '#0673b2', fontName: 'arial', fontSize: 10} },
 vAxis: { title: "Number of albums in range", textStyle: {color: '#0673b2', fontName: 'arial', fontSize: 10} },
	};

	var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
	chart.draw(data, options);
	function resize () {
    // change dimensions if necessary
    chart.draw(data, options);
}
if (window.addEventListener) {
    window.addEventListener('resize', resize);
}
else {
    window.attachEvent('onresize', resize);
}
}

