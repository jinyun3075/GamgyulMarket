const body = document.querySelector("body");
const email = body.querySelector("#email");
const pw = body.querySelector("#pw");
const sign = body.querySelector(".btn");
sign.onclick = () => {
  login();
};
async function login() {
  await fetch("https://api.mandarin.cf//user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email: email.value,
        password: pw.value
      },
    }),
  }).then((data)=>{
    return data.json();
  }).then((data)=> {
    localStorage.setItem("key", data.user.token);
    localStorage.setItem("url", "https://api.mandarin.cf/");
    localStorage.setItem("username", data.user.accountname);
    localStorage.setItem("image", data.user.image);
    localStorage.setItem("name", data.user.username);
    localStorage.setItem("id", data.user._id);
    alert("login success");
    location.href = 'home.html';
  }).catch((error)=> {
    alert(error);
  })
}
const loginForm = document.querySelector(".login-form");
const errMsg = loginForm.querySelector(".error-msg");
const btn = document.querySelector(".btn");

errMsg.hidden = true;

function loginSub(event) {
  event.preventDefault();

  if (email.value !== null && pw.value !== null) {
    btn.classList.add("confirm");
  } else {
    errMsg.hidden = false;
  }
}
loginForm.addEventListener("submit", loginSub);
