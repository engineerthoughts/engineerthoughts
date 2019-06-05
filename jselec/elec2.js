function elec() {
	var getimage = document.getElementsByClassName("img3elec");
	getimage[0].src = "images/watering/watering.png";
	
	getimage[1].src = "images/watering/1.png";
	getimage[2].src = "images/watering/2.jpg";
	getimage[3].src = "images/watering/3.jpg";
	getimage[4].src = "images/watering/4.png";
	getimage[5].src = "images/watering/5.png";
	getimage[6].src = "images/watering/6.png";
	getimage[7].src = "images/watering/7.jpg";
	getimage[8].src = "images/watering/8.jpg";
	getimage[9].src = "images/watering/9.jpg";
	getimage[10].src = "images/watering/10.jpg";
	getimage[11].src = "images/watering/11.jpg";
	getimage[12].src = "images/watering/12.jpg";
	
    //document.getElementById("img3elec").src = "images/MAKE_IOT_SIMPLE.png";
	
	var title = ["Automatic Watering System for Plants","BB","CC"];
	var gettitle = document.getElementsByClassName("HEAD2"); // title is an array
	gettitle[0].innerHTML=title[0];
	
	var headings = 
	["Introduction:",
	"Components Required:",
	"Little theory :",
	"Arduino Board:",
	"Relay:",
	"Soil Moisture Sensor:",
	"Water Pump:",
	"Circuit:",
	"Arduino to Soil Moisture Sensor:",
	"Arduino to Relay Module:",
	"Water Pump:",
	"Code:",
	"More Images:"
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
	
	var paragraph = 
	["We’ll start with the most basic reason why growing plants is so important: We can’t eat, drink, or breathe without them around. No plants = No life. Everyone will have some plants or may have roof garden in their houses. You can and you will water them. But what if when you go out for vacation, basically what would be the state of the plants when you are not with them. During summers, most people are too lazy to water the potted plants on their rooftop gardens every day. Explained in this section is a simple and exciting automatic plant watering system that you can build yourself in just a few hours. It is an Arduino based automatic plant watering system that uses a soil moisture sensor.",
	"The some of the important components for the making of this project is as follows: <br><br>1. Arduino Board <br>2. 4 Channel Relay Module <br>3. Soil Moisture Sensor <br>4. Water pump <br>5. Definitely some wires, solder iron <br>6. PVC Pipes and Joints <br>",
	"Arduino consists of both a physical programmable circuit board (often referred to as a microcontroller) and a piece of software, or IDE (Integrated Development Environment) that runs on your computer, used to write and upload computer code to the physical board..	",
	"A relay is an electrically operated switch. Many relays use an electromagnet to mechanically operate a switch, but other operating principles are also used, such as solid-state relays. ",
	"Soil moisture sensors measure the volumetric water content in soil. The relation between the measured property and soil moisture must be calibrated and may vary depending on environmental factors such as soil type, temperature, or electric conductivity. Soil moisture sensors are used in numerous research applications, e.g. in agricultural science and horticulture including irrigation planning, climate research, or environmental science including solute transport studies and as auxiliary sensors for soil respiration measurements. ",
	"A pump is a device that moves fluids (liquids or gases), or sometimes slurries, by mechanical action. Pumps operate by some mechanism (typically reciprocating or rotary), and consume energy to perform mechanical work by moving the fluid. ",
	"From Vcc of the Soil Moisture Sensor to the 3.3V in the Arduino Board.<br>From Ground of the Soil Moisture Sensor to the Ground in the Arduino Board.<br>From Analog/Digital Output of the Soil Moisture Sensor to the respective pin of the Arduino Board. <br>Here it is connected to Analog Pin 1 in the Arduino Board.",
	"From Vcc of the Relay module to the 5V in the Arduino Board.<br>From Ground of the Relay module to the Ground in the Arduino Board.<br>From Digital Pin 8 in the Arduino board to the corresponding Relay Input.<br>Here it is connected to Relay No 1 in the Arduino Board.",
	"Connect the Neutral Directly.<br>Cut the Phase wire and give it to the Relay Module as shown.",
	"Getting Input from sensor and storing it in the variable 'sensor'.<br>If the Sensor value is Low, then the motor will be in OFF State.<br>If the Sensor value is High, then the circuit will close and the motor will get ON.<br>According to the input value by the sensor the micro-controller Power on and off the Water pump by closing and breaking the circuit with the help of Relay Module.",
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
	
  }
