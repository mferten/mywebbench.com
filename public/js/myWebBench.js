'use strict';

/*
 * when the window is loaded: set the page and add the events
 */

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"];
var currentTime, hours, minutes, seconds, day, dayNumber, month, fullyear;
var imageSources = [];
var currentCarouselImage = 0; // if 0 is not assigned: It becomes "undefined" and NaN in setCarouselImage function.

// set the date and time
getDateTime();
// get the first real estate or resort's images: this will be called each time a new Realestate/Resort is selected..
imagesPreload();
// set the first Image
setCarouselImage();

// set the data and time every second: one thousand milliseconds
setInterval(getDateTime, 1000);

// set next picture of this Real Estate or Resort (Carousel) every 2.5 seconds
setInterval(setCarouselImage, 4500);

function setCarouselImage()
{
        // if the last one, loop from the first one
        if (currentCarouselImage == imageSources.length-1)
        {
           	currentCarouselImage = 0; // array starts with 0
        }
        else
        {
        	currentCarouselImage++;
        }
        document.getElementById("iztuzu").src=imageSources[currentCarouselImage];
        // alert(document.getElementById("iztuzu").width + " " + document.getElementById("iztuzu").height);
        document.getElementById("iztuzu").alt="iz tuzu beach " + currentCarouselImage;
}

// Date and Time Javascript Function to be run with one second interval
function getDateTime()
{
        // Now
	currentTime = new Date();
        // Hour
	hours = currentTime.getHours();
        // Minues
	minutes = currentTime.getMinutes();
        // Seconds
        seconds = currentTime.getSeconds();
        // Date 1 to 31
        dayNumber = currentTime.getDate();
        // Name of the Day, from the day of the Week: 0 to 6
        // Retrieved from the Day Names array: Sunday to Saturday
        day = days[currentTime.getDay()];
        // Name of the Month, from the month of the year: 0 to 11
        // Retrieved from the Months Name array: January to December
        month = months[currentTime.getMonth()];
        // Century and Year: CCYY
        fullyear = currentTime.getFullYear();

	if (minutes < 10)
	minutes = "0" + minutes

	if (seconds < 10)
	seconds = "0" + seconds

	var suffix = "AM";
	if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}
	document.getElementById("Time").innerHTML = "<b>" + hours + ":" + minutes + ":" + seconds + " " + suffix + " - </b>";
	document.getElementById("Date").innerHTML = "<b>" + day + ", " + month + " " + dayNumber + ", " + fullyear + "</b>";
}

// preload the images (from MariaDB images file)
function imagesPreload()
{
        // Use the selected (key) Real Estate or Resort name to retrieve the images.
	imageSources = new Array("https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu1.JPG",
				"https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu2.JPG",
				"https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu3.JPG",
				"https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu4.JPG",
				"https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu5.JPG",
				"https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu6.JPG",
				"https://www.mfeweb.com/images/gokbel_iztuzu/iztuzu7.JPG");
     // same will be done for Alt when DB is ready
 }
