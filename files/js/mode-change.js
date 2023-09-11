//VARIABLES
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const body = document.querySelector("body");
const modeText = document.getElementById("change-mode-text");
const localMode = localStorage.getItem("mode");
const overlay = document.getElementById("overlay");
// const form = document.getElementById("search-form");

//LOADER
const loader = function (toggle) {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};
export default loader;
//LOCAL STORAGE CHECK
if (localMode) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}
//MODE CHANGE
function changeMode() {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
}
darkBtn.addEventListener("click", () => {
  changeMode();
  modeText.textContent = "Light Mode";
  localStorage.setItem("mode", "dark");
});
lightBtn.addEventListener("click", () => {
  changeMode();
  modeText.textContent = "Dark Mode";
  localStorage.setItem("mode", "");
});
