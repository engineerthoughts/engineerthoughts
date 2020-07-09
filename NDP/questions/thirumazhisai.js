function thirumazhisaiques() 
{

    functionname = "thirumazhisai";

var mudhalques = 
["திருமழிசையாழ்வார் அவதரித்த ஸ்தலம் எது ?",
"பார்க்கவ முனிவர் திருமாலைக்குறித்து, 'தீர்க்க சத்திர யாகம்' செய்த ஸ்தலம் யாது ?",
"திருமழிசையாழ்வாரை எந்த இடத்தில் யார் கண்டெடுத்து வளர்த்தார்கள் ?",
"திருமழிசையாழ்வார் அவதரித்த மாதம் நக்ஷத்திரம் எது ?",
"திருமழிசையாழ்வார் இயற்றிய பிரபந்தங்கள் எவை ?",
"திருச்சந்தவிருத்தத்தில் எத்தனை பாசுரங்கள் உள்ளன ?",
"நான்முகன் திருவந்தாதியில் எத்தனை பாசுரங்கள் உள்ளன ?",
"நான்முகன் திருவந்தாதியின் முதல் பாசுரத்தின் முதல் வார்த்தை எது ?",
"திருச்சந்த விருத்தத்தின் முதல் பாசுரத்தின் முதல் வார்த்தை எது ?",
"திருமழிசையாழ்வாரின் சீடர் பெயர் என்ன ?",
"திருமழிசையாழ்வார் கேட்டதன் பேரில் அவருடன் புறப்பட்டு சென்ற எம்பெருமான் யார் ? அவரது வடமொழிப் பெயரென்ன ?",
"திருமழிசையாழ்வார் கேட்டுக் கொண்டதன் பேரில் எழுந்து பேச முற்பட்டவர் யார் ? அவரது மற்றொரு பெயரென்ன ?",
"திருமழிசையாழ்வார் முதலாழ்வார்களை எங்கே சந்தித்தார் ? பின்னர் நால்வரும் எங்கு ஒன்றாகத் தங்கியிருந்தனர் ?",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
["திருமழிசை",
"திருமழிசை",
"பிரம்புப்புதரில் திருவாளன் என்னும் பிரம்பறுப்பாளர் கண்டெடுத்து வளர்த்தார்.",
"தைமாதம் மகம் நக்ஷத்திரம். ",
"திருச்சந்த விருத்தம், நான்முகன் திருவந்தாதி.",
"120.",
"96. ",
"நான்முகன்.",
"பூ. ",
"கணிகண்ணன். ",
"திருவெஃகாவில் எழுந்தருளியிருக்கும், சொன்ன வண்ணம் செய்த பெருமாள்; அவரது வடமொழிப்பெயர் யதோக்தகாரி.",
"திருக்குடந்தையில் எழுந்தருளியிருக்கும் ஆராவமுதன். அவரது மற்றொரு பெயர் சார்ங்கபாணி என்பதாகும்.",
"மலைக்குகை ஒன்றில் தவம் செய்து கொண்டிருந்த போது சந்தித்தார்.பின்னர் திருவல்லிக்கேணித் திருத்தலத்திலுள்ள திருக்குளக்கரையில் தங்கியிருந்தனர்.",
"ans8",
"ans7",
"ans8",
"ans9",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var random = shuffle(numbers);
console.log(random);
document.getElementById("question1").innerHTML = "1. " + mudhalques[random[0]];
document.getElementById("question2").innerHTML = "2. " + mudhalques[random[1]];
document.getElementById("question3").innerHTML = "3. " + mudhalques[random[2]];
document.getElementById("question4").innerHTML = "4. " + mudhalques[random[3]];
document.getElementById("question5").innerHTML = "5. " + mudhalques[random[4]];
document.getElementById("question6").innerHTML = "6. " + mudhalques[random[5]];
document.getElementById("question7").innerHTML = "7. " + mudhalques[random[6]];
document.getElementById("question8").innerHTML = "8. " + mudhalques[random[7]];
document.getElementById("question9").innerHTML = "9. " + mudhalques[random[8]];
document.getElementById("question10").innerHTML = "10. " + mudhalques[random[9]];

document.getElementById("answer1").innerHTML = "Ans. " + mudhalans[random[0]];
document.getElementById("answer2").innerHTML = "Ans. " + mudhalans[random[1]];
document.getElementById("answer3").innerHTML = "Ans. " + mudhalans[random[2]];
document.getElementById("answer4").innerHTML = "Ans. " + mudhalans[random[3]];
document.getElementById("answer5").innerHTML = "Ans. " + mudhalans[random[4]];
document.getElementById("answer6").innerHTML = "Ans. " + mudhalans[random[5]];
document.getElementById("answer7").innerHTML = "Ans. " + mudhalans[random[6]];
document.getElementById("answer8").innerHTML = "Ans. " + mudhalans[random[7]];
document.getElementById("answer9").innerHTML = "Ans. " + mudhalans[random[8]];
document.getElementById("answer10").innerHTML = "Ans. " + mudhalans[random[9]];

document.getElementById("showhidebut").style.display = "block";
document.getElementById("refreshQuest").style.display = "block";
document.getElementById("refreshpage").style.display = "block";

}


