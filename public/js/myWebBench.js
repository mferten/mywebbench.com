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
                     "Water Island and Crown Bay Dock",
                     "Marriott Frenchmen's Cove",
                     "Marriott Frenchmen's Cove"];
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
        if (currentCarouselImage == 29) // *** This will be updated anytime a new photo added
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
            if (currentCarouselImage == 29) // *** This will be updated anytime a new photo added
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
            // go to the previous Photo: -- if the First one, go to the last 28
            if (currentCarouselImage == 1) // *** This will be updated anytime a new photo added
            {
                currentCarouselImage = 29; // array starts with 0
            }
            else
            {
                currentCarouselImage--;
            }
            showAPhoto();
        }
        else if (event.target.id == "emailIcon" || event.target.id == "emailAnchor")
        {
            // if PhotoBox is Enabled (No displayNone class)
            if (!document.getElementById("photoBox").classList.contains("displayNone"))
            {
                // Disable Photo Box and Email Button
                document.getElementById("photoBox").classList.add("displayNone");
                // Enable Email Box
                document.getElementById("emailBox").classList.remove("displayNone");

                document.getElementById("mailText").focus;
            }
            else // reverse back to the main page
            {
                // Disable Photo Box and Email Button
                document.getElementById("photoBox").classList.remove("displayNone");
                // Enable Email Box
                document.getElementById("emailBox").classList.add("displayNone");
            }
        }
        else if (event.target.id == "sendButton")
        {
            if (document.getElementById("mailText").value)
            {
                processSendMail();
                processClearMail();
                returnBack();
            }
            else
            {
                document.getElementById("mailTextError").innerHTML = "Please Enter Your Message to Send!";
            }
        }
        else if (event.target.id == "clearButton")
        {
            processClearMail();
        }
        else if (event.target.id == "returnButton")
        {
            processClearMail();
            returnBack();
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

    function returnBack()
    {
        // Show Photo Box
        document.getElementById("photoBox").classList.remove("displayNone");
        // Hide Email Box
        document.getElementById("emailBox").classList.add("displayNone");
    }
}

function processSendMail()
{
    var xhttpLogin = new XMLHttpRequest();
    var formLoginData = new FormData(); // Currently empty
    formLoginData.append("toMailAddress", "mferten@mfeweb.com");
    formLoginData.append("fromMailAddress", "mferten@mfeweb.com");
    formLoginData.append("mailMessage", document.getElementById("mailText").value);
    xhttpLogin.onreadystatechange = function()
    {
        if (xhttpLogin.readyState == 4 && xhttpLogin.status == 200)
        {
            // Initialize the entry columns
            document.getElementById("mailText").value = "";
        }
    };
    xhttpLogin.open("POST", "ajax/sendAnE_Mail", true);
    xhttpLogin.setRequestHeader('X-CSRF-TOKEN', document.getElementsByName('csrf-token')[0].getAttribute('content'));
    xhttpLogin.send(formLoginData);
}

function processClearMail()
{
    document.getElementById("mailTextError").innerHTML = "";
    document.getElementById("mailText").value = "";
}
