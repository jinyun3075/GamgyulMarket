// (1. 채팅구현)
let posting = document.querySelector(".posting");
let text = document.querySelector(".comment .text");
let chat = document.querySelector(".chat-container");
let imageboolean = false;

posting.addEventListener('click', chatevent);
text.addEventListener('keyup', chatevent_text);

function chatevent_text(event) {
  // 엔터입력시 chatevent 호출
  if (event.key === 'Enter') {
    chatevent();
  }
}
function chatevent() {
  // 채팅메세지 객체
  let message = document.querySelector(".comment .text").value;
  console.log(message);
  // 현재시각 객체
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 11) {minutes = '0' + minutes;}; 
  // 채팅창 삽입하기
  const mymessage = document.createElement('div');
  if(imageboolean){
    mymessage.innerHTML = `
      <div class="time"><span>${hours}:${minutes}</span></div>
      <div class="chat"><img src=${text.value} height=auto alt="이미지를 보냈습니다"></div>
      <div class="space"></div>
    `;
  } else {
    mymessage.innerHTML = `
      <div class="time"><span>${hours}:${minutes}</span></div>
      <div class="chat">${message}</div>
      <div class="space"></div>
    `;
  }
  mymessage.classList.add('me');
  chat.appendChild(mymessage);
  // 채팅인풋 비우기
  text.value = '';
  document.querySelector(".posting").classList.remove('image');
  imageboolean = false; 
}

// (2. 모달창구현) 
let modal = document.querySelector('.more');
modal.addEventListener('click', modalevent);
function modalevent(event) {
  document.querySelector('.modal').classList.toggle('modal-on');
} 

// (3. 이미지업로드구현)
let icon = document.querySelector('.icon');
let iconfile = document.querySelector('.icon-file');
icon.addEventListener('click', iconevent);
function iconevent(event) {
  iconfile.click();
}
iconfile.addEventListener('change', function (event) { 
  let data = event.target;
  let fileList = data.files;
  console.log(data);
  console.log(fileList); 
  console.log(fileList[0]);
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = function (e) {
    console.log(reader.result);
    posting.classList.add('image'); 
    text.value = reader.result;
    imageboolean = true;
    text.focus();
  }
})