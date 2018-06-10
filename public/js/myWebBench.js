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
    // set the first Image
    setCarouselImage();
    // set next picture of this Real Estate or Resort (Carousel) every 2.5 seconds
    var runningCarousel = setInterval(setCarouselImage, 4500);
    document.getElementById("start").disabled = true;
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
        document.getElementById("picture").src="images/IMG" + currentCarouselImage + ".JPG";
        document.getElementById("pictureA").href="images/IMG" + currentCarouselImage + ".JPG";
        // this is a hard-coded array for now: imageTexts. if evolves it will be retrieved from the database
        document.getElementById("imageText").innerHTML=locations[currentCarouselImage-1];
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
        else if (event.target.id == "stop")
        {
            // Stop the "picture carousel"
            clearInterval(runningCarousel);
            runningCarousel = "";
            document.getElementById("start").disabled = false;
            document.getElementById("stop").disabled = true;
        }
        else if (event.target.id == "start")
        {
            // Start the "picture carousel"
            runningCarousel = setInterval(setCarouselImage, 4500);
            document.getElementById("start").disabled = true;
            document.getElementById("stop").disabled = false;
        }
    }

    // Adjust the Photo size
    function changeTheSize(what)
    {
        if (document.getElementById("picture").classList.contains("img20"))
        {
            document.getElementById("picture").classList.remove("img20");
            document.getElementById("picture").width = "320";
        }
        if (what == "+")
            document.getElementById("picture").width = document.getElementById("picture").width + 48;
        else
            document.getElementById("picture").width = document.getElementById("picture").width - 48;
    }
}
