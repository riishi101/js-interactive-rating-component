const submit = document.getElementById("submit");
const visible = document.getElementById("visible");
const hidden = document.getElementById("hidden");
const spanNumber = document.getElementById("span");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    spanNumber.innerHTML = numberButton.value;
  });
});

// event handler
submit.addEventListener("click", () => {
  visible.style.visibility = "hidden";
  hidden.style.visibility = "visible";
});
