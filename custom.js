// Tabs
function openTab(event, tabName) {
    // Declare variables
    var i, tabcontent, bar_buttons;


    // Hide all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
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
function defaultTab() {
    document.getElementById('defaultOpen').click()
}

// Upload file button
function fileUpload() {
    document.getElementById('upload_button').addEventListener('click', openUploadFile);

    function openUploadFile() {
        document.getElementById('upload_file').click();
    }
}

	

function http_request(image) {
	// Convert uploaded image to Base64
    var reader = new FileReader();
    var uploadedImage = image.files[0];
	var image_base64 = reader.result;
    reader.onloadend = function() {
		image_base64 = reader.result.replace(/\(data:image.*?;base64,\)/, "");
        image_base64 = image_base64.replace(/\+/g, '-');
        image_base64 = image_base64.replace(/\//g, '_');
        image_base64 = image_base64.replace(/\=+$/, '');
		console.log("Image converted to Base64: " + image_base64)
	
	
	
	// Convert to JSON
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var image_json = JSON.stringify(
	{
		"instances": [
		[String(image_base64)]
		]
	}
	);
	
	
	// Send HTTP request
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: image_json,
        redirect: 'follow'
      };
      
      fetch("https://australia-southeast1-fit3164-group-1.cloudfunctions.net/auth-google-service-account", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };
    reader.readAsDataURL(uploadedImage);
	}