const loginForm = document.querySelector(".login-form");
const inpEmail = loginForm.querySelector("input#email");
const inpPw = loginForm.querySelector("input#pw");
const errMsg = loginForm.querySelector(".error-msg");
const btn = document.querySelector(".btn");
const EMAIL = "email";

errMsg.hidden = true; //default: hide error message
function loginSub(event) {
  event.preventDefault();
  const valueEmail = inpEmail.value;
  const valuePw = inpPw.value;
  localStorage.setItem("emailkey", valueEmail);
  localStorage.setItem("pwkey", valuePw);
  const getEmail = localStorage.getItem("emailkey");
  const getPw = localStorage.getItem("pwkey");
  if (getEmail != null && getPw != null) {
    alert("login success");
    location.href = "kmh_03_Home.html";
  } else {
    errMsg.hidden = false;
  }
}

loginForm.addEventListener("submit", loginSub);
