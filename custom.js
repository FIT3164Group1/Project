function openTab(tabName) {
	var i;
	var x = document.getElementByClassName("tab");
	for (i = 0; i < x.length; i++){
		x[i].style.dislay = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("red", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += "red";
}