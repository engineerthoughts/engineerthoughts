function mech() {
 var getimage = document.getElementsByClassName("img3elec");

getimage[0].src = 'images/cnc/1.jpg';
getimage[1].src = 'images/cnc/2.jpg';
getimage[2].src = 'images/cnc/3.jpg';
getimage[3].src = 'images/cnc/4.jpg';
getimage[4].src = 'images/cnc/5.jpg';
getimage[5].src = 'images/cnc/6.jpg';
getimage[6].src = 'images/cnc/7.jpg';
getimage[7].src = 'images/cnc/8.jpg';
getimage[8].src = 'images/cnc/9.jpg';
getimage[9].src = 'images/cnc/10.jpg';
getimage[10].src = 'images/cnc/11.jpg';


 var title = ["CNC an Overview With Practical Example [MADE EASY]","BB","CC"];
 var gettitle = document.getElementsByClassName("HEAD2"); // title is an array
 gettitle[0].innerHTML=title[0];


var headings = 
 [
"Advantages of Learning CNC:",
"INSIDE CNC",
"Step 2: CNC Classification",
"Step 3: CNC FUNCTIONS",
"Step 4: AUXILIARY FUNCTION-(M CODE)",
"Step 5: PREPARATORY OR MAIN FUNCTION(G-CODE)",
"Step 6: SPINDLE SPEED FUNCTION (S-CODE)",
"Step 7: FEED FUNCTION (F-CODE)",
"Step 8: TOOL FUNCTION (T-CODE)",
"Step 9: PROGRAMING",
"Step 10: STEPS IN PROGRAMING",
"Step 11: PRACTICAL EXAMPLE:",
"Step 12: CONCLUSION"
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
 ["This instructable is just to get overall basic knowledge and programming aspect of CNC machines and its programming with a program at the end. This Instructable may be taken as short notes of CNC and for refreshing material if you already have a knowledge of it. I think this would be greatly helpful for the Mechanical students who need to know about CNC and its importance in Core Company and also hobbyists knowing about it helps you a lot. Have taken efforts to give the correct informations which i learned ,but sorry if any errors present in this instructable....kindly forgive me as I am basically from Electrical Engineering. You may feel free to point it out if any. Moreover this is written in motive to share the known knowledge to the aspirants. So make use of it. Thus we move on from the very basic question of CNC.<br><b>What is CNC...?</b><br>CNC - Computer Numerical Control,in which Machining is based on the computer controls( any controller).<br><b>Why Number comes in play ?</b><br>This is a number based control where each number has the separate Value. Each number is assigned to separate function and work. Which we will be seeing it in the upcoming steps.",
"1. As a Core Mechanical Engineer, It is very essential for you to know CNC to get placed in Core.<br>2.Basics of CNC is only being used in the 3D printing Industry.<br>3. More for a Researchers or hobbyist to make new things, it is essential for them to know some basic of CNC, to make prototype.",
"The CNC basically constructed with the Controllers which determines various Machining Functions for each and every Machine Codes. (Mostly it might be a PLC -Programable Logic Controller)<br><br>The are mainly 2 main Controller companies ,They are as follows:<br><br>1. FANUC CNC CONTROLLER<br>2. SINENUMERIK CONTROLLER(siemens brand)<br><b>They are the Largest manufacturers of the CNC machine and CNC controllers in world.</b><br><br>In INDIA many manufacturers use FANUC machines<br><br>The Shape and Size of the output depend on the MOVEMENT OF THE TOOL or JOB and not because of the ROTATION. The Machining process may be broadly classified as follows:<br>Lathe machining-(JOB rotate and TOOL move)<br>Mill Machining-(JOB move and TOOL rotate)<br>Drill Machining-(JOB stationary and TOOL rotate)<br><br>You may see the you tube videos for the good underestanding about the working of the various Machining process. Note:<br>In this JOB means the material which you want to make to required shape and size.<br>'TOOL is simply a tool'<br>As simple to understand: In your Home , Knife is a tool and vegetables or bread is job , (TOOL knife) which deforms the shape of (JOB vegetable )as required by (YOU the MACHINE).",
"The CNC machine can be basically classified into two types as follows :<br><b>1. CNC Lathe Machine:</b><br>Horizontal Operations.<br>JOB will rotate and TOOL will move.<br>Can be called as TURNING CENTRE.<br><br><b>2. CNCMilling Machine :</b><br>Vertical Operations.<br>JOB will move and TOOL will rotate.<br>Can be called as MACHINING CENTRE.",
"CNC coding is basically in the Machine Level languages, there is a universal set of codes depending on the function and Operation the CNC does. The function of the CNC machine can be classified broadly as follows:<br>1. AUXILIARY FUNCTION(M-CODE)<br>2. PREPARATORY OR MAIN FUNCTION(G-CODE)<br>3. SPINDLE SPEED FUNCTION(S-CODE)<br>4. FEED FUNCTION(F-CODE)<br>5. TOOL FUNCTION(T-CODE)<br><b>NOTE:</b><br>1. Here I am focusing on the Lathe type CNC machines.<br>2. The code may change according to the CNC machines, some codes may be similar. So It is advised to see the Manual of the CNC manufacturer before proceeding any further.<br>3. Also it is required to know only very few CNC codes for understanding purpose only.<br>4. Most important codes may be printed on the CNC machine itself.",
"As the name indicates, the auxiliary function is subordinate actions in the CNC machine. It is also called as the M-CODE Some of the examples of this function are:<br>Spindle ON or OFF<br>Door Opening<br>Coolent Operation<br><br>Some of the Common M codes in all the CNC machine are as follows :<br>1. M03- Spindle ON clockwise<br>2. M04-Spindle ON counter clockwise<br>3. M05- spindle OFF<br>4. M07 or M08- Coolent ON<br>5. M09- Coolent OFF<br>6. M30- Program end/ reset/ rewind<br><b>NOTE: </b>Here spindle refers to part which holds the JOB.( Similar to the Hand in case of the Human ) The Spindly may be connected to the Induction or any other Motors, which makes it rotate. ",
"This main function mainly deals with the Tool Movement and other preparatory works. It is also called as the G-CODE. here I will share some of the basic codes for understanding purposes Some of the G CODES are as follows: <br><b>1. G00 or G0- Positiong the tool to the mark</b> <br>It refers to the rapid positioning of the Tool to the required point.<br>Speed is at the maximum.<br><b>2. G01- Linear Interpolation or Cutting feed</b> <br>It refers to the Stright line movement of the Tool.<br>It takes the shortest distance to the two points mentioned.<br>Speed can be set in this function<br><b> 3.G02 or G03- Circular Interpolation(G02 -clockwise and G03 - counter clockwise)</b> <br>This similar to the G01 code but it takes the curved path<br>So it is required for us to say about the radius and other specifications.<br><b> 4.G96 and G97 (CSS Mode- Constant Surface Speed control)</b> <br>This code controls the on and off feature in the Spindle Function , which may be elobrated in the next step.",
"This function of the CNC mainly focus on the Speed of the Spindle.<br>Rotation speed of Spindle cannot be set to any arbitary value , there is a calculation for the proper speed setup. Not maintaining the proper speed may lead to the improper FINISH of the JOB.<br>The speed of the Spindle mainly depends on the 2 main factors as follows :<br><br>1. Diameter of the Tool or Job<br>2. Cutting Speed (ie the Metal Removal rate)<br>CUTTING SPEED Vc= {(Circumference of the material or length removed per rev)*(number of revolution)}/ 1min Vc= π* D*n/1 mm/min Vc =π* D*n/1000 m/min now Rotation per min RPM n= (Vc*1000)/π* D RPM can be calculated easily. EXAMPLE: Consider a example of the material to be removed is of the diameter 100mm, cutting speed is 200 m/min given D=100mm Vc=200m/min RPM (n)=(Vc*1000)/π* D RPM (n)=(200*1000)/(3.141*100) n=636 RPM to be set for the good machining process. CODE:<br>1. S(rpm value)<br>Example S636 ---> this maintains the speed of the Spindle at that RPM.",
"This function deals with the movement of the Tool for the required output shape. The Speed of movement of the TOOL is can be set by the calculation as follows: Speed= D/T mm/min It can be coded as 2 methods as follows :<br>1. F (speed in mm/min) for example to set the speed of the tool as 100 mm/min we write as F100<br>2. F(mm/revolution)for example need to remove 100 mm material in 1 min then we write as F100<br><br>Both methods of describing the feed function is valid. NOTE:<br>1. But before using both you need to describe in the preparatory function as follows:<br>G94 for speed/min and G95 for mm/ revolution. ----->in G CODE B type G98 for speed/min and G99 for mm/ revolution. ----->in G CODE A type As said before there will be the slight difference in code for each and every CNC machine",
"This function determines the appropriate tool for the correct operation of the JOB. There will be set of Standard tools listed in the CNC and for each number feed will change the required tool automatically. The tool Code basically have 4 numbers the syntax of the code can be written as follows: CODE: T (tool number )(Offset Number) for example : T0101---->here the first 01 determines the tool number and the next 01 determines the offset number of the tool NOTE: The selection of the tool is totally different in the case of the Machine Centre that is Milling CNC types here it is written with the Auxiliary M code for example T01 M06",
"Thanks for your patient reading. This is the Important part in learning the CNC as it involves a better understanding of how the Codes are formulated for the required shape and size.<br>Before going any further you must be clear in ploting the 2d graph which is very basic part of the school higher Educations.<br>Here the points in the 2 D graph describe the exact notation of how the Tool must move and how speed the spindle must rotate.<br>There are 2 main methods of programming in the CNC, They are as follows :<br>1. Absolute method<br>2. Incremental method<br><b>Absolute method:</b><br>Here the ploting of the graph will be taken with reference to particular point<br>Easy and safe<br>G90 is the CODE for absolute programing.<br><b>Incremental Method:</b><br>Reference to the previous point of the Tool.<br>used only for small changes.<br>Experts with great experience can make use of it.<br>G91 is the CODE for the Incremental programing.<br><b>TIPS BEFORE WRITING CODE:</b><br>1. Make sure of the Tool Path<br>2. Establish absolute Virtual Zero point<br>3. Job centre is X=0<br>4. Job end face is Z=0<br>5. Assume it as a cartesian centre<br>6. Always use a decimal point after the number<br>7. End of the block is represented by semicolun (;).<br>8. Stoping of the program is made by emergency key, which exist the loop operation.",
"The Steps in the CNC programming are as follows: Pre-requisities<br>1. Make a diagram of the required job with the exact dimensions<br>2. Make the Virtual zero at the center of the JOB.<br>3. Mark the points where the Tool has to take path.<br>4. Note down the X,Z table<br><b>Steps :</b><br>1. Set absolute zero point<br>2. Select the Tool<br>3. Start the spindle with speed mentioning (as per the calculation)<br>4. Start the coolent( to avoid heating in the machining process)<br>5. Mention the points one by one ( always make sure the feed rate is low)<br>6. Finally when all points are over stop spindle<br>7. Stop coolent<br>8. Return the tool back to Home position<br>9. Program End M30<br>NOTES: These are the one's which I understand and It may differ to the other person or any standard material.",
"Here we can see the practical example of making it. here we need to write the coding to the Dimensions specified to the question.<br>STEP 1: Marking the points of motion of the TOOL<br>STEP 2: TABULAR COLUMN<br>STEP 3: CODING (all the remaning steps comes under to avoid unnecessary confusions) <br>G28 U0.0 W0.0;//Automatic reurn to machine reference point <br>T0101;// Tool select , <br>first 01 represents the tool and the next 01 represents offset tool<br>G0 X62.0 Z0.0;// Make sure the tool first placed little above the JOB<br>M03 S1000;// Start the spindle in clockwise direction and spindle speed is 1000 rpm <br>M08;// Coolent On<br>G01 X0.0 Z0.0 F0.1;// Set the JOB zero point and set the Tool feed speed <br>G01 X50.0 Z0.0;// from these plot the tabular column<br>G01 X50.0 Z-30.0;<br>G01 X54.0 Z-30.0;<br>G01 X54.0 Z-60.0;<br>G01 X58.0 Z-60.0;<br>G01 X58.0 Z-100.0;<br>G01 X62.0 Z-100.0;<br>M05;// Spindle off<br>M09;// Coolent off<br>G28 U0.0 W0.0;// Tool return to home position",
"Thus in this Instructable, I have made my full efforts to make sure that the reader will get a basic Idea of what is CNC and programming basics in it. I have made my efforts to cross check all details. I have given a gist of practical class in my internship from the expert of CNC. All comments improving this are welcomed. MY suggestions<br>Install the Simulation Software and Simulate the code on your own....!<br>Thanks,... ENRICH YOUR LIFE WITH KNOWLEDGE .... BE happy.. GOD is with you..!! <br><br>N.Aranganathan",

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