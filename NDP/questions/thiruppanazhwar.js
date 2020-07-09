function thiruppanazhwarques() 
{
    functionname ="thiruppanazhwar";
    
var mudhalques = 
[
"திருப்பாணாழ்வார் அவதரித்த ஸ்தலம் எது ?",
"திருப்பாணாழ்வார் அவதரித்த மாதம் நக்ஷத்திரம் எது ?",
"லோகசாரங்க முனிவரின் தோளில் எழுந்தருளித் திருவரங்கக் கோயில் கருவறைக்குச் சென்றவர் யார் ?",
"திருப்பாணாழ்வார் இயற்றிய பிரபந்தம் எது ?",
"அமலனாதிபிரான் எத்தனை பாசுரங்கள் கொண்டது ?",
"அமலனாதிபிரானில் முதல் பாசுரத்தின் முதல் வார்த்தை எது ?",
"திருப்பாணாழ்வார் நாள்தோறும் எங்கிருந்து குணகீர்த்தனம் பண்ணினார் ?",
"அர்ச்சாவதார விசேஷமான திருவரங்கத்திலே மண்டிக்கிடக்கும் ஆழ்வார்கள் யாவர் ?",
"பிற திவ்யதேசத்து எம்பெருமானை விட அரங்கனுக்கு அமைந்த தனிப்பெருமைகள் என்ன ?",
"ஸ்ரீரங்கம் கோயில் எந்த ஆகம முறையில் நடைபெறுகிறது ?",
"பிற திவ்யதேசத்து எம்பெருமானை விட அரங்கனுக்கு அமைந்த தனிப்பெருமைகள் என்ன ?",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
[
"உறையூர்.",
"கார்த்திகை மாதம், ரோஹிணி நக்ஷத்திரம். ",
"திருப்பாணாழ்வார். ",
"அமலனாதிபிரான். ",
"பத்து.",
"அமலன். ",
"காவிரிக்கரையிலிருந்து.",
"தொண்டரடிப்பொடியாழ்வார், திருப்பாணாழ்வார்.",
"திருப்பாணாழ்வாரைத் தன்னுடன் சேர்த்துக் கொண்டமை.",
"பாஞ்சராத்ர ஆகமம், பாரமேசுவர ஸம்ஹிதை.",
"1. திருப்பாணாழ்வாரைத் தன்னுடன் சேர்த்துக் கொண்டமை. 2. ஆண்டாளை மணம் புரிந்து தன்னுடன் சேர்த்துக் கொண்டமை. 3. இராமானுஜரைத் தன்னிடத்திற்கு வரதரிடம் யாசித்து அழைத்து வந்தமை. 4. திருவாய்மொழிக்கு ஏற்றம் கொடுத்து உத்ஸவம் நடத்திக் கொள்ளுதல் 5. மாமுனிகளிடம் திருவாய்மொழி ஈடு காலக்ஷேபம் சிஷ்யனாய் நின்று கேட்டமை. 6. ஸ்ரீசைலேச தனியன் இயற்றி ஸமர்ப்பித்தமை. 7. எம்பெருமானார்க்கு உடையவர் என்று திருநாமம் சாற்றியமை. 8. நம்மாழ்வார் என்ற பெயரைச் சடகோபனுக்கு அளித்தமை. 9. பட்டரைத் திருமணத்தூணிடை தொட்டிலிட்டு தாலாட்டியமை. 10. திருமந்திரம், த்வயம், சர்மச்லோகம் (ரஹஸ்யத்ரயம்) இவற்றைப் பெரியபெருமாள், பெரியபிராட்டியாருக்கு அருளிச் செய்து ஆசார்ய பரம்பரையைத் தொடங்கி வைத்தார். 11. லஷ்மி நாத ஸமாரம்பாம என்று குருபரம்பரையை தொடக்கியமை மற்றும் பல எண்ணற்ற பெருமை. ",
"ans8",
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