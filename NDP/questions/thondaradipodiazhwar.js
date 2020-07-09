function thondaradipodiazhwarques() 
{
    functionname ="thondaradipodiazhwar";
    
var mudhalques = 
[
"தொண்டரடிப் பொடியாழ்வார் அவதரித்த திருத்தலம் யாது ?",
"தொண்டரடிப்பொடியாழ்வாரின் அவதார மாதம் நக்ஷத்திரம் எது ?",
"தொண்டரடிப்பொடியாழ்வாரின் இயற்பெயர் யாது ?",
"தொண்டரடிப்பொடியாழ்வார் அருளிய பிரபந்தங்கள் யாவை ?",
"திருப்பள்ளி எழுச்சியில் எத்தனை பாசுரங்கள் உள்ளன ?",
"திருப்பள்ளி எழுச்சியில் யாரைப் பள்ளி உணர்த்துகிறார் ?",
"திருப்பள்ளிஎழுச்சியில் முதல் பாசுரத்தின் முதல் வார்த்தை எது ?",
"திருமாலையில் எத்தனை பாசுரங்கள் உள்ளன ?",
"திருமாலையில் முதல்பாசுரத்தின் முதல் வார்த்தை எது ?",
"பெரியாழ்வாரைப் போன்று நந்தவனக் கைங்கர்யத்தில் ஈடுபட்ட மற்றோர் ஆழ்வார் யார் ?",
"தொண்டரடிப்பொடியாழ்வார் எந்த திவ்யதேசத்தில் நந்தவனக் கைங்கர்யம் செய்தார் ?",
"தொண்டரடிப்பொடியாழ்வார் யாரிடத்தில் மயக்குற்றிருந்தார் ?",
"தொண்டரடிப்பொடியாழ்வார் சேவை ஸாதிப்பது எவ்வாறு ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
[
"திருமண்டங்குடி. ",
"மார்கழியில் கேட்டை. ",
"விப்ரநாராயணன். ",
"திருமாலை, திருப்பள்ளியெழுச்சி. ",
"10. ",
"திருவரங்கநாதனை.",
"கதிரவன்",
"45.",
"காவல். ",
"தொண்டரடிப்பொடியாழ்வார். ",
"ஸ்ரீரங்கம். ",
"தேவ தேவி என்கிற பெண்ணிடம். ",
"துளசிக்கூடையுடனும் தாமரை மணி மாலையுடனும் சேவை ஸாதிப்பார்.",
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

document.getElementById("showhidebut").style.display = "block"
document.getElementById("refreshQuest").style.display = "block"
document.getElementById("refreshpage").style.display = "block"
}