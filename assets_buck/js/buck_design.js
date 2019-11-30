function buckdescal(){
var p=document.f1.p.value;
var vs=document.f1.vs.value;
var vo=document.f1.vo.value;
vo=parseFloat(vo);
var f=document.f1.freq.value;
var delta_v_percent=document.f1.delta_v.value; 
var delta_v=(delta_v_percent*vo)/100;
var vo_ripple_max=vo+delta_v;
var vo_ripple_min=vo-delta_v;
var iomax=p/vo;
var d=vo/vs;
var delta_il=5*iomax;
var c=delta_il/(8*f*delta_v);
var l=vo*(1-d)/(delta_il*f);
var rrated=vo/iomax;

document.getElementById("ccrit").innerHTML=c*10e6;
document.getElementById("lcrit").innerHTML=l*10e6;
document.getElementById("iomax").innerHTML=iomax;
document.getElementById("rrated").innerHTML=rrated;
document.getElementById("d_needed").innerHTML=d;
document.getElementById("vo_ripple_max").innerHTML=vo_ripple_max;
document.getElementById("vo_ripple_min").innerHTML=vo_ripple_min;


}