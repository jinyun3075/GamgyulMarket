const body = document.querySelector("body");
const email = body.querySelector("#email");
const pw = body.querySelector("#pw");
const sign = body.querySelector(".btn");
sign.onclick = () => {
  login();
};
async function login() {
  const res = await fetch("https://146.56.183.55:5050/user/login", {
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
  });
  resJson = await res.json();
  console.log(resJson);
  localStorage.setItem("key", resJson.user.token);
  localStorage.setItem("url", "https://146.56.183.55:5050/");
  localStorage.setItem("username", resJson.user.accountname);
  localStorage.setItem("image", resJson.user.image);
  localStorage.setItem("name", resJson.user.username);
  localStorage.setItem("id", resJson.user._id);
  console.log("로그인");
}
const loginForm = document.querySelector(".login-form");
const errMsg = loginForm.querySelector(".error-msg");
const btn = document.querySelector(".btn");

errMsg.hidden = true;

function loginSub(event) {
  event.preventDefault();

  if (email.value !== null && pw.value !== null) {
    alert("login success");
    btn.classList.add("confirm");
    location.href = "home.html";
  } else {
    errMsg.hidden = false;
  }
}
loginForm.addEventListener("submit", loginSub);
