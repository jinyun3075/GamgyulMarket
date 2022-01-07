const loginForm = document.querySelector('.login-form');
const inpEmail = loginForm.querySelector('input#email');
const inpPw = loginForm.querySelector('input#pw');
const errMsg = loginForm.querySelector('.error-msg');

errMsg.hidden = true;
function loginSub(event) {
  event.preventDefault();
  const valueEmail = inpEmail.value;
  const valuePw = inpPw.value;
  if (valueEmail === 'paul-lab@naver.com' && valuePw === '0000') {
    alert('login success');
    location.href = 'kmh_03_Home.html';
  } else {
    errMsg.hidden = false;
  }
}
loginForm.addEventListener('submit', loginSub);