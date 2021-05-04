// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// ********** navbar fixed ************
const navbar = document.querySelector(".navbar");
//const navlink =  document.querySelector(".nav-link");
var navlink= document.getElementsByClassName("nav-link");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add("fixed");
    for(var u=0; u<navlink.length; u++){ 
    navlink[u].classList.add("fixedlink");}
  } else {
    navbar.classList.remove("fixed");
    for(var u=0; u<navlink.length; u++){ 
      navlink[u].classList.remove("fixedlink");}  }
});

function pad(n) {
  return n<10 ? '0'+n : n;
}
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position;
    if (navbar.classList.contains("fixed")) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains("fixed")) {
        position = element.offsetTop - 62;
      } else {
        position = element.offsetTop - 332 - 62;
      }
    }
    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});

//var obj={};
var units={};
units.avail=10;
units.con=50;
units.v=[220.14, 220.22, 220.25, 220.17, 220.34, 220.38, 220.47, 220.41, 220.15, 220.26];
units.c=[1.12, 1.02, 1.12, 1.11, 1.23, 1.04, 1.06, 1.07, 1.01, 1.19,1.09, 1.01, 1.05, 1.11,1.13];
units.pf=[0.9998,0.9999,0.9996,0.9995,0.9994,0.9993];
//obj.aunits =  document.getElementById("au").innerHTML;
/*setInterval(function() { myFunction(); }, 1000);
function myFunction(){
	//aunits=parseFloat(aunits);
	var d = new Car(100,20,1);
	var s=d.name;
    document.getElementById("au").innerHTML=s;
	
	var avail=60;
	
}*/

setInterval(()=>{
if(units.avail>0){
document.getElementById("au").innerHTML=units.avail--;}
else{
	document.getElementById("au").innerHTML=0;
}
if(units.avail>0){
document.getElementById("cu").innerHTML=units.con++;}
else{
	document.getElementById("cu").innerHTML=units.con+1;
}

if(units.avail>0){

    var len=units.v.length;
    var vno=Math.floor(Math.random()*(len));  
	  var vn = units.v[vno];
	document.getElementById("vol").innerHTML=vn+" V";

}
// else{
//   var lenq=units.v.length;
// 	var vn =units.v[Math.floor(lenq/2)];
// 	//tempv= parseFloat(units.v[vn]);
// 	document.getElementById("vol").innerHTML=vn+" V";
// }
else{
  var vn=0;
  document.getElementById("vol").innerHTML=vn+" V";
}
if(units.avail>0){
	
	var lenc=units.c;
	var lencc=lenc.length;
	var cno=Math.floor(Math.random()*(lencc)); 
	var  cn = units.c[cno] ;
	document.getElementById("cur").innerHTML= cn+" A";
}
// else{	
// 	var lenqc=units.c.length;
// 	var cn=units.c[Math.floor(lenqc/2)];
// 	document.getElementById("cur").innerHTML= cn + " A";
// }
else{
  var cn=0;
  document.getElementById("cur").innerHTML= cn+" A";
}


if(units.avail>0){

    var lenpf=units.pf.length;
    var pfno=Math.floor(Math.random()*(lenpf));  
	  var pfn  = units.pf[pfno];
	document.getElementById("pf").innerHTML=pfn;

}
// else{
//   var lenpf=units.pf.length;
// 	var pfn=units.pf[Math.floor(lenpf/2)];
// 	document.getElementById("pf").innerHTML=pfn;
// }
else{
  var pfn=0;
  document.getElementById("pf").innerHTML=pfn;
}

// Active Power
var ap1 = vn*cn; // V*I

var pfnew= (pfn*3.142)/180;
var ap2 = Math.cos(pfnew)*ap1;  // VI* cos(0)
var	ap = ap2.toFixed(2);
document.getElementById("ap").innerHTML= ap+" W";

// Reactive Power
var rp2= Math.sin(pfnew)*ap1;  // VI*sin(0)
var	ap = rp2.toFixed(2);
document.getElementById("rp").innerHTML= ap+" Var";

// Apparent Power = V*I 
document.getElementById("app").innerHTML= ap1.toFixed(2)+" VA";


if(units.avail > 0 ){
  document.getElementById("status").innerHTML="STATUS: CONNECTED";
  document.getElementById("status").style.backgroundColor="rgb(66, 248, 20)";
  document.getElementById("status").style.color="black";

}
else if(units.avail <= 0){
  document.getElementById("status").innerHTML="STATUS: DISCONNECTED";
  document.getElementById("status").style.backgroundColor="red";
  document.getElementById("status").style.color="#fff";
}

 },1000)


 function recharge(){
  var runits=prompt("Enter Number of Units you want to purchase: ");
  var rate1=5.79; // 01-100 Units
  var rate2=8.11; // 101-200 Units 
  var rate3=10.20; //201-300 Units
  var rate4=19.25; //301-700Units
  var rate5=22.35; //Above 700 Units

  var cost;
  var rem1;
  if(runits>=0 && runits <= 100){
    cost=rate1*runits;
  }
  else if(runits>100 && runits <= 200){
    rem1=runits-100;
    cost=(rate1*100)+(rate2*rem1);
  }
  else if(runits>200 && runits <= 300){
    rem1=runits-200;
    cost=(rate1*100)+(rate2*100)+(rate3*rem1);
  }
  else if(runits>300 && runits <= 700){
    rem1=runits-300;
    cost=(rate1*100)+(rate2*100)+(rate3*100)+(rate4*rem1);
  }
  else if(runits===undefined){
    cost=0;
  }
  else {
    rem1=runits-700;
    cost=(rate1*100)+(rate2*100)+(rate3*100)+(rate4*400)+(rate5*rem1);
  }

if (cost>0){
  cost=Math.ceil(cost);
  var conf= confirm("Your total cost is Rs."+cost+" \n Are you sure you want to purchase "+runits+" units ?");
}
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();
var nn = currentDate.toLocaleTimeString();

if(conf){
  units.avail =parseFloat(units.avail)+parseFloat(runits);



var monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var dateWithFullMonthName = monthNames[month] + " " + pad(date) + ", " + year;

// var ordinalDate = ordinal(date) + " " + monthNames[month] + ", " + year;

var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


var ordinalDateWithDayOfWeek = daysOfWeek[currentDate.getDay()] + ", " + dateWithFullMonthName ;

document.getElementById("tstamp").innerHTML= "Last Recharged: "+ runits+"units. on " +ordinalDateWithDayOfWeek+"-"+ nn;

}
}




const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});
