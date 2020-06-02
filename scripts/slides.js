// JavaScript Document

var scount;
var slideIdx = 0;
slidesInit();

function slidesInit() {
	
	var c = document.getElementById("slidecont");
	var s = document.getElementsByClassName("divslide");
	for (var i = 0; i < s.length; i++) {
		s[i].style.left = s[i].offsetWidth * i  + 'px';
	}
	document.getElementById("slidecounter").innerHTML = (slideIdx + 1).toString() + " of " + (s.length).toString();
	scount = s.length;
	
}


var slidePos = 0;


function slideH(n) {
	
	if (n > 0 && slideIdx == 0){ return; }
	if (n < 0 && -slideIdx == scount - 1){ return; }
	
	
	
	var c = document.getElementById("slidecont");
	var slideStep = document.getElementById("slidecont").offsetWidth;
	var speed = 7;
	var pos = slidePos;
	var tpos = slideStep * (slideIdx + n) + 20
	var divs = Math.floor((tpos - pos) / speed)
	var rem = (tpos - pos) % speed;
	tpos = pos + (speed * divs);
	var id = setInterval(frame, 1);

	function frame() {
		if (pos == tpos) {
			pos += rem * n;
			c.style.left = pos + 'px';
			clearInterval(id);
		} else {
		pos += speed * n;
		c.style.left = pos + 'px';
		}
		slidePos = pos;
	}
	slideIdx += n;
	document.getElementById("slidecounter").innerHTML = (-slideIdx + 1).toString() + " of " + (scount).toString();
	
}