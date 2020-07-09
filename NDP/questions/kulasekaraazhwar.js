function kulasekaraazhwarques() 
{
    functionname ="kulasekaraazhwar";
    
var mudhalques = 
["பெருமாள் என்கிற அடைமொழி உடைய ஆழ்வார் யார் ?",
"குலசேகர ஆழ்வார் அவதரித்த இடம் எது ?",
"குலசேகராழ்வார் அவதரித்த மாதம், நக்ஷத்திரம் எது ?",
"குலசேகராழ்வார் இயற்றிய பிரபந்தம் யாது ?",
"பெருமாள் திருமொழியில் எத்தனை பாசுரங்கள் உள்ளன ?",
"பெருமாள் திருமொழியில் எத்தனை பதிகங்கள் உள்ளன ?",
"பெருமாள் திருமொழியில் முதல் பாசுரத்தில் உள்ள முதல் வார்த்தை எது ?",
"குலசேகராழ்வாரின் பிற திருநாமங்கள் யாவை ?",
"குலசேகராழ்வாரின் திருக்குமாரர் பெயர் என்ன ?",
"குலசேகராழ்வாரின் பெண்ணின் பெயர் என்ன ? அவள் யாரை மணந்தாள் ? அவள் எங்கு எழுந்தருளியிருக்கிறாள் ?",
"குலசேகராழ்வாரின் பெயரில் எந்த இடங்கள் ஸ்ரீரங்கம் மற்றும் திருமலையில் வழங்கப்படுகின்றன ?",
"குலசேகராழ்வார் ஸ்ரீவைஷ்ணவர்களுக்காகச் செய்த காரியம் எது ?",
"தினமும் ஸ்ரீரங்கயாத்திரை செல்ல விரும்பிய ஆழ்வார் யார் ?",
"அவர் எத்தனை ஆண்டுகாலம் இவ்வுலகில் எழுந்தருளியிருந்தார் ?",
"குலசேகராழ்வார் திருநாடலங்கரித்த இடம் எது ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
["குலசேகர ஆழ்வார்.",
"திருவஞ்சிக்களம். ",
"மாசி மாதம் புனர் வஸு நக்ஷத்திரம். ",
"பெருமாள் திருமொழி.",
"105.",
"பத்துப் பதிகங்கள். ",
"இருளிரிய.",
"கொல்லி காவலன், கூடல் நாயகன், கோழியர் கோன். ",
"த்ருடவ்ரதர்.",
"இளை என்கிற சேரகுலவல்லி. அவள் ஸ்ரீரங்கநாதனை மணந்தார். ஸ்ரீரங்க நாதனின் திருவடிக்கு நேரேயுள்ள அர்ஜுன மண்டபத்தினுள்ளே தனி ஸந்நிதியில் எழுந்தருளியிருக்கிறாள்.",
"ஸ்ரீரங்கத்தில் மூன்றாவது ப்ராகாரம் குலசேகரன் வீதி என்று வழங்கப்படுகிறது. திருமலையில் திருவேங்கடமுடையான் திருமுன்பே உள்ள படிக்கட்டு குலசேகரன்படி என்று வழங்கப்படுகிறது.",
"ஸ்ரீவைஷ்ணவர்கள் மீது திருட்டுக் குற்றம் சாட்டப் பட்டபொழுது அவர்கள் திருடியிருக்க மாட்டார்கள் என்று பாம்பு உள்ள குடத்தில் கையை விட்டு சத்தியம் செய்ய, பாம்பு தீண்டாமலிருந்தது. ",
"குலசேகரப்பெருமாள். ",
"67 ஆண்டுகள். ",
"திருக்குருகூருக்கு அருகிலுள்ள பிரம்மதேசம் என்கிற மன்னார் கோவில்.",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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