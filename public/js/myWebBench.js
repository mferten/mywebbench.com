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
    // image count
    var currentCarouselImage = 0; // if 0 is not assigned: It becomes "undefined" and NaN in setCarouselImage function.
    // set the first Image
    setCarouselImage();
    // set next picture of this Real Estate or Resort (Carousel) every 2.5 seconds
    setInterval(setCarouselImage, 4500);

    function setCarouselImage()
    {
        // if the last one, loop from the first one
        if (currentCarouselImage == 17) // *** This will be updated anytime a new photo added
        {
            currentCarouselImage = 1; // array starts with 0
        }
        else
        {
            currentCarouselImage++;
        }
        console.log("images/IMG" + currentCarouselImage + ".JPG");
        document.getElementById("picture").src="images/IMG" + currentCarouselImage + ".JPG";
    }    
}
