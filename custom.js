// Tabs
function openTab(event, tabName) {
	// Declare variables
	var i, tabcontent, bar_buttons;
	
	
	// Hide all elements with class="tabcontent"
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	
	// Remove class "active" from all "bar_button" class elements
	bar_buttons = document.getElementsByClassName("bar_button")
	for (i = 0; i < bar_buttons.length; i++) {
		bar_buttons[i].className = bar_buttons[i].className.replace(" active", "");
	}
	
	// Show current tab, add active class to button that opened the tab
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
	
}

// Open default tab
function defaultTab(){
	document.getElementById('defaultOpen').click()
}

// Upload file button
function fileUpload(){
	document.getElementById('upload_button').addEventListener('click', openUploadFile);
	function openUploadFile() {
		document.getElementById('upload_file').click();
	}
}


// Convert uploaded image to Base64
function convert_base64(image){
	var reader = new FileReader();
	var uploadedImage = image.files[0];
	reader.onloadend = function() {
		console.log("Image converted to Base64: " + reader.result)
	}
	reader.readAsDataURL(uploadedImage);
	// const obj = JSON.stringify(reader);
	return reader.result
}


