  function elec() {
	var getimage = document.getElementsByClassName("img3elec");
	getimage[0].src = "images/MAKE_IOT_SIMPLE.png";
	
	getimage[1].src = "images/iot/1.png";
	getimage[2].src = "images/iot/2.png";
	getimage[3].src = "images/iot/3.png";
	getimage[4].src = "images/iot/4.png";
	getimage[5].src = "images/iot/5.png";
	getimage[6].src = "images/iot/6.png";
	getimage[7].src = "images/iot/7.png";
	getimage[8].src = "images/iot/8.png";
	
    //document.getElementById("img3elec").src = "images/MAKE_IOT_SIMPLE.png";
	
	var title = ["Make IOT Simple by ARANGANATHAN","BB","CC"];
	var gettitle = document.getElementsByClassName("HEAD2"); // title is an array
	gettitle[0].innerHTML=title[0];
	
	var headings = 
	["Step 1 Introduction",
	"Step 2 Creating Bot in Telegram",
	"Step 3 Installing bot in the raspberry pi",
	"Step 4 Code part",
	"Step 5 Conclusion"];
	var getheadings = document.getElementsByClassName("head1index"); // headings is an array
	getheadings[0].innerHTML=headings[0];
	getheadings[1].innerHTML=headings[1];
	getheadings[2].innerHTML=headings[2];
	getheadings[3].innerHTML=headings[3];
	getheadings[4].innerHTML=headings[4];

	var paragraph = 
	["In the current generation Internet is everything. Internet of Things plays a major role in the current world. Without wasting much time, we can move into the practical working of the IOT. Here we are going to control the led and also other exciting things from the telegram message.",
	"1.In this step install the Telegram app in the phone. Installation is as simple as the whats app installation.	<br>2.In the Telegram search for the Bot father and create a new bot by following the screenshots below. <br>3.Finally copy the HTTP API token.(do not share with others) and enter start in the bot.",
	"Thus bot is created and it must be run on any one of the device so that for any message we send it will respond accordingly. Here we are using the raspberry pi with the Api key and programming it in the python code. (It can also be run in our normal operating system).",
	"1.Installing the telegram module on the raspberry pi",
	"Before we start running the bot on the raspberry pi make sure you are running the proper version of the python 2. Also If you have any doubts regarding the initialization of the Raspberry pi you may look at this first 2 steps in this tutorial of mine To install the telegram module in the python in the command line of the raspberry pi enter following (the module name is telepot) sudo pip install telepot",
	"2.Execute the python script",
	"The Python script is executed in the command line using the following command  sudo python telegrambot.py",
	"Thus when we send the message to the bot, it responds coresspondingly.          In the code we are going to teach the bot to respond to our commands.            Here I am not going to teach you how the python script works as it would be more explanatory.",
	"import RPi.GPIO as GPIO <br> import time, datetime <br> import telepot <br> from telepot.loop import MessageLoop <br>GPIO.setmode(GPIO.BCM) <br>led = 23 <br>GPIO.setup(led,GPIO.OUT) <br>now = datetime.datetime.now() <br>def action(msg): <br>    chat_id = msg['chat']['id'] <br>    command = msg['text'] <br>    print 'Received: %s' % command <br>    if command == 'hi': <br>        telegram_bot.sendMessage (chat_id, str('Hi! Welcome to           Engineerthoughts.com')) <br>    elif command == 'time': <br>        telegram_bot.sendMessage(chat_id, str(now.hour)+str(':')+str(now.minute)) <br>    elif command == 'pic': <br>        telegram_bot.sendPhoto (chat_id, photo = 'https://raw.githubusercontent.com/engineerthoughts/engineerthoughts/gh-pages/E.png') <br>elif command == 'ledon': <br>        telegram_bot.sendMessage(chat_id, str('Led is on')) <br>        GPIO.output(led,True) <br>    elif command == 'ledoff': <br>        telegram_bot.sendMessage(chat_id, str('Led is off')) <br>        GPIO.output(led,False) <br>    else: <br>       telegram_bot.sendMessage(chat_id, str('Can\'t get you pls be clear!')) <br>telegram_bot = telepot.Bot('Enter your API id') <br>print (telegram_bot.getMe()) <br>MessageLoop(telegram_bot, action).run_as_thread() <br>print 'Up and Running....' <br>while 1: <br>time.sleep(10)",
	"<br>i.Here i have made hi and the reply for it is 'Hi! Welcome to Engineerthoughts.com' . Similarly for the each command you can customize your Ideas.<br>ii.Enter the your API ID here in this line <br>telegram_bot = telepot.Bot('Enter your API id') ",
	"Hurrah....! you have completed your First DIY IOT project.",
	"Further I leave it with yourself to improve the model by adding your creativity. Some of the Ideas of mine are.         <br><br>i.Home Automation -Connecting the Output to the relays.<br>ii.Can create your own custom server-which could respond to your own messages<br>iii.Make your own chatbot-which could reply messages like the Natasha in hike.<br><br>Thus the IDEAS are infinite if you could explore on your own. HOPE I have made a small start to IOT for you. Also comment your Ideas in the comments.<br><br>Thank you                                                      <br>N.Aranganathan"
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
  }
