const welcomeButton = document.getElementById('welcomeButton');
const welcomeMessage = document.getElementById('welcomeMessage');
const toggleMessageButton = document.getElementById("toggleMessageButton");

function sayHello() {
    welcomeMessage.textContent = 'Mr Samkelo J Dlamini is a passionate and dedicated individual who is committed to making a positive impact in his community. He is known for his strong work ethic, leadership skills, and ability to inspire others. Mr Dlamini is also recognized for his contributions to various social initiatives and his efforts to promote education and empowerment among the youth.';
    welcomeMessage.hidden = false;
    welcomeButton.hidden = true;
    toggleMessageButton.hidden = false;
}

welcomeButton.addEventListener('click', sayHello);

toggleMessageButton.addEventListener("click", function () {
  welcomeMessage.hidden = true;
  welcomeButton.hidden = false;
  toggleMessageButton.hidden = true;
});


const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Switch to light mode";
  } else {
    themeButton.textContent = "Toggle dark mode";
  }
});

const contactform = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formFeedback = document.getElementById("formFeedback");

contactform.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the form inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    formFeedback.textContent = "Please fill in all fields.";
    formFeedback.className = "error";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.className = "error";
    return;
  }

  formFeedback.textContent = "Thank you " + name + "! for your message! We will get back to you soon.";
  formFeedback.className = "success"; 

  contactform.reset();
});
