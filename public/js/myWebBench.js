'use strict';

/*
 * when the window is loaded: set the page and add the events
 */
this.addEventListener("load", startUp, false);

/*
 * window is loaded
 */
function startUp()
{
    var locations = ["Marriott Frenchmen's Cove",
                      "Marriott Frenchmen's Cove",
                      "Marriott Frenchmen's Cove",
                      "Marriott Frenchmen's Cove",
                      "Marriott Frenchmen's Cove",
                      "Marriott Frenchmen's Cove",
                      "Marriott Frenchmen's Cove",
                      "Charlotte Amalie Night View from Paradise Point",
                      "Charlotte Amalie Night View from Paradise Point",
                      "Charlotte Amalie Night View from Paradise Point",
                      "Megan's Bay from Mountain Top",
                      "Charlotte Amalie Sunset from Bluebeard's Castle Resort ",
                      "Havensight dock from Bluebeard's Castle Resort",
                      "Frenchman's Reef & Morning Star Marriott Beach Resort",
                      "Frenchman's Reef & Morning Star Marriott Beach Resort",
                      "Frenchman's Reef & Morning Star Marriott Beach Resort",
                      "Havensight dock",
                      "Mountain Top",
                      "Megan's Bay from Mountain Top",
                      "Mountain Top",
                      "On the way to Mountain Top",
                      "Marriott Frenchmen's Cove Sunset",
                      "Skyride to Paradise Point",
                      "Paradise Point",
                      "Crown Bay Dock",
                      "Water Island, Airport and Crown Bay Dock",
                      "Water Island and Crown Bay Dock"];
    var imageTexts = [];
    this.addEventListener("click", clickEvents, false);
    // image count
    var currentCarouselImage = 0; // if 0 is not assigned: It becomes "undefined" and NaN in setCarouselImage function.
    var startStopButton = document.getElementById("startOrStop");
    // set the first Image
    setCarouselImage();
    // Start Photo Carousel
    var runningCarousel = setInterval(setCarouselImage, 4500);
    // Rotate the Photos
    function setCarouselImage()
    {
        // if the last one, loop from the first one
        if (currentCarouselImage == 27) // *** This will be updated anytime a new photo added
        {
            currentCarouselImage = 1; // array starts with 0
        }
        else
        {
            currentCarouselImage++;
        }
        /*
        document.getElementById("picture").src="images/IMG" + currentCarouselImage + ".JPG";
        document.getElementById("pictureA").href="images/IMG" + currentCarouselImage + ".JPG";
        // this is a hard-coded array for now: imageTexts. if evolves it will be retrieved from the database
        document.getElementById("imageText").innerHTML=locations[currentCarouselImage-1];
        */
        showAPhoto();
        startStopButton.innerHTML="Stop";
    }

    /* a Flag is Selected: The Search starts */
    function clickEvents(event)
    {
        // Modify the Photo Size
        if (event.target.id == "increase")
        {
            // "+" Increase the Size
            changeTheSize("+");
        }
        // if not Increase, is it "Decrease"?
        else if (event.target.id == "decrease")
        {
            // "-" Decrease the Size
            changeTheSize("-");
        }
        else if (event.target.id == "startOrStop")
        {
            if (startStopButton.src.indexOf("images/pause.png") != -1)
            {
                // Stop the "picture carousel"
                clearInterval(runningCarousel);
                runningCarousel = "";
                startStopButton.src="images/play.png"
                document.getElementById("next").classList.remove("displayNone");
                document.getElementById("previous").classList.remove("displayNone");
            }
            else
            {
                // Start the "picture carousel"
                runningCarousel = setInterval(setCarouselImage, 4500);
                startStopButton.src="images/pause.png"
                document.getElementById("next").classList.add("displayNone");
                document.getElementById("previous").classList.add("displayNone");
            }
        }
        else if (event.target.id == "next")
        {
            // go to the next Photo: ++ if the last one start again 1
            if (currentCarouselImage == 27) // *** This will be updated anytime a new photo added
            {
                currentCarouselImage = 1; // array starts with 0
            }
            else
            {
                currentCarouselImage++;
            }
            showAPhoto();
        }
        else if (event.target.id == "previous")
        {
            // go to the previous Photo: -- if the First one, go to the last 27
            if (currentCarouselImage == 1) // *** This will be updated anytime a new photo added
            {
                currentCarouselImage = 27; // array starts with 0
            }
            else
            {
                currentCarouselImage--;
            }
            showAPhoto();
        }
    }

    // Adjust the Photo size
    function changeTheSize(what)
    {
        if (document.getElementById("picture").classList.contains("img20"))
        {
            var width = document.getElementById("picture").width;
            var height = document.getElementById("picture").height;
            document.getElementById("picture").classList.remove("img20");
            document.getElementById("picture").width = width;
            document.getElementById("picture").height = height;
        }
        if (what == "+")
        {
            document.getElementById("picture").width += 48;
            document.getElementById("picture").height += 48;
        }
        else
        {
            document.getElementById("picture").width -= 48;
            document.getElementById("picture").height -= 48;
        }
    }

    function showAPhoto()
    {
        document.getElementById("picture").src="images/IMG" + currentCarouselImage + ".JPG";
        document.getElementById("pictureA").href="images/IMG" + currentCarouselImage + ".JPG";
        // this is a hard-coded array for now: imageTexts. if evolves it will be retrieved from the database
        document.getElementById("imageText").innerHTML=locations[currentCarouselImage-1];
    }

}
