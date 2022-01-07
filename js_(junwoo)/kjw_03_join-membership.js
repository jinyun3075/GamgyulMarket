const loginForm = document.querySelector('.login-form');
const inpEmail = loginForm.querySelector('input#email');
const inpPw = loginForm.querySelector('input#pw');
const errEmail = loginForm.querySelector('.error-email');
const errPw = loginForm.querySelector('.error-pw');
const FADEIN = 'fadein';
const btn = document.querySelector('.btn');

errEmail.hidden = true;
errPw.hidden = true;
function loginSub(event) {
  event.preventDefault();
  const valueEmail = inpEmail.value;
  const valuePw = inpPw.value;
  if (valueEmail === 'paul-lab@naver.com') {
    errEmail.hidden = false;
    errEmail.classList.toggle(FADEIN);
  } else if (valuePw.length < 6) {
    errPw.hidden = false;
    errPw.classList.toggle(FADEIN);
  } else {
    location.href = 'kjw_04_join-membership_2.html';
  }
}
loginForm.addEventListener('submit', loginSub);
