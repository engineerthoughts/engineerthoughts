function mudhalvarques() 
{
    functionname ="mudhalalvargal";
    
var mudhalques = 
["முதலாழ்வார்கள் எனப்படுபவர் யாவர் ?",
"பொய்கையாழ்வார் அவதரித்த ஸ்தலம் எது ?",
"பொய்கையாழ்வார் எதிலிருந்து அவதரித்தார் ?",
"பொய்கையாழ்வார் அவதரித்த மாதம் நக்ஷத்திரம் எது ?",
"பொய்கையாழ்வார் இயற்றிய பிரபந்தம் எது ?",
"முதல் திருவந்தாதியில் எத்தனை பாசுரங்கள் உள்ளன ?",
"முதல் திருவந்தாதியில் முதல் பாசுரத்திலுள்ள முதல் வார்த்தை எது ?",
"திருக்கடல் மல்லையில் அவதாரம் செய்தவர் யார் ?",
"பூதத்தாழ்வார் எந்த மாதம் எந்த நக்ஷத்திரத்தில் அவதரித்தார் ?",
"பூதத்தாழ்வார் எதிலிருந்து அவதரித்தார் ?",
"பூதத்தாழ்வார் இயற்றிய பிரபந்தம் எது ?",
"இரண்டாம் திருவந்தாதியில் எத்தனை பாசுரங்கள் உள்ளன ?",
"இரண்டாம் திருவந்தாதியில் முதற்பாசுரத்திலுள்ள முதல் வார்த்தை எது ?",
"பேயாழ்வார் அவதரித்த ஸ்தலம் எது ?",
"பேயாழ்வார் எதிலிருந்து அவதரித்தார் ?",
"பேயாழ்வார் அவதரித்த மாதம், நக்ஷத்திரம் எது ?",
"பேயாழ்வார் இயற்றிய பிரபந்தம் எது ?",
"மூன்றாம் திருவந்தாதியில் எத்தனை பாசுரங்கள் உள்ளன ?",
"மூன்றாம் திருவந்தாதியில் முதற்பாசுரத்திலுள்ள முதல் வார்த்தை எது ?",
"முதலாழ்வார்கள் ஒன்றாகக் கூடிய ஸ்தலம் யாது ?",
"திருக்கோவலூர் பெருமாள் பெயர் என்ன ?",
"வார்கடலே நெய்யாகவும், ஆர்வமே நெய்யாகவும் விளக்கேற்றியவர்கள் யாவர் ?",
"அவ்வொளியில் சங்கு சக்கரத்துடன் திருமாலை காணப்பெற்றவர்?",
"பேயாழ்வார் யாரைத் திருத்தித் திருமாலடியாராக்கினார் ?",
"ques1",
"ques1",
"ques1",
"ques1",
"ques1"];

var mudhalans = ["பொய்கையாழ்வார், பூதத்தாழ்வார், பேயாழ்வார். ",
"காஞ்சிபுரம், திருவெஃகா.",
"தாமரைப் பொய்கையில் தாமரை மலரிலிருந்து அவதரித்தார்.",
"ஐப்பசி மாதம், திருவோண நக்ஷத்திரம்.",
"முதல் திருவந்தாதி.",
"100.",
"வையம்.",
"பூதத்தாழ்வார்.",
"ஐப்பசி மாதம் அவிட்ட நக்ஷத்திரம். ",
"பூப்பந்தலில் நீலோத்பல மலரில் அவதரித்தார். ",
"இரண்டாம் திருவந்தாதி.",
"100.",
"அன்பே",
"திருமயிலை.",
"கிணற்றில் செவ்வல்லிப் பூவிலிருந்து அவதரித்தார்.",
"ஐப்பசி மாதம் சதய நக்ஷத்திரம்.",
"மூன்றாம் திருவந்தாதி",
"100",
"திரு",
"திருக்கோவலூர்.",
"தேஹளீசன்.",
"பொய்கையாழ்வார், பூதத்தாழ்வார்.",
"பேயாழ்வார் ",
"திருமழிசையாழ்வாரைத் திருத்தித் திருமாலடியாராக்கினார்.",
"ans7",
"ans8",
"ans9",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9",
"ans8",
"ans9",
"ans7",
"ans8",
"ans9"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

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