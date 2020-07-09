function nathamunigalques() 
{
    functionname ="nathamunigal";
    
var mudhalques = 
[
"ஆழ்வார்கள் அருளிய நாலாயிர திவ்யப்பிரபந்தத்தையும் மீண்டும் உலகுக்குக் கொண்டு வந்தவர் யார் ?",
"நாதமுனிகளின் அவதாரஸ்தலம் எது ?",
"நாதமுனிகள் யாருடைய திருக்குமாரர் ?",
"நாதமுனிகள் எந்த மாதத்தில் எந்த திருநக்ஷத்திரத்தில் அவதரித்தார் ?",
"நாதமுனிகள் எந்த குலத்தைச் சார்ந்தவர் ?",
"நாதமுனிகளின் சிஷ்யர்களில் முக்கியமானவர்களைக் கூறு ?",
"நாதமுனிகள் நாலாயிரத்தைப் பற்றித் தெரிந்து கொள்ள உதவிய பதிகம் யாது ?",
"கண்ணி நுண் சிறுத்தாம்பை நாதமுனிகள் எத்தனை முறை ஜபித்தார் ?",
"நாதமுனிகளுக்கு நாலாயிரம் பாசுரங்களையும் கொடுத்தவர் யார்?",
"நாதமுனிகள் கங்கை கொண்ட சோழ புரத்தில் இருந்தபோது உலகுக்குச் செய்த நன்மை என்ன ?",
"நாதமுனிகளுடைய திருக்குமாரர் பெயர் என்ன ?",
"நாதமுனிகள் குருகைக் காவலப்பனுக்கு உபதேசித்த ரஹஸ்யம் எது ?",
"நாதமுனிகளுக்குப் பரமபத ப்ராப்தி எந்த ஊரில் கிடைத்தது ?",
"உய்யக் கொண்டாருடைய இயற்பெயர் என்ன ?",
"உய்யக்கொண்டாருடைய அவதார ஸ்தலம் எது ?",
"உய்யக்கொண்டார் எந்த மாதம் எந்த திருநக்ஷத்திரத்தில் அவதரித்தார் ?",
"நாதமுனிகள் உய்யக் கொண்டாருக்கு அருளிய ரஹஸ்யம் எது ?",
"மணக்கால் நம்பி அவதரித்த மாதம் நக்ஷத்திரம் எது ?",
"மணக்கால் நம்பி ஆளவந்தாரைக் காண வரும்போது தினமும் கொடுத்தது எது ?",
"நாதமுனிகள் தம் பேரரான ஆளவந்தாருக்குத் தந்தருள வைத்த ரஹஸ்யார்த்தங்கள் யார் மூலம் ஆளவந்தார்க்கு கிடைத்தது ?",
"ஸ்ரீமந் நாதமுனிகளுடைய திருப்பேரனார் பெயர் என்ன ?",
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
"ஸ்ரீமந்நாதமுநிகள்.",
"வீர நாராயணபுரம் என்னும் (காட்டு மன்னார்குடி) காட்டு மன்னார் கோயில்.",
"ஈச்வரபட்டாழ்வார். ",
"ஆனி மாதம் அனுஷம். ",
"சொட்டைக்குலம். ",
"குருகைக் காவலப்பன், உய்யக் கொண்டார், திருக்கண்ண மங்கையாண்டான். ",
"'ஆராவமுதே' என்னும் நம்மாழ்வாரின் திருவாய்மொழிப்பதிகம் ஆகும்.",
"பன்னீராயிரம் முறை.",
"நம்மாழ்வார் (யோக தசையில்) ",
"திவ்யப்பிரபந்தங்களை திவ்ய கானத்திலே பாட, தாளம், இசை முதலியவற்றை ஏற்படுத்தினார். ",
"ஈச்வரமுனிகள். ",
"யோகரஹஸ்யம். ",
"கங்கை கொண்ட சோழபுரம் அருகில். ",
"புண்டரீகாக்ஷர்.",
"திருவெள்ளறை.",
"சித்திரை மாதம், கார்த்திகை நக்ஷத்திரம்.",
"ஆழ்வார்களின் அருளிச்செயல் ரஹஸ்யம். ",
"மாசி மாதம் மக நக்ஷத்திரம். ",
"தூதுவளைக் கீரை. ",
"மணக்கால் நம்பி மூலம்.",
"யமுனைத்துறைவர், பின்னர் ஆளவந்தார் என்கிற - திருநாமம் இவருக்கு வாய்த்தது.",
"ans8",
"ans8",
"ans7",
"ans8",
"ans8",
"ans7",
"ans8",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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