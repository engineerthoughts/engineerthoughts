function iotsignupfun()
{
	var siupun = document.getElementById ("usernamesignup").value;
	var siuppwd = document.getElementById ("passwordsignup").value;
	//console.log(siupun);
	//console.log(siuppwd);
	
	if(siupun != '')
	{
		const database = firebase.database();
		firebase.database().ref('userkey'+siupun.toUpperCase()).on('value',function(snapshot)
		{
			var snapval = snapshot.val();
			//console.log(snapval);
			
			if(snapval != null)
			{
				document.getElementById ("txtmsgusernamewrong").style.display = "block";	
				document.getElementById ("txtmsgusernamecrct").style.display = "none";	
				document.getElementById ("iotpasswordsignup").style.display = "none";
			}
			else
			{
				document.getElementById ("txtmsgusernamecrct").style.display = "block";
				document.getElementById ("txtmsgusernamewrong").style.display = "none";
				//document.getElementById ("signupusernamebutton").style.display = "none";
				document.getElementById ("iotpasswordsignup").style.display = "block";
			}
		});
	}
	
}

function iotsignupfirebase()
{
	var siupun = document.getElementById ("usernamesignup").value;
	var siuppwd = document.getElementById ("passwordsignup").value;
	var siuprpwd = document.getElementById ("rpasswordsignup").value;
	//console.log(siupun);
	//console.log(siuppwd);
	
	if(siuppwd != siuprpwd)
		{
			document.getElementById ("pwdmismatch").style.display = "block";
		}
	else if(siuppwd != '')
		{
			if(siuppwd == siuprpwd)
			{
				
				const database = firebase.database();

				var inputlow = 'userkey'+siupun.toUpperCase();
				database.ref(inputlow).set
				({
				iotusername: siupun.toUpperCase(),
				iotpassword: siuppwd
				});
				
				var inputlow1 = 'userpwd'+siupun.toUpperCase();
				database.ref(inputlow1).set
				({
				iottemp: '25 C',
				iotlight: '0',
				iotfan: '0',
				iotrelay: '0'
				});
				
				document.getElementById ("entiresignup").style.display = "none";
				document.getElementById ("pwdmatch").style.display = "block";
				document.getElementById ("loginpage").style.display = "none";
				
			}
		}
}