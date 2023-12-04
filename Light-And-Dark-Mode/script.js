const themSwitch = document.querySelector("input");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Toggle Light mode & Dark mode
function switchMode(event) {
  // If input has checked, Toggle to Dark mode
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove("fa-sun");
    toggleIcon.children[1].classList.add("fa-moon");
    image1.src = "img/undraw_proud_coder_dark.svg";
    image2.src = "img/undraw_feeling_proud_dark.svg";
    image3.src = "img/undraw_conceptual_idea_dark.svg";
    textBox.style.backgroundColor = "rgba(240, 230, 230, 0.7)";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove("fa-moon");
    toggleIcon.children[1].classList.add("fa-sun");
    image1.src = "img/undraw_proud_coder_light.svg";
    image2.src = "img/undraw_feeling_proud_light.svg";
    image3.src = "img/undraw_conceptual_idea_light.svg";
  }
}

// Event Listenner
themSwitch.addEventListener("change", switchMode);
