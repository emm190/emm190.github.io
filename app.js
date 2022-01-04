let data = '{"table0":[' + 
'{"step":"Identify life-threatening bleeding during your primary survey","feedback":"The following should alert you to possible life-threatening blood loss early on in your assessment:<ul><li>Mechanism of injury, a lawn-mower accident, provided by dispatch (scene size up)</li> <li>A bystander holding a blood-soaked towel to the patient’s right leg (primary survey), which was ultimately found to be related to a partial amputation</li></ul>" },' +
'{"step":"Apply a tourniquet during the primary survey","feedback":"The patient had a partial amputation and was losing a large amount of blood. This is a threat to life and should be acted on during the primary survey. You could instruct a colleague to apply the tourniquet while you continue on with your primary survey." },' +
'{"step":"Apply a tourniquet as far proximally as possible","feedback":"The correct placement of a tourniquet is as far proximal as possible. If you simply applied direct pressure, this would not have adequately stopped the bleeding so you would need to escalate care."},' + 
'{"step":"Confirm that bleeding has stopped","feedback":"After placement of a tourniquet, you must confirm that the bleeding as stopped. If bleeding has not stopped, you would want to apply a second tourniquet."},' + 
'{"step":"Confirm that pulses are absent","feedback":"After placement of a tourniquet, you must confirm that pulses are absent. If pulses are still palpable, you would want to apply a second tourniquet."},' + 
'{"step":"All correct","feedback":"During the primary survey, you correctly identified that this patient had a life-threatening partial amputation and placed a tourniquet on the proximal right leg to stop the bleeding." }],' + 
'"table1":[' + 
'{"step":"Identify that this patient is at risk for a cervical spine injury during your scene size-up","feedback":"This is a trauma case, so you must presume cervical spine injury until proven otherwise."},' + 
'{"step":"Direct a team member to take manual c-spine stabilization during scene size-up","feedback":"If this patient has a cervical spine injury, any movement during your primary assessment can cause harm to the patient. Because this is a trauma patient, you should stabilize the C-spine before starting your ABCs."},' + 
'{"step":"Log-rolls the patient onto a backboard, while continuing to stabilize the spine","feedback":"With any movement of the patient, be sure that someone is continuing to control the cervical spine, even if the patient is already in a collar. This includes during inspection of the patient’s back as well as when trying to move the patient for transport."},' + 
'{"step":"Fully immobilizes the patient with at least three straps, the CID pad, both heads blocks, and with CID straps","feedback":"Be sure that the patient is adequately secured before attempting to move the patient on a backboard."},' + 
'{"step":"All correct","feedback":"During the scene survey, you recognized that this trauma patient’s cervical spine needed to be immobilized immediately. You continued to maintain cervical stabilization through the rest of your assessment and whenever you moved the patient."}],' + 
'"table2":[' + 
'{"step":"Identify that this patient requires intubation during the primary survey","feedback":"On initial assessment, the patient has a respiratory rate of 38 with shallow effort and a pulse ox of 78%. Your first actions should include opening the airways and administering O2 via bag-valve mask. However, despite this, your patient still ***insert our push to intubate**. Paired with his GCS of 8 and declining mental status, this is a patient who needs to be intubated."},' + 
'{"step":"Opens the airway via jaw-thrust instead of head-tilt","feedback":"To adequately ventilate this patient you will need to open the airway. This can be accomplished via jaw-thrust or head tilt, but this is a trauma patient and the cervical spine should be maintained throughout your assessment. A head-tilt could cause injury to your patient’s spine."},' + 
'{"step":"Provides bag-valve mask ventilation with 15LPM O2 attached","feedback":"On initial assessment, the patient has a respiratory rate of 38 with shallow effort and a pulse ox of 78%. Your first actions should include opening the airways and administering O2 via bag-valve mask. Recall that your BVM should always be attached to 15LPM O2 as you are trying to both ventilate and oxygenate this patient. As you do this, you should be evaluating for any clinical changes. A lack of improvement suggests you need to make an adjustment: consider if you need an OP/NP airway, if you need a better seal, or if you may need to intubate your patient."},' + 
'{"step":"Administers etomidate and places an ET tube","feedback":"This patient has inadequate respiratory effort and a GCS of 8 and declining despite efforts to non-invasively administer O2. This patient needs intubation."},' + 
'{"step":"Confirms placement of the ET tube by visually inspecting tube placement, listening to bilateral lungs, CO2 capnography, and reevaluating vital signs. ","feedback":"Once you have placed an ET tube, you must confirm that it is in the correct place (ie not in the esophagus or mainstem bronchus). You should check this by visually inspecting the location of the tube, listening to both lungs (you should hear air movement bilaterally), checking CO2 capnography (levels between 35-45 suggest successful intubation) **check these numbers**, and rechecking the patient’s vitals (you should see improvement in their SpO2 and potentially also their HR and BP)."},' + 
'{"step":"Oxygenate to SpO2 95-99%","feedback":"Your goal is to oxygenate your patient without over-oxygenating your patient. With a BVM, your patient’s O2 was not above 90%. Once you intubate your patient, you should titrate O2 to an SpO2 of 95-99%. Over-oxygenation can be harmful, so if you’re seeing 100%s, try to dial back on the O2."},' + 
'{"step":"All correct","feedback":"You correctly identified that this patient did not have adequate ventilation or oxygenation. If you attempted to bag this patient, you will have noticed that his SpO2 did not improve adequately. This, along with his GCS score of 8, were suggestive of the need to intubate this patient. Etomidate should have been given and an ET tube placed. Once the tube was placed and you confirmed correct placement on exam and by CO2 capnography, the patient’s vital signs would improve, allowing you to titrate O2 flow to maintain SpO2 of 95-99%. "}],' + 
'"table3":[' + 
'{"step":"Identify that this patient is in hemorrhagic shock during the scene size up or primary survey","feedback":"On arrival, the patient has an apparent source of blood loss (partial amputation), which should prompt you to think of hemorrhagic shock immediately. His blood pressure is 80/palpable, so the most likely cause of his hypotension is hemorrhagic shock."},' + 
'{"step":"Place two large-bore IVs and bolus NS fluids as quickly as possible to a goal BP systolic 90","feedback":"The patient is in hemorrhagic shock. While your ultimate goal is to get the patient to definitive management of his bleeding (ie. the OR), supportive the patient’s blood pressure with IV fluids is critical. Administer boluses to a systolic BP of 90. Further fluid resuscitation beyond this can lead to fluid overload without significant benefit to the patient."},' + 
'{"step":"Keep the patient warm and in a supine position and administer O2","feedback":"The patient is in hemorrhagic shock. While addressing the source of bleeding and starting IV fluids are critical, you should also keep the patient warm, place him in a supine position, and administer O2. These maneuvers are to help optimize oxygenation."},' + 
'{"step":"All correct","feedback":"You quickly recognized that this patient was in hemorrhagic shock. You appropriately started IV fluids to a goal systolic of 90 and optimized oxygenation by keeping the patient supine, warming him, and administering O2."}]}';
//outline: '{"step":"","feedback":""}' + 
const obj = JSON.parse(data);
//console.log(obj.table0.length);
//console.log(obj.table3[0].step); 
//console.log(Object.keys(obj))

