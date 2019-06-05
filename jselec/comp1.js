function comp() {
 var getimage = document.getElementsByClassName("img3elec");

getimage[0].src = 'images/python/1.jpg';
getimage[1].src = 'images/python/2.jpg';
getimage[2].src = 'images/python/3.jpg';
getimage[3].src = 'images/python/4.jpg';
getimage[4].src = 'images/python/5.jpg';
getimage[5].src = 'images/python/6.jpg';
getimage[6].src = 'images/python/7.jpg';
getimage[7].src = 'images/python/8.jpg';
getimage[8].src = 'images/python/9.jpg';
getimage[9].src = 'images/python/10.jpg';
getimage[10].src = 'images/python/11.jpg';
getimage[11].src = 'images/python/12.jpg';
getimage[12].src = 'images/python/13.jpg';
getimage[13].src = 'images/python/14.jpg';


 var title = ["How to Make Your First Simple Software Using Python","BB","CC"];
 var gettitle = document.getElementsByClassName("HEAD2"); // title is an array
 gettitle[0].innerHTML=title[0];

var headings = 
 [
"Step 1: Intro to GUI",
"Step 2: Building Our Own Calculator",
"Sub Step 1: Creating GUI",
"Sub Step 2: Main Code",
"Step 3: Process",
"Step 4: Additional Contents (Part 1-Dialogue Box Exception Handling )",
"Exception Handling in python",
"Step 5: Additional Contents (Part 2-Creating EXE )",
"Step 6: Conclusion",
"1.Blender Batch Renderer",
"2.Electronic Drum Beats Arduino to computer connection"

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


var paragraph = 
 ["Hi, welcome to this Instructables. Here I am going to tell how to make your own software. Yes if you have an idea... but do know to implement or interested in creating new things then it is for you...... Prerequisite: Should have basic knowledge of Python.... LOL Nothing like that,<br><b>'There is nothing difficult in this world if you try'</b><br>With simple interest to make things you can move on to start your program. Even me at the beginning had a no Idea of python. Moreover as a Electrical at first I was afraid of Coding. Slowly I changed my mentality. If you are a beginner at programming, start with python makes a fast curve to learn and as the output is very fast you get very excited to learn. OK without wasting much time we can move on to the subject. <br>Here in this instructable I am only going to share how to make a simple GUI with python also how to make it into a Software with 'exe' and not much with python coding ..... you may refer youtube or udemy to learn Python course. you may install python from here : https://www.python.org/downloads/",
"First, we need to begin a GUI. Nothing but a Graphical User Interface for all your codes.<br>That is you might have run the program on the command line and got the output in the same. But to make your code interacting with the user you need an Interface to communicate.<br><b>Creating GUI with python is very easy... Lets start</b><br>There are many modules in the python which you can import and code your GUI. Tkinter is the built-in GUI for the python, It comes installed with your python software. Also, you may also try PyQT, Kivy(best for cross-platform ie same code in python can be used to create apk, exe or MAC software) https://kivy.org/#home<br>Here in this Instructables, I am going to use the Tkinter. The simple thing in python is that you can import other python files to your, same way you need to import the Tkinter python, as similar to #include in C.<br>from Tkinter import *<br>import Tkinter import tkMessageBox top = Tk() L1 = Label(top, text='HI') L1.pack( side = LEFT) E1 = Entry(top, bd = 5) E1.pack(side = RIGHT) B=Button(top, text ='Hello',) B.pack()<br>top.mainloop()<br><b>Explanations:</b> here Tk()refers to the class in the Tkinter module we are saving initializing to top, Label is the method(function as in other languages) to print a text in, Entry method to create a blank entry and Button is to create button , As simple as that .... isn't it pack is key to package everything it the layout.... finally main loop keeps everything visible until you close the GUI",
"Now we have seen a simple GUI with the buttons, So why to wait, lets start building a simple calculator with buttons.<br><b>Note:</b> There can be n number of ways of creating the code, here I only illustrate the code which is easier for me",
"Before going to the code we can create a GUI for our calculator application.<br>Here I am going to use only one button and 4-row entry for easy understanding.<br>thus simple copy paste of every label, entry and button we created of the previous step ... Don't panic by the length of the code...! haha <br>from Tkinter import *<br>import Tkinter import tkMessageBox<br>top = Tkinter.Tk()<br>L1 = Label(top, text='My calculator',).grid(row=0,column=1) L2 = Label(top, text='Number 1',).grid(row=1,column=0) L3 = Label(top, text='Number 2',).grid(row=2,column=0) L4 = Label(top, text='Operator',).grid(row=3,column=0) L4 = Label(top, text='Answer',).grid(row=4,column=0) E1 = Entry(top, bd =5) E1.grid(row=1,column=1) E2 = Entry(top, bd =5) E2.grid(row=2,column=1) E3 = Entry(top, bd =5) E3.grid(row=3,column=1) E4 = Entry(top, bd =5) E4.grid(row=4,column=1) B=Button(top, text ='Submit',).grid(row=5,column=1,)<br>top.mainloop(),",
"Here in our case what has to happen... just after entering 2 numbers and specifying the operation in between them, the answer has to be printed or displayed in the answer entry.<br>1.Submit button command:<br>We need to give to give the command to the button to call a method that is what is designed. Lets see...<br>B=Button(top, text ='Submit',command= processing).grid(row=5,column=1)<br>def proces():<br>number1=Entry.get(E1) number2=Entry.get(E2) operator=Entry.get(E3)<br>Here I have called the Method (function ) process, so after pressing the button program goes and knocks the door of the function process in simpler terms.<br>and get here means get the value the user has entered. Also, I stored in the 3 variables namely as number1, number2, operator<br>Just to make it meaningful I have kept process you may keep the name of the method as per your wish.",
"In this step, we need to process the input received from the user,<br>But by default, the value received is a string.<br>So how to convert it to an integer to perform calculation...?<br>So nothing to worry it is python and not C or C++ to squeeze your brain.<br>Simply enter the variable in int(variable) <br>number1= int(number1)<br>number2=int(number2)<br>Still, there is another problem... how to get the value of the operator (like +,-*/) to operate ???<br>Just make if statement for each and inside do the calculations.<br>number1=int(number1)<br>number2=int(number2) if operator =='+': answer=number1+number2 if operator =='-': answer=number1-number2 if operator=='*': answer=number1*number2 if operator=='/': answer=number1/number2<br>String in python is denoted by ' ' thats here in the if we are checking the string operator recived from the user to the string +,-,*/ etc, and storing the result in the answer variable.<br>Now at last we need to send the output to the answer entry,<br>this is done by the insert code.<br>Entry.insert(E4,0,answer)<br>thus finally our code looks like :<br>from Tkinter import *<br>import Tkinter import tkMessageBox def proces(): number1=Entry.get(E1) number2=Entry.get(E2) operator=Entry.get(E3) number1=int(number1) number2=int(number2) if operator =='+': answer=number1+number2 if operator =='-': answer=number1-number2 if operator=='*': answer=number1*number2 if operator=='/': answer=number1/number2 Entry.insert(E4,0,answer) print(answer)<br>top = Tkinter.Tk() L1 = Label(top, text='My calculator',).grid(row=0,column=1) L2 = Label(top, text='Number 1',).grid(row=1,column=0) L3 = Label(top, text='Number 2',).grid(row=2,column=0) L4 = Label(top, text='Operator',).grid(row=3,column=0) L4 = Label(top, text='Answer',).grid(row=4,column=0) E1 = Entry(top, bd =5) E1.grid(row=1,column=1) E2 = Entry(top, bd =5) E2.grid(row=2,column=1) E3 = Entry(top, bd =5) E3.grid(row=3,column=1) E4 = Entry(top, bd =5) E4.grid(row=4,column=1) B=Button(top, text ='Submit',command = proces).grid(row=5,column=1,)<br>top.mainloop()<br>WOW, you have successfully created the code of the calculator........!! Its time to celebrate..",
"<b>Heading Sounds like something Technical ....? Definitely not I will tell you the story why,.....</b><br>Consider you made this calculator and showing it to a friend.<br>He/she is a notorious person instead of typing the integer he types letters in the numbers entry and kids you ... what to do...? python produces the errors and stops right away....<br>Here comes the process of the pythons exception handling, also in many software and web pages produces alert or warning messages",
"The exception handling is as simple has saying try and if any error show warning.<br>Type the value of the in letters the console says Value error thus for it we can do the warning<br><b>Let us see how to do in our code:</b><br>def proces():<br>try: number1=Entry.get(E1) number2=Entry.get(E2) operator=Entry.get(E3) number1=int(number1) number2=int(number2) if operator =='+': answer=number1+number2 if operator =='-': answer=number1-number2 if operator=='*': answer=number1*number2 if operator=='/': answer=number1/number2 Entry.insert(E4,0,answer) print(answer) except ValueError: tkMessageBox.showwarning('Warning','Please enter the value in integer')<br>Here we have made simple warning dialogue box and here as before tkMessageBox.showwarning is the custom warning for Tkinter and in the bracket Warning denotes the heading of the dialogue box and the next shows the message.",
"Considering the fact that you have created your python code, and completely working after debugging errors... but there is a final problem, If you want to share your python code to others, they must be having the python installed this is not possible. Also If you wish not to disclose your code creating EXE is the best way.<br>thus to create the executable (exe) version or Apk (for Android ) must be made this can be made by freezing your code.<br>There are many such options to freeze your code one I would suggest is by using Pyinstaller.<br><b>step1:</b><br>http://www.pyinstaller.org/ Install from here and follow their steps if you cant understand ,watch you tube tutorials to install the pyinstaller software.<br><b>Step 2:</b><br>Then go to the folder where the code is present and press SHIFT +right click in mouse button and click open in command prompt or power shell depending on your OS version.<br>python pyinstaller.py --noconsole yourscript.py<br>pyinstaller.exe --onefile --windowed --name myapps --icon=yourico.ico yourscript.py<br>Thus you can also add your ico for your exe and bundle it up within one file with the second command.",
"Thus Its up to your interest to create the final software,... Thanks for reading I will upload the final code and the exe in my GitHub link >> https://github.com/ranga95/instructables-calculato…<br>Also, I have created 2 software",
"<b>Short Explanation:</b><br>Blender is the animation software which we are using to do animation kinds of stuff... if interested please vist>>http://engineerthoughts.com/anim.html also our youtube.<br>It really takes sooo long to render output, there is no option in the blender to pause and render between, thus I made a software for it... It is little easy..... not very difficult for me to code at the beginning without any help..finally was able to make it. (it taught me nothing is difficult if you try).",
"<b>Short Explanation:</b><br>It is a software which could read the piezo sensor from the Arduino and python software would play the music accordingly. ( This was made for my friend who asked it very long ....)<br>This Instructable is just an intro to create the software from the python as from I understanding,.... sorry If I was wrong in any part, as a beginner correct me in comments.<br>I will also add further in my Website : www.engineerthoughts.com<br>Soon I will make a tutorial for my software.<br>Feel free to ask any doubts in the comments section. I will be happy If you are benefited by this tutorial.<br>Thank God and everyone.<br>Be happy, God is with you... all the best <br><br>With love<br>(N.Aranganathan)",

];


var getparagraph = document.getElementsByClassName("p2scribbles"); // headings is an array

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

}