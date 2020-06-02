// JavaScript Document

function opchange(){
	var slider = document.getElementById("op")
	var img1 = document.getElementById("i1")
	var img2 = document.getElementById("i2")
	var op = slider.value * .01
	img1.setAttribute("style", "opacity:" + (1 - op).toString())
	img2.setAttribute("style", "opacity:" + (op).toString())
}


var slideIdx = 0;
var slidePos = 0;

function slideHo(n) {
	var slideStep = document.getElementById("slide1").offsetWidth;
	var c = document.getElementById("slidecont");
	var pos = slidePos;
	var id = setInterval(frame, 1);
	function frame() {
		if (Math.abs(pos) == slideStep * (slideIdx)) {
		clearInterval(id);
		} else {
		pos += 5*n;
		c.style.left = pos + 'px';
		}
		slidePos = pos;
	}
	slideIdx += n;
}

function slideHold() {
	var x = document.getElementsByClassName("slidecontainer");
	for (var i = 0; i < x.length; i++) {
		x[i].style.animationName="mymove";
		x[i].style.animationDuration="3s";
		x[i].style.animationIterationCount="1";
    	x[i].style.animationPlayState="running";
		x[i].style.animationFillMode="forwards";
  }
	slideIdx += 1;
	setTimeout(clearslideH, 4000);
}

function clearslideH() {
	var x = document.getElementsByClassName("slidecontainer");
	for (var i = 0; i < x.length; i++) {
		x[i].style.animation="";
		console.log((slideIdx*50).toString())
		x[i].style.transformOrigin = (slideIdx*50).toString();
	}
}