//how to loop through 
/*
for(var i = 0; i<Object.keys(obj).length; i++){ 
    console.log(Object.keys(obj)[i]); 
}
*/
var currTableInd = 0; 
var tables = [obj.table0, obj.table1, obj.table2, obj.table3] 


var slideNum = 0; 
var checkNum = 0; 
function displayDescribe() {
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("slideshowI").style.display = "none";
    document.getElementById("EButton").style.backgroundColor = "#9ea3f0";
    document.getElementById("boxDescription").style.display = "block";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("step").innerHTML = "<b>D</b>efine rules:";
    document.getElementById("slideshowF").style.display = "none";
    document.getElementById("boxDescription").innerHTML = "The purpose of this debrief is to help you reflect on the scenario you have just completed in order to help you improve your skills as a paramedic. This debrief will recount the actions you performed, as well as the actions indicated based on the case scenario, and will help you explore areas of discordance. The contents of this debrief are designed to identify areas for improvement and are not designed to assess your abilities as a paramedic.";
}

function displayExplain() {
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("slideshowI").style.display = "none";
    document.getElementById("BButton").style.backgroundColor = "#9ea3f0";
    document.getElementById("boxDescription").style.display = "block";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("step").innerHTML = "<b>E</b>xplain the learning objectives:";
    document.getElementById("slideshowF").style.display = "none";
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
    document.getElementById("slideshowI").style.display = "none";
    document.getElementById("slideshowF").style.display = "none";

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
    document.getElementById("slideshowI").style.display = "none";
    document.getElementById("slideshowF").style.display = "none";

}

function displayIdentify() {
    showSpecificSlide(lifeThreatBleed);
    document.getElementById("step").innerHTML = "<b>I</b>dentify what happened & <b>E</b>xamine why: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("slideshowI").style.display = "block";
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("slideshowF").style.display = "none";
}

function displayExamine() {
    document.getElementById("step").innerHTML = "<b>E</b>xamine why: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("slideshowF").style.display = "none";

}

