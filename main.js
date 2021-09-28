import "../css/styles.css";

// Global Variables
var image_b64 = "";
var original_b64 = "";

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
  bar_buttons = document.getElementsByClassName("bar_button");
  for (i = 0; i < bar_buttons.length; i++) {
    bar_buttons[i].className = bar_buttons[i].className.replace(" active", "");
  }

  // Show current tab, add active class to button that opened the tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Open default tab
function defaultTab() {
  document.getElementById("defaultOpen").click();
}

// Upload file, check filetype and size
function image_upload(image) {
  convert_b64(image);
}

// Convert to Base64
function convert_b64(image) {
  // Convert uploaded image to Base64
  var reader = new FileReader();
  reader.onload = function () {
    to_json(reader.result);
  };
  reader.readAsDataURL(image);
}

// Convert to JSON
function to_json(image) {
  original_b64 = image;
  image_b64 = image.replace(/data:image.*?;base64,/, "");
  image_b64 = image_b64.replace(/\+/g, "-");
  image_b64 = image_b64.replace(/\//g, "_");
  image_b64 = image_b64.replace(/\=+$/, "");
  console.log("Image converted to Base64: " + image_b64);

  var image_json = JSON.stringify({
    instances: [[String(image_b64)]],
  });
  http_request(image_json);
}

// Send HTTP Request
function http_request(json) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    headers: myHeaders,
    body: json,
    redirect: "follow",
  };

  fetch(
    "https://grx408sfch.execute-api.ap-southeast-2.amazonaws.com/prod/make-classification",
    requestOptions
  )
    //.then(response => response.text())
    .then((result) => result.json())
    //.then(data => console.log(data))
    .then((data) => output_result(data.predictions[0][0]))
    .catch((error) => console.log("error", error));
}

// Output result
function output_result(prediction) {
  percent = prediction * 100;
  percent = percent.toPrecision(4);
  percent = String(percent) + "%";
  var image_type = "";
  if (prediction >= 0.5) {
    console.log("Model prediction results:", "MSS,", percent);
    image_type = "MSS";
    document.getElementById("image_type").innerHTML = "MSS";
    document.getElementById("image_percent").innerHTML = percent;
  } else {
    console.log("Model prediction results:", "MSI,", percent);
    image_type = "MSI";
    document.getElementById("image_type").innerHTML = "MSI";
    document.getElementById("image_percent").innerHTML = percent;
  }
  add_history(image_type, percent);
}

// Add to prediction History
function add_history(type, percent) {
  time_array[0] = String(curr_datetime.getHours());
  time_array[1] = String(curr_datetime.getMinutes());
  time_array[2] = String(curr_datetime.getSeconds());
  time_array[3] = String(curr_datetime.getDate());
  time_array[4] = String(curr_datetime.getMonth() + 1);
  time_array[5] = String(curr_datetime.getFullYear());
  // Add leading zeroes

  for (let i = 0; i < 5; i++) {
    if (time_array[i] < 10) {
      time_array[i] = "0" + String(time_array[i]);
    }
  }

  var datetime =
    time_array[0] +
    ":" +
    time_array[1] +
    ":" +
    time_array[2] +
    " " +
    time_array[3] +
    "/" +
    time_array[4] +
    "/" +
    time_array[5];
  var ul_time = document.getElementById("history_time");
  var li_time = document.createElement("li");
  li_time.id = "history_list";
  li_time.appendChild(document.createTextNode(String(datetime)));
  ul_time.appendChild(li_time);

  var hist_image = new Image(100, 100);
  hist_image.src = original_b64;
  hist_image.className = "mx-auto";
  var ul_image = document.getElementById("history_image");
  var li_image = document.createElement("li");
  li_image.id = "history_list";
  li_image.appendChild(hist_image);
  ul_image.appendChild(li_image);

  var ul_type = document.getElementById("history_type");
  var li_type = document.createElement("li");
  li_type.id = "history_list";
  li_type.appendChild(document.createTextNode(String(type)));
  ul_type.appendChild(li_type);

  var ul_percent = document.getElementById("history_percent");
  var li_percent = document.createElement("li");
  li_percent.id = "history_list";
  li_percent.appendChild(document.createTextNode(String(percent)));
  ul_percent.appendChild(li_percent);

  // Reverse order
  var i = ul_time.childNodes.length;
  while (i--) {
    ul_time.appendChild(ul_time.childNodes[i]);
    ul_image.appendChild(ul_image.childNodes[i]);
    ul_type.appendChild(ul_type.childNodes[i]);
    ul_percent.appendChild(ul_percent.childNodes[i]);
  }
}

// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";
