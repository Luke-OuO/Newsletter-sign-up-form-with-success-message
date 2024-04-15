// correct format regex...
// --> example@company.com
let thanksPanel = document.querySelector(".main_success_message");
let regex = /^[a-z0-9A-Z!@#$%^&*()]+@[a-z0-9A-Z]+\.[a-z0-9A-Z]+$/;
let subscribe = () => {
  let email_status_label = document.querySelector(".email_status");
  let email_status = document.querySelector(".input_email").value;
  if (email_status == "") {
    // If email input box is null
    email_status_label.textContent = "Email is undefined";
    email_status_label.style.display = "block";
  } else if (!regex.test(email_status)) {
    // If the input doesn't match the regex
    console.log("Not correct Format");
    email_status_label.textContent = "Valid email required";
    email_status_label.style.display = "block";
  } else {
    // Mail matches the format
    // Call the thanks pannel
    console.log("correct Format");
    thanksPanel.style.display = "flex";
    document.querySelector("#mail_address").innerText = email_status;
  }
};

let dismiss = () => {
  thanksPanel.style.display = "none";
};
// Get a reference to the SVG element
var svg_img = document.getElementById("mySVG");

// Function to adjust viewBox based on screen width
function adjustViewBox() {
  if (window.innerWidth <= 375) {
    console.log("<= 375");
    svg_img.src = "assets/images/illustration-sign-up-mobile.svg";
    svg_img.setAttribute("width", "100%");
    svg_img.setAttribute("height", "auto");
    svg_img.setAttribute("viewBox", "0 50 200 200");
  } else if (window.innerWidth <= 909) {
    console.log("<= 909");
    svg_img.src = "assets/images/illustration-sign-up-mobile.svg";
    svg_img.setAttribute("width", "100%");
    svg_img.setAttribute("height", "200px");
    svg_img.setAttribute("viewBox", "0 0 200 200");
  } else {
    // Not really good looking tho =w=
    console.log(">= 700");
    svg_img.setAttribute("width", "300px");
    svg_img.setAttribute("height", "auto");
    svg_img.setAttribute("viewBox", "0 0 300 500");
    svg_img.src = "assets/images/illustration-sign-up-desktop.svg";
  }
}

// initiate the function
adjustViewBox();

// Call the function on window resize
window.addEventListener("resize", adjustViewBox);