function displayFormailze() {
    document.getElementById("step").innerHTML = "<b>F</b>ormalize learning: ";
    document.getElementById("boxDescription").style.display = "none";
    document.getElementById("benchmarkDescription").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("slideshowR").style.display = "none";
    document.getElementById("slideshowI").style.display = "none";
    document.getElementById("slideshowF").style.display = "block";
    showFormalizeForm(); 
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
    document.getElementById("mySidenav").style.width = "140px";
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

function myFunction(n) {
    console.log(n);
    var popup = document.getElementById(n);
    popup.classList.toggle("show");
  }

function showNext(n) { 
    for(var i = 0; i<document.getElementsByClassName("mySlides").length; i++)
    {
        document.getElementsByClassName("mySlides")[i].style.display = "none";
    }
    for(var i = 0; i<document.getElementsByClassName("slideshow-container").length; i++)
    {
        document.getElementsByClassName("slideshow-container")[i].style.display = "none";
    }
    document.getElementById("slideshowI").style.display = "block";
    document.getElementById(n.id).style.display = "block";
}

function showFeedback(n, id){
    console.log(id)
    var checkbox = document.getElementsByClassName("initialcheck" + n);
    var feedbackCheckbox = document.getElementsByClassName("feedbackcheck" + n);
    for(var i = 0; i<checkbox.length; i++)
    {
        if(checkbox[i].checked==true) {
            feedbackCheckbox[i].checked=true; 
        }
        feedbackCheckbox[i].disabled=true;
    }
    showFeedbackList(feedbackCheckbox, id); 
    document.getElementById("lifeThreatBleed").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function showFeedbackList(n){
    var yesList = [0, 3, 6, 9, 12]; 
    var noList = [1, 4, 7, 10, 13]; 
    var unsureList = [2, 5, 8, 11, 14];
    var rowCount = 0;
    var listHeaders = document.getElementsByClassName("actionHeader"); 
    var listHeaderDescription = []; 
    for(var i = 0; i<listHeaders.length; i++)
    {
        listHeaderDescription[i]=listHeaders[i].innerHTML; 
    }
    console.log(listHeaderDescription);
    var indexDesc = 0;
    
    console.log(tables[currTableInd][0].step);
    //if all are checked display correct answer feedback 
    if(n[0].checked && n[3].checked && n[6].checked && n[9].checked && n[12].checked) {
        document.getElementById("positiveFeedBackList").innerHTML = tables[currTableInd][tables[currTableInd].length-1].feedback; 
        document.getElementById("negativeFeedBackList").innerHTML = '<li>You performed everything correctly.</li>'
    }
    else { 
        for(var i = 0; i<n.length; i++)
        {
            console.log("i: " + i + ", checked: " + n[i].checked); 
            if(n[i].checked==true && noList.includes(i))
            {
                if (i-3<=-1) //0,1,2
                    indexDesc=0; 
                else if (i-3>=0 && i-3<=2) //3,4,5
                    indexDesc=1; 
                else if (i-3>=3 && i-3<=5) //6,7,8
                    indexDesc=2; 
                else if (i-3>=6 && i-3<=8)//9,10,11
                    indexDesc=3;
                else if (i-3>=9 && i-3<=11)//12,13,14
                    indexDesc=4; 
                document.getElementById("negativeFeedBackList").innerHTML =  document.getElementById("negativeFeedBackList").innerHTML+'<li><u>'+tables[currTableInd][indexDesc].step+'</u>: '+tables[currTableInd][indexDesc].feedback+'</li>'
            }
            if(n[i].checked==true && yesList.includes(i))
            {
                if (i-3<=-1) //0,1,2
                    indexDesc=0; 
                else if (i-3>=0 && i-3<=2) //3,4,5
                    indexDesc=1; 
                else if (i-3>=3 && i-3<=5) //6,7,8
                    indexDesc=2; 
                else if (i-3>=6 && i-3<=8)//9,10,11
                    indexDesc=3;
                else if (i-3>=9 && i-3<=11)//12,13,14
                    indexDesc=4; 
                document.getElementById("positiveFeedBackList").innerHTML =  document.getElementById("positiveFeedBackList").innerHTML+'<li><u>'+tables[currTableInd][indexDesc].step+'</u></li>'
            }
            rowCount++; 
            
        }
        console.log("Display list"); 
    }
}


function checkMarked(){ 
    checkNum++;
    if(checkNum>4) {
        console.log("Okay show button");
        document.getElementById("nextbuttonbleed").style.display = "block";
    }
}


function showFeedBackForm(n) {
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("slideshowI").style.display = "none";
    var className = "initialcheck" + n;
    var checkbox = document.getElementsByClassName(className);
    var noList = [1, 4, 7, 10, 13]; 
    for(var i = 0; i<checkbox.length; i++)
    {
        if(checkbox[i].checked==true && noList.includes(i)) {
            document.getElementById("feedbackFormList").innerHTML =  document.getElementById("feedbackFormList").innerHTML+
            `<form>
            <label for="fname">You did not <i>`+tables[currTableInd][noList.indexOf(i)].step.toLowerCase()+`</i>. What did you do instead? What do you think led to this?</label><br>
            <span class="textarea" role="textbox" contenteditable></span>
            </form>`
        }
    }
}

function showFormalizeForm() {
    document.getElementById("feedbackForm").style.display = "none";
}