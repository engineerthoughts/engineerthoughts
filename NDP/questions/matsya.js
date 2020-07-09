function matsyaques() 
{
    functionname ="matsya";
    
var mudhalques = 
[
"தசாவதாரத்தில் முதல் அவதாரம் யாது ?",
"மத்ஸ்யாவதாரம் எம்பெருமான் எடுக்கக் காரணமாயிருந்த அசுரன் யார் ?",
"ஹயக்ரீவன் எங்கிருந்து தோன்றினான் ?",
"ஹயக்ரீவனின் மற்றொரு பெயர் என்ன ?",
"ஹயக்ரீவன் செய்த தவறு என்ன ?",
"ஹயக்ரீவனை ஒடுக்குவதற்கு எம்பெருமான் எடுத்த உருவம் யாது ?",
"மீனாக வந்த எம்பெருமான் யாருடைய கையில் கிடைத்தான்?",
"அவன் (ஸத்யவ்ரதன்) எங்கு தவம் மேற்கொண்டிருந்தான் ?",
"தன் கையில் கிடைத்த மீனை ஸத்யவ்ரதன் எங்கு சேர்த்தான் ?",
"மீன் என்னவாயிற்று ?",
"எவ்வளவு பெரியதாக மீன் வளர்ந்தது ?",
"கடைசியில் அந்த மீன் எங்கு கொண்டு விடப்பட்டது ?",
"கடலில் கொண்டுவிட்ட எத்தனை நாட்களுக்குள் உலகம் (ஜகத்) மூழ்கியது ?",
"அந்த பிரளய நீரில் வந்த படகில் யார் யார் இருந்தனர் ?",
"பெருங்காற்றினால் ஓடம் அலைந்த போது அதனை எங்கு கட்டி வைத்தார்கள் ?",
"எதனால் கட்டினார்கள் ? ",
"ஓடம் மீனின் கொம்பில் கட்டப் பட்ட போது அந்த 'மீன்' எவ்வளவு பெரியதாய் இருந்தது ?",
"பின்பு அந்த மீன் செய்தது என்ன ?",
"மச்சாவதாரம் கூறும் ஓர் திவ்ய பிரபந்த பாசுரத்தை கூறுக.",
"தசாவதாரத்தையும், திருமங்கையாழ்வார் குறிப்பிடும் பாசுரம் எது ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
[
"மத்ஸ்யாவதாரம். ",
"ஹயக்ரீவன்",
"பிரம்மனின் முகத்திலிருந்து ",
"சோமகன்.",
"பிரம்மனிடம் இருந்த வேதங்களை அபகரித்துக் கொண்டு சென்று விட்டான். ",
"மீன். (மத்ஸ்யம்) ",
"ஸத்ய. வ்ரதன் எனும் ராஜரிஷியிடம் ",
"க்ருதமாலா நதியின் கரையில். ",
"தன் கமண்டலத்திற்குள் சேர்த்துக்கொண்டான். ",
"(ஷணத்திற்கு க்ஷணம்) பெரிதாக வளர்ந்து கொண்டே வந்தது.",
"100 யோஜனை நீளமும் அதற்குத் தக்க பருமனாகவும் வளர்ந்தது. ",
"சமுத்திரத்தில்.",
"7 நாட்களுக்குள். ",
"சப்த ரிஷிகளும் சத்ய விரதனும் தாவரங்களும், மற்றும் பல பிராணிகளும் இருந்தன. ",
"மீனின் தலையில் முளைத்த கொம்பில். ",
"ஓர் நீண்ட பாம்பினால்",
"லசஷம் யோஜனை நீளம், பத்தாயிரம் யோஜனை பருமன். ",
"கட்டப்பட்ட படகைத் தாங்கிக் கொண்டு துள்ளி விளையாடி, அசுரன் கவர்ந்து சென்ற வேதத்தை மீட்டு நல்லோர்களை காத்தது. ",
"'கொழுங்கயலாய் நெடுவெள்ளம் கொண்ட காலம்.' (பெரிய திருமொழி 6-6-2)",
"மீனோடாமை. கற்கியுமானான் தன்னை - 8-8-10 பெரிய திருமொழி",
"ans7",
"ans7",
"ans8",
"ans8",
"ans8",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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