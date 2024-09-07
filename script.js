const scriptURL =
  "https://script.google.com/macros/s/AKfycbx6-1wP6T7MF3odMnqnIEbMo_N16mmP2Ao8svfwaagFhzhjjb2VL2ro0zh1sWRG2JA/exec";

const form = document.forms["submit-to-google-sheet"];
const span = document.getElementById("span");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

btn.addEventListener("click", () => {
  span.textContent = "Thank You For Subscribing!";
  setTimeout(() => {
    span.textContent = "";
  }, 1500);
});
