function elec() {
 var getimage = document.getElementsByClassName("img3elec");

getimage[0].src = 'images/solar/1.jpg';
getimage[1].src = 'images/solar/2.jpg';
getimage[2].src = 'images/solar/3.jpg';
getimage[3].src = 'images/solar/4.jpg';
getimage[4].src = 'images/solar/5.jpg';
getimage[5].src = 'images/solar/6.jpg';
getimage[6].src = 'images/solar/7.jpg';
getimage[7].src = 'images/solar/8.jpg';
getimage[8].src = 'images/solar/9.jpg';
getimage[9].src = 'images/solar/10.jpg';
getimage[10].src = 'images/solar/11.jpg';
getimage[11].src = 'images/solar/12.jpg';


 var title = ["SMART WIRELESS SOLAR POWER MANAGEMENT","BB","CC"];
 var gettitle = document.getElementsByClassName("HEAD2"); // title is an array
 gettitle[0].innerHTML=title[0];

var headings = 
 [
"Solar Panel Facts and Details ( You May Move Ahead If You Know the Basics)",
"Step 1: LIST OF COMPONENTS",
"LIST OF COMPONENTS:",
"Step 2: MODES OF OPERATION",
"Step 3: MANUAL MODE",
"Step 4: Practical Construction",
"Note:",
"Step 5: Controller-WIFI ESP8266 NODEMCU",
"Step 6: AUTOMATIC MODE",
"Step 7: INPUTS OR SENSOR",
"SOLAR SENSOR",
"MAIN SUPPLY SENSING:",
"Step 8: ARDUINO PROGRAMMING",
"Step 9: CONCLUSION"

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


var paragraph = 
 ["Hi.. Solar energy is abundant, pure form of energy. You could build your own solar system with the things you have in your home without wasting of much money and time. All you need is a bit of Enthusiasm and little time to experiment things. In this  we are going to see how to make use of the Home Inverter with simple Relay Logic Circuits. Here all you will learn to build your own solar panel circuit and understand the basics of what is happening in the relay circuits made in this and also to control and monitor via home wifi using ESP8266. ",
"Solar panel produces the Current due to the hitting of the photons from the sun on the silicon atoms.Thus in simple words, SUN LIGHT FALLS ON THE SOLAR PANEL AND CURRENT is produced.<br>The main thing to be noticed when considering the other form of Energy is that SOLAR PANEL is CURRENT SOURCE and not voltage source, thus by virtue of this the voltage will change depending on the load.<br>Power of the solar panel is equal to the product of the Open Circuit voltage and the Short Circuit current.for example for 100 watts pannel,Voc=20V or 21V and Isc=5 A thus P=100 watts (approx) (at full bright sun).<br>The Power produced will be directly proportional to the intensity of the Sun Light.There are two types of Solar Panel.<br>Mono crystalline (high efficient)<br>Poly crystalline ( comparatively less efficient) Thus without wasting much time lets get on to the making.......!",
"I won't waste much time in the selection and construction of the solar panel, I don't want you to get bored anymore. Thus I will move fast as possible ...!",
"1. SOLAR PANEL: Depending on the need of yours you may select the solar panel. If you plan to run the total loads completely in the Solar system, select the large-sized panels, In this case, I am using a 100 watts Solar Panel.<br>2. SOLAR CHARGE CONTROLLER:It is Very Essential as Solar panel is Current source. There are Two Types of Charge controllers namely : PWM charge controllers - Cost effective, Commonly used, slightly less efficient (Here I am using a PWM ) MPPT charge controllers- Costly, Used in large Solar Systems, High efficient<br>3. Battery : Proper selection of the Battery for the correct backup of the Load.You may make use of the Home Inverter battery.<br>4. Inverter: To run the AC (Alternating Current LOADS). Here you may use the home Inverter already installed<br>5. WIFI CONTROLLER : ESP8266 nodemcu is the cheap and best controller to control the system in WIFI. Can be programmed via the Arduino IDE.<br>6. RELAY :Electromechanical device which may act as the elctronic switch to control the Solar System. It consist of the electromagnet whenever the magnet is switched on the Switch is closed and viceversa. Thus it can be used to control the any higher voltages using the small microcontroller signal.<br>FOR FURTHER UNDERSTANDING OF THE TOPICS, Google it and be clear before going any further..... !",
"There are basically two modes of operation in this Solar connected Systems, They are :<br><b>Manual Mode: </b>As the name indicates it is controlled manually.But there are two different options for that they are : Physical switches: Here it is controlled by the switching ON and OFF by the conventional switches. Relay Switch : Here the same operation is carried out using the wifi web page to turn on and off the relay coils and monitored using ESP8266.<br><b>Automatic Mode: </b>Here it automatically runs depending on availability of the Solar and the Main Supply Power. Here the data can be monitored in the Webpage.",
"1. Connect the solar panel to the Charge controller, Charge controller to the battery and Battery to Inverter through a relay as per the Circuit Diagram. The relay must be of the correct specification. The main data to be noted is the relay coil voltage, Operating voltage and most importantly the current capacity of the relay. Considerations :<br>2. Solar panel to Charge controller maximum current =5 Amp ( so relay of 10 amp is enough)<br>3. Charge controller to battery maximum current =5 amp (so relay of 10 amp is enough)<br>4. Battery to Inverter maximum current =50 AMP ( relay of 70 or 80 amp is enough) Here for many of you even me have the same question, how it can be 50 amps at most. The answer to this question is simple when we look at the basic power equation.<br><br>Power=Voltage *current Consider 600va (watts)inverter (for basic understanding 4 tube light 4 fan inverter) Power is taken from battery = Power delivered to the load ( taking Ideal condition) Voltage of Battery (12Volts)* current form battery=600 VA 12*I=600 =>I=600/12=50Ampere Thus from the basic calculation, we can come to the conclusion that relay switch must withstand min 50 amp so a bigger relay is taken for the consideration and another important thing is that, this relay is activated by another normal relay. ",
"Make a main normal switch before connecting to the relay. This will ensure the proper control of the system in case of any undesirable problems.<br>Even though making a relay connections as per the diagram , it is also equally important to make the manual normal switches parallel to the relay as you cannot completely depend on the Micro controller for the operations as per the example.<br>Make the proper fuse to avoid the short circuit and overload faults.<br>In the connections between the inverter and the battery where we have seen there is the maximum amount of the current is passing, make sure to connect with the thick wire which resist, There use the MCB( miniature Circuit Breaker as the Switch) instead of the conventional switch.",
"Built in wifi control<br>Easily programmable with arduino IDE<br>Cheap and simple Connect the Relay Outputs to the GPIO of the controllers. Selection of the Port is as per wish. Kindly make sure you connect it in the proper I/O terminals of the microcontroller and mention the same in the program.",
"In this Mode of Operation, the controller automatically checks the power supply, solar input is present or not and relays are automatically made to ON and OFF depending on this. <br>The Basic Outline of the Automatic Mode of Operation is as follows: <br><br><b>Case1: </b>SOLAR OFF and MAIN ON Relay 1 OFF (solar to charge controller off) Relay 2 OFF (Charge controller to Battery off) Relay 3 ON (Battery to Inverter On) <br><b>Case2: </b> SOLAR OFF and MAIN OFF Relay 1 OFF (solar to charge controller off) Relay 2 OFF (Charge controller to Battery on) Relay 3 ON (Battery to Inverter On) <br><b>Case3: </b> SOLAR ON and MAIN ON Relay 1 ON (solar to charge controller on) Relay 2 ON (Charge controller to Battery on) Relay 3 OFF (Battery to Inverter off) <br><b>Case4: </b> SOLAR ON and MAIN OFF Relay 1 ON (solar to charge controller on) Relay 2 ON (Charge controller to Battery on) Relay 3 ON (Battery to Inverter On) Thus programming these cases makes the microcontroller to operate in the Automatic Mode. All these are monitored in the web page. ",
"Before we step onto the programming of the Manual and the Automatic Mode of Operation, We need to detect two factors, they are :<br>1. SOLAR on or off<br>2. MAIN SUPPLY on or off",
"The presence of the solar can be detected in various ways, there are no limitations, Some of the ways I suggest are as follows:<br>1. Using of the LDR, Photodiode, Phototransistors to detect the presence of the Sun light.<br>2. Using of the Voltage sensor (voltage bridge to measure the voltage in the microcontroller GPIO)<br>3. Use of the Relay or Optocoupler<br>To make the system and the code simple I used the relay as the sensor. I connected the relay (12V) coil to the solar input, So when the sunlight is bright enough to trigger the coil, the relay is on the switch will be closed, thus it can be taken as the presence of the solar energy. ",
"If you are Electrically strong you could make the sensor connection from the Main supply 220 volts by converting the 220 vac to (5 or 6 vac)(transformer)and to dc (rectifier) then connect it to the microcontroller input. <br>BUT IF YOU ARE LAZY LIKE ME ,I STRONGLY SAY THERE IS A VERY VERY SIMPLY MEASUREMENT SYSTEM<br>Take a waste phone charger and plug it in the supply , the output is 5 volt dc which is more than enough to power up the relay coil. When switch is closed the input is obtained to the microcontroller.",
"Thus we have come to the final part of this project , If you are familiar with the Ardunio programming , it is very easy step<br>1. Give the wifi name and password in the begining of the program.<br>2. Change the title and the headings as per your wish.<br>3. The webpage is basically a html code written in the ardunio IDE, you may also edit and change if you are good in the website designing.<br>4. After the code being uploaded on the serial monitor there will be the ip address where it must be connected.<br>5. From the device connected in the same wifi open that ipaddrees then the webpage will be Opened showing the details.",
"There are many things which can be added in this project. Some of the ideas which I have are as follows, you may also :<br>1. Usage of the Current sensor (hall effect sensor ) to measure the current and finally to show the status of the power utilized to form the Solar Panel.<br>2. Making an IOT based control to the same system.<br><br>If you have any doubts or any further Ideas feel free to comment and be confident to EXPERIMENT it...! <br><br>thank you and be happy ,,.. God is with you... all the best <br><br>With love <br>(N.Aranganathan)<br><br>MY HOME PROJECT IMAGES ARE",
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