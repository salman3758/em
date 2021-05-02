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
else{
  var lenq=units.v.length;
	var vn =units.v[Math.floor(lenq/2)];
	//tempv= parseFloat(units.v[vn]);
	document.getElementById("vol").innerHTML=vn+" V";
}

if(units.avail>0){
	
	var lenc=units.c;
	var lencc=lenc.length;
	var cno=Math.floor(Math.random()*(lencc)); 
	var  cn = units.c[cno] ;
	document.getElementById("cur").innerHTML= cn+" A";
}
else{	
	var lenqc=units.c.length;
	var cn=units.c[Math.floor(lenqc/2)];
	document.getElementById("cur").innerHTML= cn + " A";
}


if(units.avail>0){

    var lenpf=units.pf.length;
    var pfno=Math.floor(Math.random()*(lenpf));  
	  var pfn  = units.pf[pfno];
	document.getElementById("pf").innerHTML=pfn;

}
else{
  var lenpf=units.pf.length;
	var pfn=units.pf[Math.floor(lenpf/2)];
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

 },1000)

 function fix()
{
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
}