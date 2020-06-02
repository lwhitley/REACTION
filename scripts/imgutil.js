// JavaScript Document

var modal = document.getElementById("myModal");
var cont = document.getElementById("slidecont");
var img = cont.getElementsByTagName("img");

for (var i = 0; i < img.length; i++) {
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img[i].onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


