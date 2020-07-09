function section6ques() 
{
    functionname ="section6";
    
var mudhalques = 
[
"'சரமோபாய நிர்ணயம்', 'அந்திமோபாய நிஷ்டை' என்கிற நூல்களை இயற்றியவர் யாவர் ?",
"நம்பிள்ளையின் காலக்ஷேபத்தை ஏடுபடுத்தியவர் யார் ?",
"'ஸ்ரீபகவத்குணதர்ப்பணம்' என்னும் நூலை இயற்றியவர் யார் ? எதைப் பற்றிய நூல் இது ?",
"ஸ்ரீகுணரத்ன கோசம் என்னும் நூலை இயற்றியவர் யார் ?",
"நம்பிள்ளை ஈடுவியாக்யானத்தை யாரிடம் கொடுத்தார் ?",
"நம்பிள்ளை எத்தனை ஆண்டுகள் வாழ்ந்திருந்தார் என்று பெரிய திருமுடி அடைவு கூறுகிறது ?",
"விலக்ஷண மோக்ஷாதிகாரி நிர்ணயம் என்னும் நூலை இயற்றியவர் யார் ?",
"பெரியவாச்சான் பிள்ளையின் திருக்குமாரர் பெயர் என்ன ?",
"நாலாயிரத்திற்கும் உரையியற்றியவர் யார் ?",
"பிள்ளைலோகாசார்யர் திருநாட்டுக்கு எழுந்தருளிய இடம் எது ?",
"பிள்ளைலோகாசார்யர் அருளிச்செய்த ரஹஸ்யங்கள் எத்தனை ?",
"வடக்குத் திருவீதிப் பிள்ளையின் திருக்குமாரர்கள் யார் யார் ?",
"ஈடுவ்யாக்யானம் என்று எதை அழைக்கிறோம் ?",
"ஈடுமுப்பத்தாறாயிரப் படியை நம்பிள்ளை சாதிக்க அதைப் பட்டோலை செய்தவர் யார் ?",
"ஸ்ரீவசன பூஷணத்திற்கு வ்யாக்யானம் இயற்றிய திருநாராயணபுரத்து ஆசார்யர் யார் ?",
"ஸ்ரீராமாயண தனிச்லோகி வ்யாக்யானம் செய்தவர் யார் ?",
"ஈடுமுப்பத்தாறாயிரப்படி என்பது எது ?",
"திருவாய்மொழிப்பிள்ளை அவதரித்த ஸ்தலம் எது ?",
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
"சரமோபாய நிர்ணயம் - நாயனாராச்சான்பிள்ளை அந்திமோபாயநிஷ்டை - நாயனாராச்சான் பிள்ளை. ",
"வடக்குத் திருவீதிப்பிள்ளை . ",
"ஸ்ரீபராசரபட்டர், ஸ்ரீஸஹஸ்ரநாமத்திற்கு வடமொழி உரை. ",
"பராசரபட்டர். ",
"ஈயுண்ணி மாதவப்பெருமாளிடம். ",
"105 ஆண்டுகள். ",
"எறும்பியப்பா. ",
"நாயானாராச்சான் பிள்ளை. ",
"பெரியவாச்சான் பிள்ளை. ",
"ஜ்யோதிஷ்குடி.",
"பதினெட்டு. ",
"1. பிள்ளை லோகாசார்யார் 2. அழகிய மணவாளப்பெருமாள் நாயனார்.",
"நம்பிள்ளையின் முப்பத்தாறாயிரப்படியை. ",
"வடக்குத் திருவிதிப்பிள்ளை ",
"ஆய் என்கிற ஜநந்யாசார்யர்.",
"பெரியவாச்சான்பிள்ளை ",
"திருவாய்மொழிக்கான நம்பிள்ளையின் வ்யாக்யானம்.",
"குந்தீநகரம்.",
"ans7",
"ans7",
"ans7",
"ans8",
"ans9",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

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