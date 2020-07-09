function desikarques() 
{
    functionname ="desikar";
    
var mudhalques = 
[
"பாதுகாஸஹஸ்ரம் என்ற உயர்ந்த கிரந்தத்தை இயற்றியவர் யார் ?",
"ஸ்ரீவேதாந்த தேசிகர் எந்த திவ்ய தேசத்தில் தோன்றினார் ?",
"ஸ்ரீவேதாந்த தேசிகர், அத்வைத மதத்தை நூறு வாதங்களால் கண்டித்து இயற்றிய நூல் யாது ?",
"ஸ்ரீவேதாந்த தேசிகரின் ஆசாரியர் யார் ?",
"ஸ்ரீவேதாந்த தேசிகர் எம்பெருமானாரைப் போற்றி இயற்றிய நூலின் பெயர் என்ன ?",
"ஸ்ரீஸ்வாமி தேசிகனுக்குப் பெரியபெருமாள் அருளிய விருதுகள் யாவை ?",
"தேசிகரின் இயற்பெயர் என்ன ?",
"தேசிகர் சிறுவயதில் (பால பருவத்தில்) யார் காலக்ஷேபத்திற்கு அழைத்துச் செல்லப்பட்டார் ?",
"முஸ்லிம்கள் படையெடுப்பின் பின் திருவரங்கத்தில் அமைதி நிலவ வேண்டும் என்று தேசிகர் இயற்றிய ஸ்தோத்திரத்தின் பெயர் என்ன ?",
"தேசிகர் இயற்றிய அமலனாதிபிரான் வ்யாக்யானத்தின் பெயர் என்ன ?",
"திருமந்திரத்வய சரமச்லோக விவரணமாக தேசிகரின் பிரசித்தமான நூல் எது ?",
"'ஸ்ரீமான் வேங்கடநாதார்ய.....' என்று தொடங்கும் தனியன் யாரைக் குறித்தது ?",
"தேசிகன் ஆண்டாளுக்காக இயற்றிய வடமொழித் துதி யாது ?",
"தேசிகர் இயற்றிய நாடகம் யாது ?",
"தேசிகரின் திருக்குமாரரின் பெயரென்ன ?",
"தேசிகர் ப்ராக்ருத மொழியில் எழுதிய நூல் எது ?",
"தேசிகரின் தாயார், தகப்பனார் திருநாமங்கள் யாவை ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1",
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
"ஸ்ரீ வேதாந்ததேசிகர். ",
"தூப்புல், காஞ்சீபுரம். ",
"சத்தூஷணி. ",
"அப்புள்ளார். ",
"யதிராஜ ஸப்ததி. ",
"வேதாந்தாசார்யர், ஸர்வதந்த்ர ஸ்வதந்தரர்.",
"வேங்கடநாதன்.",
"நடாதூரம்மாள். ",
"அபீதிஸ்தவம்.",
"முனிவாஹனபோகம்.",
"ஸ்ரீமத் ரஹஸ்யத்ரயஸாரம். ",
"ஸ்ரீதேசிகரை. ",
"கோதாஸ்துதி. ",
"ஸங்கல்பசூர்யோதயம். ",
"குமார வரதாசார்யர். ",
"அச்யுத சதகம்.",
"தாயார் - தோதாரம்மை தகப்பனார் - அநந்தசூரி",
"ans8",
"ans7",
"ans8",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

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