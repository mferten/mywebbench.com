@extends('layouts.master')
@push('header')
<!-- place holder -->
        <header>
            <h1>Let's Make USVI St. Thomas A Cheerful Paradise <a class="harvard" href="docs/whyCheerfulParadise.jpg" target="_blank">How?&nbsp;</a></h1>
            <figure>
                <figcaption id="imageText" class="harvard">Where is this place and why it is special?</figcaption>
                <img id="previous" class="twoRems displayNone" src="images/previous.png" alt="Previous Photo"/>
                <img id="startOrStop" class="twoRems" src="images/pause.png" alt="Stop Carousel"/>
                <img id="decrease" class="twoRems displayType" src="images/decrease.jpg" alt="Decrease Photo Size"/>
                <a id="pictureA" href="images/IMG1.JPG" target="_blank">
                    <img id="picture" class="img20 aPng" src="images/IMG1.JPG"
                        alt="St. Thomas Photo"/>
                </a>
                <img id="increase" class="twoRems displayType" src="images/increase.png" alt="Increase Photo Size"/>
                <img id="next" class="twoRems displayNone" src="images/next.png" alt="Next Photo"/>
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
