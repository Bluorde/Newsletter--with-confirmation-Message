const emailEntry = document.querySelector("#email-field");
const error = document.querySelector("span");
const submitBtn = document.querySelector("#submit-btn");
function genericRun(){
  if (!emailEntry.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      error.innerHTML = "Valid email required";
      emailEntry.classList.add("error-state");
      return false;
    } else {
      error.innerHTML = "";
      emailEntry.classList.remove("error-state");
      return true;
    }
}