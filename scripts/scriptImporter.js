// JavaScript Document

var scripts = ["slides", "imgutil"]

scripts.forEach(imp);

function imp(s) {
	var scr = document.createElement("script");
	scr.src = "../scripts/" + s + ".js"
	document.getElementsByTagName("head")[0].appendChild(scr)
}
