document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => handleClick(button.classList[0]));
});

document.addEventListener("keydown", function(event) {
  handleClick(event.key);
});

let clickCount = 0;

function handleClick(buttonClass) {
  var audio;

  switch (buttonClass) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/snare.mp3");
      break;
    default:
      console.error("Unknown button class: " + buttonClass);
      return;
  }
  audio.play();

  //toggle the pressed class to change the color of the button
  document.querySelector("." + buttonClass).classList.toggle("pressed");
  
  clickCount++;

  // Determine the message based on the click count
  let message;
  switch (clickCount) {
    case 1:
      message = "Be gentle!";
      break;
    case 2:
      message = "That tickles, stop.";
      break;
    case 3:
      message = "It's getting repetitive.";
      break;
    case 4:
      message = "Why?";
      break;
    case 5:
      message = "Please stop.";
      break;
    case 6:
      message = "This is annoying.";
      break;
    case 7:
      message = "Really?";
      break;
    case 8:
      message = "Enough already!";
      break;
    case 9:
      message = "I'm telling mom!";
      break;
    case 10:
      message = "You are a monster!";
      break;
    default:
      message = "💀";
      break;
  }

  // Delay the alert to ensure audio plays first
  setTimeout(() => {
    const button = document.querySelector("." + buttonClass);
    const rect = button.getBoundingClientRect();
    const alertDiv = document.createElement("div");
    alertDiv.textContent = message;
    alertDiv.classList.add("alert-div"); 
    alertDiv.style.top = rect.top + "px";
    alertDiv.style.left = rect.left + "px";
    alertDiv.style.width = rect.width + "px";
    alertDiv.style.height = rect.height + "px";
    document.body.appendChild(alertDiv);

    // Add giant font class for the default message
    if (clickCount > 10) {
      alertDiv.classList.add("giant-font");
    }

    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 750);
  }, 50);

 
}