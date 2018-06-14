@extends('layouts.master')
@push('header')
<!-- place holder -->
        <header>
            <h1>Let's Make USVI St. Thomas A Cheerful Paradise <a class="harvard" href="docs/whyCheerfulParadise.jpg" target="_blank">How?&nbsp;</a></h1>
            <!-- Photos -->
            <figure id="photoBox">
                <img id="previous" class="threeRems displayNone" src="images/previous.png" alt="Previous Photo" title="Previous Photo"/>
                <img id="decrease" class="threeRems displayType" src="images/decrease.png" alt="Decrease Photo Size" title="Decrease Photo Size"/>
                <img id="startOrStop" class="threeRems" src="images/pause.png" alt="Stop Carousel" title="Stop Photo Carousel"/>
                <img id="increase" class="threeRems displayType" src="images/increase.png" alt="Increase Photo Size" title="Increase Photo Size"/>
                <img id="next" class="threeRems displayNone" src="images/next.png" alt="Next Photo" title="Next Photo"/>
                <figcaption id="imageText" class="harvard">Where is this place and why it is special?</figcaption>
                <a id="pictureA" href="images/IMG1.JPG" target="_blank">
                    <img id="picture" class="img20 aPng" src="images/IMG1.JPG"
                        alt="St. Thomas Photo"/>
                </a>
            </figure>
            <!-- User Opinion -->
            <figure id="emailBox" class="displayNone">
                <img id="sendButton" class="threeRems" src="images/sendMail.jpg" alt="Send" title="Send your eMail"/>
                <img id="clearButton" class="threeRems" src="images/clear.jpg" alt="Clear" title="Clear your eMail"/>
                <img id="returnButton" class="threeRems" src="images/return.jpg" alt="Return" title="Return to Main Page"/>
                <form id="SendMailModule" method="post">
                    <label for="mailText" class='harvard'>Please Enter Your Opinion</label>
                    <textarea class="img20 aPng" id="mailText" rows="15" cols="50"></textarea>
                    <p id="mailTextError" class="error"></p>
                </form>
            </figure>
        </header>
@endpush
@push('module')
<!-- place holder -->
        <main>
            <ul class="ulListStyle">
                <li>
                    <h2 class="harvard">Invite </h2>
                </li>
                <li>
                    <a href="https://www.wholefoodsmarket.com/" target="_blank">&nbsp;Whole Foods&nbsp;&nbsp;</a>
                    <a href="https://www.costco.com/" target="_blank">&nbsp;COSTCO&nbsp;&nbsp;</a>
                </li>
                <li>
                    <h2 class="harvard">Set </h2>
                </li>
                <li>
                    <a href="http://www.magensbayauthority.com/" target="_blank">&nbsp;Aruba Type Resorts Behind Megans Bay&nbsp;</a>
                </li>
                <li>
                    <h2 class="harvard">Ongoing </h2>
                </li>
                <li>
                    <a href="https://www.eia.gov/state/analysis.php?sid=VQ" target="_blank">&nbsp;Solar Energy: Roads, Buildings and Beautification&nbsp;</a>
                </li>
            </ul>
        </main>
@endpush

@push('jsFiles')
<!-- place holder -->
        <script src="js/myWebBench.js"></script>
@endpush
