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
