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

    this.addEventListener("click", clickEvents, false);
    // image count
    var currentCarouselImage = 0; // if 0 is not assigned: It becomes "undefined" and NaN in setCarouselImage function.
    // set the first Image
    setCarouselImage();
    // set next picture of this Real Estate or Resort (Carousel) every 2.5 seconds
    setInterval(setCarouselImage, 4500);
    // Rotate the Photos
    function setCarouselImage()
    {
        // if the last one, loop from the first one
        if (currentCarouselImage == 23) // *** This will be updated anytime a new photo added
        {
            currentCarouselImage = 1; // array starts with 0
        }
        else
        {
            currentCarouselImage++;
        }
        document.getElementById("picture").src="images/IMG" + currentCarouselImage + ".JPG";
        document.getElementById("pictureA").href="images/IMG" + currentCarouselImage + ".JPG";
    }
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
