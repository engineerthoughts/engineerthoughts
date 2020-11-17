function myFunctionfirst()
		{
			document.getElementById("myLevel").value = "1";
		}
		function myFunctionlast()
		{
			var lengthminus1 = Englishworddic.length - 1;
			var maxvaluecheck = Math.ceil(lengthminus1 / 10);
			document.getElementById("myLevel").value = maxvaluecheck;
			
		}
		function myFunctioninc() 
		{
			var lengthminus1 = Englishworddic.length - 1;
			var maxvaluecheck = Math.ceil(lengthminus1 / 10);
			var currval = document.getElementById("myLevel").value;

			if(currval<maxvaluecheck)
			{
				document.getElementById("myLevel").stepUp(1);
			}
			if(currval == maxvaluecheck -1)
			{
				document.getElementById("inc").style.display="none";
			}
			
			if(startval>=0)
				{
				startval = startval+10;
				endval = endval+10;
				}
			else 
				{
					startval = 0;
					endval = 10;
				}
			}
			function myFunctiondec() 
			{
				var currval = document.getElementById("myLevel").value;
				
				
				if(currval>1)
				{
					document.getElementById("myLevel").stepDown(1);
					document.getElementById("inc").style.display="";
				}
				
				if(startval>0)
					{
					startval = startval-10;
					endval = endval-10;
					}
				else 
					{
						startval = 0;
						endval = 10;
					}
			}
		function updatetable()
		{
		var n = 0;
		var table = document.getElementById("TableList");
			var getinputval = document.getElementById("myLevel").value

			var lengthminus1 = Englishworddic.length - 1;
			var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{
					
					if (typeof(Englishworddic[tableindexval]) != 'undefined') 
					{
					
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 1;
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
						tableindexval = tableindexval - 1;
						n = n+1;
					}
					else
					{
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval - 1;
						n = n+1;
					}
				}
		}
	function firstFunction()
		{
			var startval = 0;
			var endval = 10;
			var n = 0;
				var table = document.getElementById("TableList");
				var getinputval = document.getElementById("myLevel").value
				var lengthminus1 = Englishworddic.length - 1;
				var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
				document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
				
					for (var i = startval; i < endval; i++)
					{

						if (typeof(Englishworddic[tableindexval]) != 'undefined') 
						{
						
							var idgenrowcol1 = "row".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = i + 1;
							
							var idgenrowcol2 = "row".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];					
							
							var idgenrowcol3 = "row".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
							tableindexval = tableindexval - 1;
							n = n+1;
							document.getElementById("inc").style.display="";
						}
						else
						{
							var idgenrowcol1 = "row".concat(n+1,"col1");
							document.getElementById(idgenrowcol1).innerHTML = "";
							
							var idgenrowcol2 = "row".concat(n+1,"col2");
							document.getElementById(idgenrowcol2).innerHTML = "";					
							
							var idgenrowcol3 = "row".concat(n+1,"col3");
							document.getElementById(idgenrowcol3).innerHTML = "";
							tableindexval = tableindexval - 1;
							n = n+1;
							document.getElementById("inc").style.display="";
						}
					}
		}
		function lastfunction()
		{
		
		var n = 0;
		var table = document.getElementById("TableList");
			var getinputval = document.getElementById("myLevel").value

			var lengthminus1 = Englishworddic.length - 1;
			var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			var startval = ((Math.ceil(lengthminus1 / 10))*10) - 11;
			var endval = (Math.ceil(lengthminus1 / 10))*10;
			document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{
					
					if (typeof(Englishworddic[tableindexval]) != 'undefined') 
					{
					
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 2;
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
						tableindexval = tableindexval - 1;
						n = n+1;
						document.getElementById("inc").style.display="none";
					}
					else
					{
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval - 1;
						n = n+1;
						document.getElementById("inc").style.display="none";
					}
				}
		}
		var startval = 0;
		var endval = 10;
		var n = 0;
			var table = document.getElementById("TableList");
			var getinputval = document.getElementById("myLevel").value
			var lengthminus1 = Englishworddic.length - 1;
			var tableindexval = lengthminus1 - ((getinputval - 1) * 10);
			document.getElementById("totalpagesdisp").innerHTML = " of " + Math.ceil(lengthminus1 / 10);
			
				for (var i = startval; i < endval; i++)
				{

					if (typeof(Englishworddic[tableindexval]) != 'undefined') 
					{
					
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = i + 1;
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = Englishworddic[tableindexval];					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = Germanworddic[tableindexval];
						tableindexval = tableindexval - 1;
						n = n+1;
					}
					else
					{
						var idgenrowcol1 = "row".concat(n+1,"col1");
						document.getElementById(idgenrowcol1).innerHTML = "";
						
						var idgenrowcol2 = "row".concat(n+1,"col2");
						document.getElementById(idgenrowcol2).innerHTML = "";					
						
						var idgenrowcol3 = "row".concat(n+1,"col3");
						document.getElementById(idgenrowcol3).innerHTML = "";
						tableindexval = tableindexval - 1;
						n = n+1;
					}
				}