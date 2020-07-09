function thiruppallanduques() 
{
    functionname ="thiruppallandu";
    
var mudhalques = 
[
"திருப்பல்லாண்டு சேவிக்கும் பக்தர்கள் எந்த மந்திரத்தை மனத்திலிருத்த வேண்டும் எனப் பெரியாழ்வார் பணிக்கிறார்?",
"பல்லாண்டு பாடும் அடியவர்கள் எந்த குலத்தவர்கள் எனக் கருதப்படுவர் ?",
"பெரியாழ்வார் பகவத் கைங்கர்யம் பண்ணுபவர்கள் மேன்மையை எங்ஙனம் விளக்குகிறார் ?",
"நாகப்பகைக்கொடியான் என்பதன் விளக்கம் யாது ?",
"பல்லாண்டு சேவிப்பவர்கள் ஆசையுடன் மேற்கொள்ள வேண்டிய கடமை யாது ?",
"அத்தாணிச் சேவகம் என்று குறிப்பிடப்படுவது யாது ?",
"அடியோங்கள் நல்லகதியைப் பெற்று 'உய்ந்த நாள்' என்று பெரியாழ்வார் கருதுவது எந்த நாளை ?",
"திருப்பல்லாண்டு பிரபந்தத்தில் எம்பெருமானுடன் மங்களாசாஸனம் பெறும் திவ்ய ஆயுதங்கள் எவை ?",
"திருப்பல்லாண்டு பிரபந்தத்தில் குறிக்கப்படும் ஒரு திவ்ய ஆசார்யர் யார் ?",
"திருப்பல்லாண்டை ஸதா அநுஸந்திப்பதால் மறுமையில் கிடைக்கும் பயன் யாது ?",
"எம்பெருமானுக்குத் திருப்பல்லாண்டு பாட, பெரியாழ்வாரைத் தூண்டிய உணர்வு யாது ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
[
"'ஓம் நமோ நாராயணாய' என்கிற திருவஷ்டாக்ஷர மந்திரம் ",
"தொண்டர் குலம் அல்லது திருமாலடியார் குழாம் ",
"ஏழு தலைமுறையாக, தப்பாமல் வந்து 'பகவத் கைங்கர்யத்தில் ஈடுபடுகிறவர்கள்' என்று பெரியாழ்வார் குறிப்பிடுகிறார்.",
"பாம்புக்கு விரோதியான கருடனைக் கொடியாக உடைய எம்பெருமான் என்பதாகும். ",
"சங்கு சக்கரங்களாலே ஆச்சார்யன் மூலம் திருவிலச்சினை செய்து கொள்வது (சமாச்ரயணம்) பல்லாண்டு சேவிப்பவர்கள் மேற்கொள்ளத்தக்க நல்ல உபாயமாகும். ",
"எம்பொருமான் இருக்குமிடத்தில் கூடவேயிருந்து கொண்டு பிரியாமல் நின்று செய்கிற கைங்கர்யம் அத்தாணிச் சேவகம் எனப்படும். ",
"நாம், ஸ்ரீமந் நாராயணனுக்கே அடிமைப்பட்டவர்கள் என்று அறிந்து கொண்டு அதை வாக்கினால் வெளிப்படுத்திய நாள் உய்ந்த நாள் ஆகும் எனப் பெரியாழ்வார் கருதுகிறார்.",
"சுடராழி, பாஞ்சசன்னியம், சார்ங்கம் என்னும் வில்.",
"திருக்கோட்டியூர் செவநம்பி. ",
"மறுமையிலும் பரமபதத்தில் பரமாத்மாவினுடைய பக்கத்தில் இருந்துகொண்டு பல்லாண்டு சேவிக்கும் பேறு (பெருமை) கிட்டும் எனப் பெரியாழ்வார் பலசுருதியில் வெளியிடுகிறார். ",
"எம்பெருமானுக்குக் கண்ணெச்சில் வரலாகாது என்கிற பொங்கும் பரிவு.",
"ans7",
"ans8",
"ans8",
"ans8",
"ans9",
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