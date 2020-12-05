function templightfanrelaycol()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
//console.log(un);
//console.log(pwd);
	const database = firebase.database();
		firebase.database().ref('userpwd'+un.toUpperCase()).on('value',function(snapshot)
		{
			var snapval = snapshot.val();
			//console.log(snapshot.val().iottemp);
			//console.log(snapshot.val().iotlight);
			//console.log(snapshot.val().iotfan);
			//console.log(snapshot.val().iotrelay);
			
			var iottempval = snapshot.val().iottemp;
			var iotlightval = snapshot.val().iotlight;
			var iotfanval = snapshot.val().iotfan;
			var iotrelayval = snapshot.val().iotrelay;
			
			document.getElementById("temptxtval").innerHTML = iottempval;
			
			//lights check
			
			if(iotlightval == "0")
			{
				offlightoff();
			}
			else if(iotlightval == "1")
			{
				onlighton();
			}
			
			//fans check
			if(iotfanval == "0")
			{
				offfanoff();
			}
			else if(iotfanval == "1")
			{
				onfanon();
			}
			
			//relay check
			if(iotrelayval == "0")
			{
				offrelayoff();
			}
			else if(iotrelayval == "1")
			{
				onrelayon();
			}
		});
}
function tempjsexe()
{
	document.getElementById("tempid").style.opacity = "100%";
	document.getElementById("lightid").style.opacity = "50%";
	document.getElementById("fanid").style.opacity = "50%";
	document.getElementById("relayid").style.opacity = "50%";
	
	document.getElementById("tempdivid").style.display = "block";
	document.getElementById("lightdivid").style.display = "none";
	document.getElementById("fandivid").style.display = "none";
	document.getElementById("relaydivid").style.display = "none";
}
function lightjsexe()
{
	document.getElementById("tempid").style.opacity = "50%";
	document.getElementById("lightid").style.opacity = "100%";
	document.getElementById("fanid").style.opacity = "50%";
	document.getElementById("relayid").style.opacity = "50%";
	
	document.getElementById("tempdivid").style.display = "none";
	document.getElementById("lightdivid").style.display = "block";
	document.getElementById("fandivid").style.display = "none";
	document.getElementById("relaydivid").style.display = "none";
	
}
function fanjsexe()
{
	document.getElementById("tempid").style.opacity = "50%";
	document.getElementById("lightid").style.opacity = "50%";
	document.getElementById("fanid").style.opacity = "100%";
	document.getElementById("relayid").style.opacity = "50%";
	
	document.getElementById("tempdivid").style.display = "none";
	document.getElementById("lightdivid").style.display = "none";
	document.getElementById("fandivid").style.display = "block";
	document.getElementById("relaydivid").style.display = "none";
}
function relayjsexe()
{
	document.getElementById("tempid").style.opacity = "50%";
	document.getElementById("lightid").style.opacity = "50%";
	document.getElementById("fanid").style.opacity = "50%";
	document.getElementById("relayid").style.opacity = "100%";
	
	document.getElementById("tempdivid").style.display = "none";
	document.getElementById("lightdivid").style.display = "none";
	document.getElementById("fandivid").style.display = "none";
	document.getElementById("relaydivid").style.display = "block";
}
function onlighton()
{
	document.getElementById("onlbut").style.backgroundColor = "#99B83C";
	document.getElementById("offlbut").style.backgroundColor = "#53504F";
	document.getElementById("onofflightid").src = "images/bulbon.jpg";
	document.getElementById("onlbut").disabled = true;
	document.getElementById("offlbut").disabled = false;
}
function offlightoff()
{
	document.getElementById("onlbut").style.backgroundColor = "#53504F";
	document.getElementById("offlbut").style.backgroundColor = "#99B83C";
	document.getElementById("onofflightid").src = "images/bulboff.jpg";
	document.getElementById("offlbut").disabled = true;
	document.getElementById("onlbut").disabled = false;
}
function onfanon()
{
	document.getElementById("onfbut").style.backgroundColor = "#99B83C";
	document.getElementById("offfbut").style.backgroundColor = "#53504F";
	document.getElementById("onofffanid").src = "images/fanon.gif";
	document.getElementById("onfbut").disabled = true;
	document.getElementById("offfbut").disabled = false;
}
function offfanoff()
{
	document.getElementById("onfbut").style.backgroundColor = "#53504F";
	document.getElementById("offfbut").style.backgroundColor = "#99B83C";
	document.getElementById("onofffanid").src = "images/fanoff.png";
	document.getElementById("offfbut").disabled = true;
	document.getElementById("onfbut").disabled = false;
}
function onrelayon()
{
	document.getElementById("onrbut").style.backgroundColor = "#99B83C";
	document.getElementById("offrbut").style.backgroundColor = "#53504F";
	document.getElementById("onoffrelayid").src = "images/relayon.png";
	document.getElementById("onrbut").disabled = true;
	document.getElementById("offrbut").disabled = false;
}
function offrelayoff()
{
	document.getElementById("onrbut").style.backgroundColor = "#53504F";
	document.getElementById("offrbut").style.backgroundColor = "#99B83C";
	document.getElementById("onoffrelayid").src = "images/relayoff.png";
	document.getElementById("offrbut").disabled = true;
	document.getElementById("onrbut").disabled = false;
}

//value update to firebase
function onlightonval()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;

	const database = firebase.database();

	var inputlow = 'userpwd'+un.toUpperCase();
	database.ref(inputlow).update
	({
	iotlight: '1'
	});
}
function offlightoffval()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
	const database = firebase.database();

	var inputlow = 'userpwd'+un.toUpperCase();
	database.ref(inputlow).update
	({
	iotlight: '0'
	});	
}
function onfanonval()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
	const database = firebase.database();

	var inputlow = 'userpwd'+un.toUpperCase();
	database.ref(inputlow).update
	({
	iotfan: '1'
	});
}
function offfanoffval()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
	const database = firebase.database();

	var inputlow = 'userpwd'+un.toUpperCase();
	database.ref(inputlow).update
	({
	iotfan: '0'
	});
}
function onrelayonval()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
	const database = firebase.database();

	var inputlow = 'userpwd'+un.toUpperCase();
	database.ref(inputlow).update
	({
	iotrelay: '1'
	});
}
function offrelayoffval()
{
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
	const database = firebase.database();

	var inputlow = 'userpwd'+un.toUpperCase();
	database.ref(inputlow).update
	({
	iotrelay: '0'
	});
}