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
	const obj = JSON.stringify(reader);
	send_to_py(obj)
}


// Send JSON to Python
function send_to_py(image) {
	fetch('/hello')
		.then(function (response) {
			return response.text();
		}).then(function (text) {
			console.log('GET response text:');
			console.log(text); // Print the greeting as text
		});

	// Send the same request
	fetch('/hello')
		.then(function (response) {
			return response.json(); // But parse it as JSON this time
		})
		.then(function (json) {
			console.log('GET response as JSON:');
			console.log(json); // Here’s our JSON object
		})
		
	fetch('/hello', {

		// Declare what type of data we're sending
		headers: {
		  'Content-Type': 'application/json'
		},

		// Specify the method
		method: 'POST',

		// JSON image to be sent
		body: image
	}).then(function (response) { // At this point, Flask has printed our JSON
		return response.text();
	}).then(function (text) {

		console.log('POST response: ');

		// Should be 'OK' if everything was successful
		console.log(text);
	});
}