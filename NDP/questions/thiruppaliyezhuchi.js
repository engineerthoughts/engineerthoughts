function thiruppaliyezhuchiques() 
{
    functionname ="thiruppaliyezhuchi";
    
var mudhalques = 
[
"திருப்பள்ளியெழுச்சி பிரபந்தப் பாடல்கள் எந்த பெருமானைத் துயில் எழுப்புவனவாக அமைந்துள்ளன ?",
"'அழுங்கிய யானையின் அருந்துயர் கெடுத்த' நிகழ்ச்சி யாது?",
"திருப்பள்ளியெழுச்சிக் காலத்தில் எம்பெருமானை ஸேவிக்கத் திரண்டுள்ளவர்களாக ஆழ்வாரால் குறிப்பிடப்படுபவர் யாவர் ?",
"வானவர் பெருமானுக்குத் திருப்பள்ளியெழுச்சிக் காலத்தில் சமர்ப்பிக்க கொண்டு வந்துள்ள உபகரணங்கள் யாவை ?",
"உதய நேரத்தில் எதன் ஒளி சுருங்கி காணப்படும் ?",
"விடியற்காலையில் ஆயர்கள் மேற்கொள்ளும் பணி யாது ?",
"மாமுனி வேள்வியைக் காத்த நிகழ்ச்சி யாது ?",
"திருப்பள்ளியெழுச்சியில் இலங்கையர்கோன் என விளிக்கப்படுபவர் யார் ?",
"திருப்பள்ளியெழுச்சியில் கீதங்கள் பாடுபவர்கள் யார் யார் ? பயன்படுத்தும் இசைக்கருவிகள் என்ன ?",
"திருப்பள்ளியெழுச்சி காலத்தில் தொண்டரடிப்பொடியாழ்வார் பெருமானிடம் செய்யும் விண்ணப்பம் யாது ?",
"தொண்டரடிப் பொடியாழ்வார் தான் எப்படி சேவை சாதிப்பதாகக் கூறுகிறார் ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
[
"ஸ்ரீரங்கத்தில் பள்ளிக்கொண்டுள்ள ஸ்ரீரங்கநாதனை. ",
"கஜேந்திரமோக்ஷம். ",
"இந்திரன் உள்ளிட்ட தேவர்கள், மஹாதபஸ்விகள், மஹரிஷிகள், பன்னிரண்டு ஆதித்யர்கள், பதினோரு ருத்ரர்கள், மயில் வாகனன், கந்தர்வர்கள், வித்யாதரர்கள் ஆகியோர் திரண்டு வந்துள்ளதாக ஆழ்வார் குறிப்பிடுகிறார்.",
"பரிமளம் மிகுந்த புஷ்பங்கள், சங்கநிதி, பத்மநிதி, காமதேனு, ஒளி பொருந்திய கண்ணாடி ஆகியவற்றை கொண்டு வந்துள்ளனர். ",
"நக்ஷத்திரங்கள், சந்திரன்.",
"இடையர்கள் விடியற்காலையில் கறவைகளை (பசு, எருமை) கட்டவிழ்த்து புல் மேய அனுப்புவர். ",
"ராமர் விசுவாமித்திரருடைய யாகத்தை காக்க அரக்கர்களை அழித்தமை. ",
"விபீஷணாழ்வான். ",
"தும்புரு, நாரதர் மற்றும் கின்னரர், யக்ஷர்கள், கருடர்கள், கந்தர்வர்கள் ஆகியோர், யாழ், குழல், மத்தளம் ஆகிய இசைக்கருவிகளைக் கொண்டு கீதங்கள் பாடுகின்றனர். ",
"தம்மைத் திருமால் அடியார்களுக்கு ஏவல் புரியும் பணிக்கு உட்படுத்துமாறு தொண்டரடிப்பொடியாழ்வார் பெருமானை நோக்கிப் பிரார்த்திக்கிறார். ",
"தொடையொத்த துளவமும் கூடையும் பொலிந்து தோன்றிய தோள் தொண்ட ரடிப்பொடி யென்னும் அடியன்",
"ans7",
"ans7",
"ans7",
"ans8",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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