// hamburger menu toggle
var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");

hamburger.onclick = function() {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  } else {
    navLinks.classList.add("open");
  }
}

// contact form validation
function submitForm() {

  var name = document.getElementById("userName");
  var email = document.getElementById("userEmail");
  var phone = document.getElementById("userPhone");
  var message = document.getElementById("userMessage");
  var formMsg = document.getElementById("formMsg");

  // check if fields exist on this page
  if (!name) return;

  // check empty fields
  if (name.value == "" || email.value == "" || message.value == "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all required fields.";
    return;
  }

  // basic email check
  if (email.value.indexOf("@") == -1) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email address.";
    return;
  }

  // success message
  formMsg.style.color = "#4caf50";
  formMsg.textContent = "Message sent! We will get back to you soon.";

  // clear the fields
  name.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
}
