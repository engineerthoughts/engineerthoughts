function parasuramaques() 
{
    functionname ="parasurama";
    
var mudhalques = 
[
"பரசு என்றால் பொருள் என்ன ?",
"பரசுராமர் என்று எதனால் அழைக்கப் பெற்றார் ?",
"பரசுராமரின் தாய் தந்தை பெயர் என்ன ?",
"பரசுராமர் எத்தனையாவது மகனாக பிறந்தார் ?",
"ஜமதக்கினி முனிவர் தன் பிள்ளைகளுக்கு இட்ட கட்டளை யாது ?",
"பரசுராமரின் தமையன்மார்கள் முனிவரின் கட்டளைக்கு என்ன கூறினர் ?",
"பரசுராமர் என்ன செய்தார் ?",
"பரசுராமர் தந்தையிடம் என்ன வரம் வேண்டினார் ?",
"பரசுராமரின் இச்செயல் நமக்கு எதை தெரிவிக்கிறது ?",
"பரசுராமரின் கர்வமும் அவதார சக்தியும் எதனால் மறைந்து போனது ?",
"பரசுராமரின் மாணவன் யார் ?",
"கர்ணன் எந்த உண்மையைக் கூறாமல் பரசுராமரிடம் மாணவராகச் சேர்ந்தான் ?",
"கர்ணனுக்குப் பரசுராமர் இட்ட சாபம் என்ன ?",
"வண்டாக வந்து கர்ணனின் தொடையைத் துளை செய்தவர் யார்?",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = 
[
"பரசு என்றால் கோடாரி என்று பொருள்.",
"கோடாரியை ஆயுதமாக கொண்டிருந்த காரணத்தால்.",
"தாய் ரேணுகாதேவி; தந்தை ஜமதக்கினி முனிவர். ", 
"ஐந்தாவது மகனாக பிறந்தார். ",
"ரேணுகாதேவி செய்த தவறுக்காகப் பிள்ளைகளை அழைத்து அவளைக் கொன்றுவிடுமாறு கட்டளையிட்டார். ",
"தம் தாயை கொல்ல அவர்கள் மறுத்து விட்டனர்.",
"பரசுராமர் ‘தந்தை சொல் மிக்க மந்திரமில்லை’ என்கிற / வாசகத்துக்கு இலக்கணமாக தாயை கொன்று விட்டார். ", 
"தன் தாயை மீண்டும் பெறும் வரத்தை அருளுங்கள் என்று கூறினார். ",
"தாய், தந்தையிடம் தனயன் காட்ட வேண்டிய பாசத்தையும் பரிவையும் அறிவதற்கு உதவுகிறது. ",
"இராமர் விஷ்ணு தனுசுவை மிக எளிதாக வளைத்து விட்டதால். ''உன் கையிலிருக்கும் அம்புக்கு என் தவத்தின் பயனாக எல்லாம் பலியாக்குகிறேன்” என்று கூறி அகன்றார்.",
"கர்ணன்.", 
"தான் ஒரு க்ஷத்திரியன் என்ற உண்மையை கூறாமல் அவரிடம் சேர்ந்து வில் வித்தை கற்றான். ",
"'நயவஞ்சகத்தோடு என்னிடம் கற்ற வித்தை ஆபத்து காலத்தில் அம்புகளை எய்ய உச்சரிக்க வேண்டிய மந்திரங்கள் உனக்கு மறந்து போகும்' என்று சாபம் கொடுத்தார். ",
"பாண்டவர் தூதர் பரந்தாமனே (திருமால்).",
"ans7", 
"ans7",
"ans8",
"ans7", 
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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