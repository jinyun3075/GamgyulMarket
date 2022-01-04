// 프로필 설정

const loginForm = document.querySelector('.properties');
const username = document.querySelector('.nameBox');
const loginId = document.querySelector('.idBox');
const intro = document.querySelector('.introBox');


loginForm.addEventListener('input', () => {
    if(10 >= username.value.length >= 2 && loginId
    intro.value.length >= 0 && ) {
    intro.disabled = false;
    } else {
        intro.disabled = true;
    }
    })
