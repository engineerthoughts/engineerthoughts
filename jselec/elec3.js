function elec() {
	var getimage = document.getElementsByClassName("img3elec");
	getimage[0].src = 'images/dynamo/dynamo.png';	
	getimage[1].src = "images/dynamo/1.gif";
	getimage[2].src = "images/dynamo/2.png";
	getimage[3].src = "images/dynamo/3.png";
	getimage[4].src = "images/dynamo/4.png";
	getimage[5].src = "images/dynamo/5.png";
	getimage[6].src = "images/dynamo/6.jpg";
	getimage[7].src = "images/dynamo/7.png";
	getimage[8].src = "images/dynamo/8.jpg";
	getimage[9].src = "images/dynamo/9.png";
	
	var title = ["Automatic Watering System for Plants","BB","CC"];
	var gettitle = document.getElementsByClassName("HEAD2"); // title is an array
	gettitle[0].innerHTML=title[0];
	
	var headings = 
	["Introduction:",
	"Kickstarting :",
	"Components :",
	"Little theory :",
	"Dynamo :",
	"Electronic Circuits :",
	"Bridge rectifier :",
	"Voltage Regulator L7805 :",
	"Capacitor :",
	"Simulation :",
	"Connections :",
	"Explanation and Calculations :",
	"Set 1:",
	"Practical Outcomes :",
	"Theoritical Calculation :",
	"Pictures :"
	];
	var getheadings = document.getElementsByClassName("head1index"); // headings is an array
	getheadings[0].innerHTML=headings[0];
	getheadings[1].innerHTML=headings[1];
	getheadings[2].innerHTML=headings[2];
	getheadings[3].innerHTML=headings[3];
	getheadings[4].innerHTML=headings[4];
	getheadings[5].innerHTML=headings[5];
	getheadings[6].innerHTML=headings[6];
	getheadings[7].innerHTML=headings[7];
	getheadings[8].innerHTML=headings[8];
	getheadings[9].innerHTML=headings[9];
	getheadings[10].innerHTML=headings[10];
	getheadings[11].innerHTML=headings[11];
	getheadings[12].innerHTML=headings[12];
	getheadings[13].innerHTML=headings[13];
	getheadings[14].innerHTML=headings[14];
	getheadings[15].innerHTML=headings[15];
	
	var paragraph = 
	["In the day to day life, we all run for the charging of the mobile phones and the charging plugs. But whatif you could charge your phone while going on the cycle ride. This is the very old concept which all your father and forefathers must beknowing, it is none other than using the dynamo for Charging our phone. When we started thinking of the engineering projects for ahobby, the first thing we saw was the old dynamo in old father’s cycle. We started working on charging the phone with it and making a small emergency light charged with it. Further, read this blog to know how to make the circuit for this and make use of the old dynamo.Also to get a short note of the basic of building an own circuit. Also make a look at our explanation video on it in the link below.",
	"You may think what is the relation with the cycle and dynamo, definitely, there is no relation lol. This is to make you aware of some quick tips before you start reading the project. When we started checking the voltage from the dynamo, we thoughts was DC one, we asked some they said it was pulsating DC, AC etc and no proper information present on the internet too….. It was quite confusing for us to decide what form of the current it was !. The only way left for us was to experiment it. When we started rotating the wheel, the voltage was oscillating in the DC side and when the knob on the AC side was switched, the voltage was constant around (9-12 V) depending on the speed of the rotation. Thus half the process was confirmed that the power from the dynamo was AC. Might be some models may have the DC power, just experiment out yourself. Points to be noted :<br>Power from the Dynamo is AC in our case.<br>There can be other type of the dynamo check it out for your case.",
	"The some of the important components for the making of this project is as follows: <br><br>1. Cycle with dynamo<br>2. Diodes<br>3. Voltage Regulator L7805<br>4. Capacitor<br>5. Usb adaptor<br>6. Definitely some wires, solder iron<br>7. Additionally, glue gun or any adhesive etc",
	"Greek word dynamis, meaning force or power. word 'dynamo' was coined by Werner von Siemens in 1882.<br>Dynamo converts the mechanical energy into the Electrical energy by Fleming's Right-hand",
	"As we seen before that in our dynamo the current generated was Ac one. But unfortunately, our phones charge in the Dc source. Thus we need a proper and simple electronic circuit for this conversion.",
	"The bridge rectifier is one where the sine wave of the AC supply is converted to the DC of the every alternating half cycles.",
	"This is a voltage regulator which is used to regulate the output Dc Voltage to the required value. In this case, we use the 5 Voltage regulator. We can also any buck converters. To Make it simple here we have used this one. ",
	"Many Non Electrical students might be asking this question that what is the role of the capacitor here. As all the works have been completed by the rectifiers and the voltage regulator. Answer: The answer to this little interesting if you are patient enough to read. Even though the DC of the required voltage is formed, there is the presence of voltage ripples and distortions, Capacitor with its unique quality of charging and discharging, compensates the voltage ripples and gives the steady DC voltage. If you are interested to know how it happens I will be making a separate video on it. ",
	"Before Practically experimenting stuff, it is advised to stimulate in a software. Make the same connections as final. The output of the simulations is working good. There are as follows: ",
	"The connections are given as per the circuit diagram below.<br>1. At first, the connections were given on the breadboard( Which is the first experimenting thing of the circuit in Electrical.)<br>2. Then the Circuit was soldered to the PCB (printed circuit board).",
	"You may think it might think Calculations are little boring …. Don’t worry I am doing It with a practical example so go on….! Battery size 1500 mAh.",
	"If we drive a cycle for 2 minutes it charges 1.5% of the Battery<br>1.5% of 1500=22.5mAh for 2 min.<br>thus for 1min =11.25mAh<br>thus for 1hr (11.25* 60=675mAhie 0.675Ah)<br>the current passed at 0.675 A (approx)<br>Watts delivered by the dynamo is Power= Voltage X Current Power= 5V X 0.675A= 3.75W  ",
	"We practically build our circuit and tested in the real time and charging time and various details are measured. Cycled for a distance approximately around 2.6km, to our surprise the phone was charged around 10%. As it is a windows nokia phone with us. We are only able to calculate the details approximately in a app.",
	"(Power calculations are carried at the average cycle driving speed of 10 Km/h)<br>we all know this basic Speed formula ie (Speed= Distance /time).<br>With the known values we are calculating the Time.<br>Time= Distance/Speed<br>Time  = 2.6/10= 0.26hr<br>Time in min =16 min approx<br>charge per min=0.75<br>Total charge=0.75X16= 12 %<br>Thus theoretically and practical calculations are verified thus."
	];
	var getparagraph = document.getElementsByClassName("p2scribbles"); // paragraph is an array
	getparagraph[0].innerHTML=paragraph[0];
	getparagraph[1].innerHTML=paragraph[1];
	getparagraph[2].innerHTML=paragraph[2];
	getparagraph[3].innerHTML=paragraph[3];
	getparagraph[4].innerHTML=paragraph[4];	
	getparagraph[5].innerHTML=paragraph[5];
	getparagraph[6].innerHTML=paragraph[6];	
	getparagraph[7].innerHTML=paragraph[7];
	getparagraph[8].innerHTML=paragraph[8];
	getparagraph[9].innerHTML=paragraph[9];
	getparagraph[10].innerHTML=paragraph[10];
	getparagraph[11].innerHTML=paragraph[11];
	getparagraph[12].innerHTML=paragraph[12];
	getparagraph[13].innerHTML=paragraph[13];
	
  }
