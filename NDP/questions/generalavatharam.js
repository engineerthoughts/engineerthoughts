function generalavatharamques() 
{
    functionname ="generalavatharam";
    
var mudhalques = 
[
"அவதாரம் என்ற சொல்லின் பொருள் யாது ?",
"பகவானின் முதல் அவதாரம் எது ?",
"பகவானின் அவதாரங்கள் எத்தனை ?",
"எம்பெருமானுடைய அவதாரங்களின் நோக்கம் யாது ?",
"அவதாரம் என்ற உடனேயே எம்பெருமானின் எந்த குணம் வெளிப்படுகிறது ?",
"எம்பெருமானின் அவதார காலத்தில் அவனுடைய திருமேனி நம்முடைய உடலைப் போன்றதா ?",
"நாம் பாவ புண்ணியங்களின் காரணமாக பிறப்பதுபோல் எம்பெருமான் அவதரிக்கிறானா ?",
"எம்பெருமான் அவதரிக்கும் காலம் எது ?",
"எம்பெருமானின் அவதாரம் யார் யாருக்கு இனியவையாய் இருக்கிறது ?",
"தசாவதாரங்கள் என்றால் என்ன ? அவைகள் எவை ?",
"பாகவதத்தில் எம்பெருமானின் எத்தனை அவதாரங்கள் குறிப்பிடப்பட்டுள்ளன ?",
"கிருத யுகத்தில் எம்பெருமான் எடுத்த அவதாரங்கள் எத்தனை ? அவை யாவை ?",
"திரேதா யுகத்தில் எம்பெருமான் எடுத்த அவதாரங்கள் எத்தனை? அவைகள் யாவை ?",
"துவாபர யுகத்தில் எம்பெருமான் எடுத்த அவதாரங்கள் எத்தனை ? அவை யாவை ?",
"கலியுகத்தில் எம்பெருமானின் அவதாரம் என்ன ?",
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
"பகவான் தன் பரத்வ (மேன்மை) நிலையை விட்டு இறங்கி வந்து மற்றவர் (வை) களோடு கலந்து பரிமாற எடுக்கும் தோற்றம்.",
"பிரம்மன், சிவன் இவர்கள் நடுவில் காக்கும் கடவுளாக விஷ்ணு என்ற பெயர் கொண்டு எடுத்தது முதல் அவதாரம். ",
"எண்ணிலடங்காதவை. (பிரமாணம் : சூழல் பலபல வல்லான் (நம்). விஷ்வக்ஸேன ஸம்ஹிதப்படி சுமார் முப்பது என்பாருமுண்டு. ",
"1. நல்லோர்களைக் காத்தல் 2. தீயோர்களைத் ஒறுத்தல் / ஒடுக்குதல் 3. தர்மத்தை நிலைநிறுத்துதல். ",
"சௌசீல்யம் - உயர்ந்தவன் தாழ்ந்தவர்களோடு தன் ஏற்றத்தையும் அவர்கள் தாழ்ச்சியையும் பாராமல் ஒரு நீராக கலத்தல்.",
"இல்லை. பரமபதத்தில் உள்ளது போல் (அப்ராக்ருதமான) சுத்த சத்வ மயமான திருமேனியோடே அவதரிக்கிறான். பிர : ஆதியம் சோதி உருவை அங்கு வைத்து இங்கு பிறந்த (நம்).",
"இல்லை. தன் இச்சையினாலேயும், கருணையாலும் அவதரிக்கிறான். ",
"தர்மத்திற்கு வாட்டம் ஏற்படும் போதும், அதர்மத்திற்கு ஏற்றம் ஏற்படும் போதும் அவதரிக்கிறான். ",
"ஆழ்வார்கள் போன்ற அடியவர்க்கும், 'ஏன் அவனுக்குமே கூட இனியவையாக உள்ளது. (பிர : கீதை)",
"எம்பெருமானின் அவதாரங்களுள் ஒரு 'பத்தினை எடுத்து 'தசாவதாரம்' எனப்படுகிறது. அவை மத்ஸ்ய , கூர்ம, வராஹ நரசிம்ம , வாமன, பரசுராம, இராம, பலராம, கிருஷ்ண, கல்கி எனப்படுகின்றன. ",
"24",
"5 - மச்சாவதாரம், கூர்மவதாரம், வராஹவதாரம், நரசிம்ம அவதாரம், வாமன அவதாரம். ",
"2 - பரசுராமன், ஸ்ரீ ராமன். ",
"2 - பலராமர், கிருஷ்ணர்.",
"கல்கி அவதாரம்",
"ans8",
"ans9",
"ans8",
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