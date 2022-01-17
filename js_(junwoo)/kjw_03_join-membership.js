// API 통신
const url = "http://146.56.183.55:5050/";
const body = document.querySelector("body");
const email = body.querySelector("#email");
const pw = body.querySelector("#pw");
const username = document.querySelector("#user-name");
const userId = document.querySelector("#user-id"); //accountname
const userIntro = document.querySelector("#user-intro");
const sign = body.querySelector(".btn");
sign.onclick = () => {
  Sign();
};
// 회원가입
async function Sign() {
  const res = await fetch(url + "user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        email: email.value,
        password: pw.value,
        username: username.value,
        accountname: userId.value,
        intro: userIntro.value,
        image: img,
      },
    }),
  });
  resJson = await res.json();
  console.log(resJson);
  console.log("회원가입");
}
// 이미지 업로드
const image_input = document.querySelector("#image_input");
var uploaded_image;
const img = "";
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display_image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
  img = imgupload(this.files[0]);
});

async function imgupload(e) {
  let formData = new FormData();
  formData.append("image", e);
  const res = await fetch(localStorage.getItem("url") + "image/uploadfile", {
    method: "post",
    body: formData,
  });
  resJson = await res.json();
  console.log(resJson);
  console.log(resJson["filename"]);
  console.log("이미지 업로드");
  return await resJson["filename"];
}
//join-membership1
const loginForm = document.querySelector(".login-form");
const inpEmail = loginForm.querySelector("input#email");
const inpPw = loginForm.querySelector("input#pw");
const errEmail = loginForm.querySelector(".error-email");
const errPw = loginForm.querySelector(".error-pw");
const FADEIN = "fadein";
const btn = document.querySelector(".btn");
const join1 = document.querySelector("#login-email-join");
const join2 = document.querySelector("#join-membership_2");

errEmail.hidden = true;
errPw.hidden = true;
join2.hidden = true;

function loginSub(event) {
  event.preventDefault();
  const valueEmail = inpEmail.value;
  const valuePw = inpPw.value;
  //email검증
  let regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (valueEmail.match(regExp) == null) {
    errEmail.hidden = false;
    errEmail.classList.toggle(FADEIN);
  } else if (valuePw.length < 6) {
    errPw.hidden = false;
    errPw.classList.toggle(FADEIN);
  } else {
    join1.hidden = true;
    join2.hidden = false;
  }
}
loginForm.addEventListener("submit", loginSub); //1차 submit
//join-membership 2
const errMsg = document.querySelectorAll("strong");
const loginForm2 = document.querySelector(".login-form2");

function loginSub2(event) {
  event.preventDefault();
  const idValue = userId.value;
  const spe = idValue.search(/[`~!@@#$%^/[\]/&*|₩₩₩'₩";:₩/?]/);
  console.log(spe);
  if (username.length < 2 || username.length > 10) {
    errMsg["0"].classList.remove("hidden");
    errMsg["0"].innerText = "2~10자 이내여야 합니다.";
  } else if (spe >= 0) {
    errMsg["1"].classList.remove("hidden");
    errMsg["1"].innerText = "영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.";
  } else {
    location.href = "kmh_03_Home.html";
  }
}
loginForm2.addEventListener("submit", loginSub2);
