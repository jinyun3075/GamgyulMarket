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
  const spe = idValue.search(/[`~!@@#$%^/[\]/&*|₩₩₩'₩";:₩/?]/); //특수문자
  ///모든값이 string으로 변환되는데 구분필요?
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
