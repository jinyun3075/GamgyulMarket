// 이미지 업로드
const image_input = document.querySelector("#image_input");
var uploaded_image;
const img= "";
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load",() => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;    
  });
  reader.readAsDataURL(this.files[0]);
  img = imgupload(this.files[0]);
});

async function imgupload(e) {
  let formData = new FormData()
  formData.append('image',e);
  const res = await fetch(localStorage.getItem("url")+"image/uploadfile", {
      method: "post",
      body: formData
  })
  resJson = await res.json();
  console.log(resJson);
  console.log(resJson["filename"]);
  console.log("이미지 업로드");
  return await resJson["filename"];
}

const app = document.querySelector('.app');
const errMsg = document.querySelectorAll('strong');
const loginForm = document.querySelector('.login-form');
const userName = loginForm.querySelector('#user-name');
const userId = loginForm.querySelector('#user-id');
const userIntro = loginForm.querySelector('#user-intro');

loginForm.addEventListener('submit', loginSub);
function loginSub(event) {
  event.preventDefault();
  const nameValue = userName.value;
  const idValue = userId.value;
  const spe = idValue.search(/[`~!@@#$%^/[\]/&*|₩₩₩'₩";:₩/?]/);
  console.log(spe);
  if (nameValue.length < 2 || nameValue.length > 10) {
    errMsg['0'].classList.remove('hidden');
    errMsg['0'].innerText = '2~10자 이내여야 합니다.'
  } else if (spe >= 0) {
    errMsg['1'].classList.remove('hidden');
    errMsg['1'].innerText = '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
  } else {
    location.href = 'kmh_03_Home.html';
  }
}
