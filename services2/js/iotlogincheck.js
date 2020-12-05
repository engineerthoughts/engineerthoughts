var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
var unvalidateini;
var pwdvalidateini;


function getvalfirebase()
{	
var un = document.getElementById ("username").value;
var pwd = document.getElementById ("password").value;
//console.log(un);
//console.log(pwd);

		
	if(un == null || un == "")
	{
		document.getElementById ("txtmsgblank").style.display = "block";
		document.getElementById ("txtmsgcrct").style.display = "none";
		document.getElementById ("txtmsgwrong").style.display = "none";
	}
	else if(pwd == null || pwd == "")
	{
		document.getElementById ("txtmsgblank").style.display = "block";
		document.getElementById ("txtmsgcrct").style.display = "none";
		document.getElementById ("txtmsgwrong").style.display = "none";
	}

	if(pwd != "")
	{
		
		if(un != "")
		{
			//console.log("not null");
			document.getElementById ("txtmsgblank").style.display = "none";
			document.getElementById ("txtmsgwrong").style.display = "block";
			document.getElementById ("txtmsgcrct").style.display = "none";
					
			const database = firebase.database();
			firebase.database().ref('userpwd'+un.toUpperCase()).on('value',function(snapshot)
			{
				var snapval = snapshot.val();
				//console.log(snapval);
				
				if(snapval != null)
				{
					firebase.database().ref('userpwd'+un.toUpperCase()).on('value',function(snapshot)
					{
						//console.log(snapshot.val().iotpassword);
						pwdvalidateini = snapshot.val().iotpassword;
						//console.log(snapshot.val().iotusername);
						unvalidateini = snapshot.val().iotusername;
						validate(unvalidateini,pwdvalidateini);
					});
				}
			});
			//setTimeout(function(){validate()},3000);			
		}
	}
}

function validate(getvalfromun1,getvalfrompwd1)
	{
		var un = document.getElementById ("username").value;
		var pwd = document.getElementById ("password").value;
		
		//var pwdvalidate = 123;
		var unuservalidate = getvalfromun1;
		var pwdvalidate = getvalfrompwd1;
		
		//console.log(un.toUpperCase());
		//console.log(pwd);
		//console.log(unuservalidate);
		//console.log(pwdvalidate);
		
		if(un.toUpperCase() == unuservalidate)
		{
			if(pwd == pwdvalidate)
			{	
				/*const database = firebase.database();
				console.log("db");
				database.ref('userpwd'+un).set
				({ iotusername: un,	iotpassword: pwd });*/
				//console.log("correct");
				document.getElementById ("txtmsgcrct").style.display = "block";
				document.getElementById ("iotloginwindow").style.display = "none";	
				document.getElementById("hiuser").innerHTML = "Hi " + un.toUpperCase();
				document.getElementById("iotdashboard").style.display="block";
				templightfanrelaycol();
				
			}
			else
			{
				document.getElementById ("txtmsgwrong").style.display = "block";
				document.getElementById ("txtmsgcrct").style.display = "none";
			}
		}

	}

