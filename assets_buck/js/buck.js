

function cal(){
    var l=document.f1.L.value;
    var p=document.f1.p.value;
    var f=document.f1.freq.value;
    var c=document.f1.C.value;
    var rl=document.f1.rl.value;
    var d=document.f1.d.value;
    var vs=document.f1.vs.value;
    var vo_needed=document.f1.vo_needed.value;
    var k=2*f*l/rl;
    var rc=2*l*f/(1-d);
    var is=p/vs;

if (k<=1 && rl>=rc){
  // var vout_c=d*vs;
    
    var vout=(2*vs)/(1+Math.sqrt(1+(4*k/(d**2)))); 
   var v_diff=vout-vo_needed;
    var kcal=((((2*vs/vout)-1)**2)-1)*((d**2)/4);
    var rcal=2*l*f/kcal;   
    var ical=vout/rcal;
    var irmsD=Math.sqrt(1-d)*ical;
    var irmsM=Math.sqrt(d)*ical;
    var mode="Discontinous conduction";
    var d_needed=Math.sqrt((4*k)/((((2*vs/vo_needed)-1)**2)-1));
}else{
    
        var vout=d*vs;
        var v_diff=vout-vo_needed;
        var kcal="NA";
        var rcal="NA";
        var ical="NA";
        var mode="Continous conduction";
        var d_needed="NA"
    }

    var rrat=(vout**2)/p;
    var delta_il=(vout*(1-d))/(l*f);
    var delta_vl=delta_il/8*f*c;
    var ccrit=delta_il/8*f*0.48;
    var io=vout/rl;
    var irmsD=Math.sqrt(1-d)*io;
    var irmsM=Math.sqrt(d)*io;
  
    document.getElementById("mode").innerHTML=mode;
   document.getElementById("vout").innerHTML=vout;
       document.getElementById("vout_diff").innerHTML=v_diff;
   document.getElementById("d_needed").innerHTML=d_needed;
    document.getElementById("io").innerHTML=io;
       document.getElementById("rcrit").innerHTML=rc;

    
        document.getElementById("rrat").innerHTML=rrat;
   document.getElementById("delta_il").innerHTML=delta_il;
     document.getElementById("delta_vl").innerHTML=delta_vl;
       document.getElementById("ccrit").innerHTML=ccrit;
       document.getElementById("irmsD").innerHTML=irmsD;
       document.getElementById("irmsM").innerHTML=irmsM;
    
           document.getElementById("kcal").innerHTML=kcal;
       document.getElementById("rcal").innerHTML=rcal;
       document.getElementById("ical").innerHTML=ical;
    
    
    
    
}