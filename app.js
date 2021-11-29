var slideNum = 0; 
function displayDescribe() {
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("EButton").style.backgroundColor = "#9ea3f0";
    document.getElementById("boxDescription").style.display = "block";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("step").innerHTML = "<b>D</b>efine rules:";
    document.getElementById("boxDescription").innerHTML = "The purpose of this debrief is to help you reflect on the scenario you have just completed in order to help you improve your skills as a paramedic. This debrief will recount the actions you performed, as well as the actions indicated based on the case scenario, and will help you explore areas of discordance. The contents of this debrief are designed to identify areas for improvement and are not designed to assess your abilities as a paramedic.";
}

function displayExplain() {
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("BButton").style.backgroundColor = "#9ea3f0";
    document.getElementById("boxDescription").style.display = "block";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("step").innerHTML = "<b>E</b>xplain the learning objectives:";
    document.getElementById("boxDescription").innerHTML =
        "This scenario was designed to give you practice with identifying and managing <ul>1. A patient with life-threatening bleeding</ul> <ul>2. A patient at risk for a cervical injury</ul> <ul>3. A patient who requires a definitive airway and ventilation support</ul> <ul>4. A patient with hemorrhagic shock</ul>";
}

function displayBenchmarks() {
    document.getElementById("step").innerHTML = "Describe the <b>B</b>enchmarks for performance:";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "block";
    document.getElementById("leftbox").innerHTML =
        `Below are management actions you were supposed to perform in this scenario:<ul id="metric1" onClick="metric1()">1. <u>Stopped life-threatening bleeding</u></ul>
    <ul id="metric2" onClick="metric2()">2. <u>Stabilized a potential cervical injury</u></ul><ul id="metric3" onClick="metric3()">3. <u>Provided a definitive airway and supported ventilation</u>
    </ul><ul id="metric4" onClick="metric4()">4. <u>Managed hemorrhagic shock</u></ul>`
    document.getElementById("rightbox").innerHTML =
        `Click on a management action to see performance benchmarks for this action:`;
    document.getElementById("slideshowR").style.display = "none";
}

function metric1() {
    document.getElementById("metric1").style.color = "grey";
    document.getElementById("rightbox").innerHTML =
        `<u>Stopped life-threatening bleeding:</u>

    <ul>*Immediately recognized the need to manage severe bleeding--i.e., when first encountering the patient, during the scene size-up</ul>
    
    <ul>*Immediately applied a tourniquet to the patients right leg, before doing all other actions included in the Primary Survey</ul>
    
    <ul>*Applied the tourniquet as far proximally to the wound as possible</ul>
    
    <ul>*Confirmed that your treatment worked i.e., by checking that bleeding stopped and pulses were absent<ul>`
}

function metric2() {
    document.getElementById("metric2").style.color = "grey";
    document.getElementById("rightbox").innerHTML =
        `<u>Stabilized a potential cervical injury:</u>

    <ul>*Immediately directed a team member to take manual c-spine stabilization: that is, during the scene size-up</ul>
    
    <ul>*Escalated c-spine stabilization during the Secondary Survey, after assessing the neck, by applying an appropriately sized cervical collar</ul>
    
    <ul>*Fully immobilized the patient prior to transport, by log-rolling the patient onto a backboard while continuing to stabilize the spine and attaching at least three straps, the CID pad, both head blocks, and CID straps</ul>
    `
}

function metric3() {
    document.getElementById("metric3").style.color = "grey";
    document.getElementById("rightbox").innerHTML =
        `<u>Provided a definitive airway and supported ventilation</u>

    <ul>*Opened the airway with a jaw-thrust maneuver, during the Primary Survey</ul>
    
    <ul>*Provided bag-valve mask ventilation with 15 LPM O2 attached</ul>

    <ul>*Provided a definitive airway during transport, while continuing to assess and manage the patient:
        <ul>*Administered etomidate and placed an advanced airway (endotracheal tube or supraglottic airway device)</ul>
        <ul>*Confirmed tube placement by visually inspecting tube placement, listening to bilateral lung sounds, CO2 capnography, and reevaluating vital signs</ul> 
        <ul>*Oxygenated to SpO2 95-99%</ul>
    </ul>`
}

function metric4() {
    document.getElementById("metric4").style.color = "grey";
    document.getElementById("rightbox").innerHTML =

        `<u>Managed hemorrhagic shock</u>

    <ul>*Kept the patient warm by covering him with a blanket, as soon as shock was detected, during the Primary Survey</ul>
    
    <ul>*Administered supplemental O2</ul>

    <ul>*Established two large-bore IVs and bolus NS fluids to a goal BP systolic 90, as soon as possible during transport</ul>
    `
}

function displayReview() {
    showSpecificSlide(sceneSizeUp);
    document.getElementById("step").innerHTML = "<b>R</b>eview what was supposed to happen: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "block";
}

function displayIdentify() {
    document.getElementById("step").innerHTML = "<b>I</b>dentify what happened: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "none";
}

function displayExamine() {
    document.getElementById("step").innerHTML = "<b>E</b>xamine why: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "none";

}

function displayFormailze() {
    document.getElementById("step").innerHTML = "<b>F</b>ormalize learning: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function displaySlides(n)
{
    console.log("display slide" + (slideNum+n));
    slideNum = slideNum+n;
    var slides=[sceneSizeUp, primarySurvey, secondarySurvey, transferAndTransport, ongoingManagement];
    showSpecificSlide(slides[slideNum]);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    return currSlide;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log(slides[i].id);
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    n = slides[slideIndex - 1];
    var prevButton = document.getElementsByClassName("prev");
    var nextButton = document.getElementsByClassName("next");
    prevButton[0].style.display = "initial";
    nextButton[0].style.display = "initial";
    if (n.id == 'sceneSizeUp') {
        prevButton[0].style.display = "none";
    }
    if (n.id == 'ongoingManagement') {
        nextButton[0].style.display = "none";
    }
    //dots[slideIndex-1].className += " active";
}

function showSpecificSlide(n) {
    //slideNum=0, 1, 2, or 3
    console.log(n.id);
    var prevButton = document.getElementsByClassName("prev");
    var nextButton = document.getElementsByClassName("next");
    prevButton[0].style.display = "initial";
    nextButton[0].style.display = "initial";
    if (n.id == 'sceneSizeUp') {
        prevButton[0].style.display = "none";
        slideNum=0;
        console.log(slideNum); 
    }
    if (n.id == 'primarySurvey') {
        slideNum=1;
        console.log(slideNum); 
    }
    if (n.id == 'secondarySurvey') {
        slideNum=2;
        console.log(slideNum); 
    }
    if (n.id == 'transferAndTransport') {
        slideNum=3;
        console.log(slideNum); 
    }
    if (n.id == 'ongoingManagement') {
        nextButton[0].style.display = "none";
        slideNum=4;
        console.log(slideNum); 
    }
    console.log(document.getElementById(n));
    document.getElementById(n.id).style.display = "block";

    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    document.getElementById(n.id).style.display = "block";
}

function showAllSlides() {
    var prevButton = document.getElementsByClassName("prev");
    var nextButton = document.getElementsByClassName("next");
    prevButton[0].style.display = "none";
    nextButton[0].style.display = "none";
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
    }
}