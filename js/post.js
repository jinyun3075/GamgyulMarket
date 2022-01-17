
document.querySelector(".comment .icon").style.background = `url(${localStorage.getItem("image")})`;
document.querySelector(".comment .icon").style.backgroundSize = "36px";

// (날짜 refactoring) : 년월일 붙여주기 + 월, 일 앞에 0 붙어있으면 제거
function date_refactoring(date) {
  date = date + '';
  let date1 = ''; 
  let date2 = ''; 
  // 🐋🐋🐋 date2엔 날짜가 오늘이면 몇시몇분인지 찍어주기, 60분 이내면 몇분 전, 1분 이내면 방금 전?
  date1 = date.slice(0,4) + '년 ' 
        + (date[5] === '0' ? date.slice(6,7) : date.slice(5,7)) + '월 '
        + (date[8] === '0' ? date.slice(9,10) : date.slice(8,10)) + '일 ';
  return date1;
}


// 🐋🐋🐋 나중에 해당 게시물의 id를 받아오도록 바꿔줘야 할 듯
localStorage.setItem("post_id", "61e43e37848431e191bdc29b"); 


// (5.4 게시글 상세)
get_post();
async function get_post() {
  let res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("post_id"), {
    method: "GET",
    headers: {
        "Authorization" : "Bearer "+localStorage.getItem("key"),
        "Content-Type": "application/json"
    }
  })
  response = await res.json();
  
  console.log("5.4게시글 상세 API - res.json()");
  console.log(response);

  let section_container = document.querySelector('Section.container');
  let date1 = date_refactoring(response.post.updatedAt + '');
  
  // (하트개수 refactoring) : 없으면 undefined 로 찍혀들어오는 것 방지
  let heart = (response.post.heartcount ? response.post.heartcount : 0);

  section_container.innerHTML = "";
  section_container.innerHTML = `
    <section class="home-post">
      <section class="leftSide">
        <button type="button" class="proPic"><img src="${response.post.author.image}" alt="프로필이미지"></button>
      </section>
      <section class="rightSide">
        <div class="menuWrap">
          <div class="proId">
            <p>${response.post.author.username}</p>
            <p>@ ${response.post.author.accountname}</p>
          </div>
          <button class="menuBtn" type="button">
            <img src="img/more-icon.png" alt="더보기아이콘">
          </button>
        </div>
        <div class="cntTxt">
          <p>${response.post.content}</p>
        </div>  
        <div class="cntImg">
          <img src="${response.post.image}" alt="콘텐트이미지">
        </div>
        <div class="btnWrap">
          <div class="btnLike">
            <div class="button"></div>
            <p>${heart}</p>
          </div>
          <div class="btnCmt">
            <button type="button">
              <img src="img/icon-message-circle.png" alt="댓글아이콘">
            </button>
            <p>${response.post.commentCount}</p>
          </div>
        </div>
        <p class="date">${date1}</p>
      </section>
    </section>
    `

  // 🐋🐋🐋  하트 아이콘 클릭시 하트색깔 및 +1 됨 -> 추가작업필
  let toggle = 1;
  let btnLike = document.querySelector('.btnLike');
  btnLike.addEventListener('click', function(){
    document.querySelector('.btnLike .button').classList.toggle('on');
    let number = Number(document.querySelector('.btnLike p').innerText);
    console.log(number);
    document.querySelector('.btnLike p').innerText = number + toggle;
    if (toggle == 1) {toggle = -1;} else {toggle = 1;}
  });
}


// (7.2 댓글 리스트)
get_comment();
async function get_comment() {
  let res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("post_id")+"/comments", {
    method: "GET",
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("key"),
        "Content-Type": "application/json"
      }
  })
  response = await res.json();

  console.log("7.2 댓글 리스트 API - res.json()");
  console.log(response);

  let commentbox = document.querySelector('footer.container');
  let max = response.comments.length; 
  commentbox.innerHTML = ""
  for (let index = 0; index < max; index++) {
    let date = date_refactoring(response.comments[max-index-1].createdAt)
    commentbox.innerHTML += `
      <section class="cont-info">
        <img src="${response.comments[max-index-1].author.image}" alt="">
        <article class="com-list">
          <section class="list-com">
            <p class="title">${response.comments[max-index-1].author.username}</p>
            <p class="time">${date}</p>
            <div class="more" 
              data-id="${response.comments[max-index-1].id}" 
              data-author="${response.comments[max-index-1].author._id}"></div>
          </section>
          <p class="cont">${response.comments[max-index-1].content}</p>
        </article>
      </section>
    `       
  }

  // 댓글 아이콘 클릭시 댓글창 나타남
  let btnCmt = document.querySelector('.btnCmt');
  btnCmt.addEventListener('click', function(){
    document.querySelector('.comment').classList.toggle('off');
    document.querySelector('footer.container').classList.toggle('off');
  });

  let comments = document.querySelectorAll('.list-com .more');
  let modal = document.querySelector('.icon-post-modal'); 
  let exit = modal.querySelector('.topBar');
  let deletebtn = modal.querySelector('.deleteBox');
  let reportbtn = modal.querySelector('.modifyBox');
  for (let index = 0; index < comments.length; index++) {
    let comment_id = comments[index].dataset.id;
    let comment_author = comments[index].dataset.author;
    comments[index].addEventListener('click', (event) => {
      
      // (7.3 댓글 삭제)  
      if(localStorage.getItem("id")==comment_author) {
        console.log("7.3 댓글 삭제 API")
        modal.style.display = "block";
        deletebtn.style.display = "block";
        reportbtn.innerText = "수정";
        deletebtn.addEventListener('click', async () => {
          let res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("post_id")+"/comments/"+comment_id, {
            method: "DELETE",
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("key"),
                "Content-Type": "application/json"
              }
          })
          response = await res.json();
          console.log("7.3 댓글 삭제 API - res.json()");
          console.log(response);
          modal.style.display = "none";
          get_post();
          get_comment();
        })
      }
      
      // (7.4 댓글 신고)  
      if(localStorage.getItem("id")!=comment_author) {
        console.log("7.4 댓글 신고 API")
        modal.style.display = "block";
        deletebtn.style.display = "none";
        reportbtn.style.display = "block";
        reportbtn.innerText = "신고하기";
        reportbtn.addEventListener('click', async () => {
          let res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("post_id")+"/comments/"+comment_id+"/report", {
            method: "GET",
            headers: {
                "Authorization" : "Bearer " + localStorage.getItem("key"),
                "Content-Type": "application/json"
              }
          })
          response = await res.json();
          console.log("7.4 댓글 신고 API - res.json()");
          console.log(response);
          modal.style.display = "none";
        })
      }
      
    })
  }
  exit.addEventListener('click', () => {
    modal.style.display = "none";
  })
} 


// (7.1 댓글 작성)
let comment_btn = document.querySelector(".posting"); 
let comment_text = document.querySelector(".text");
comment_btn.addEventListener('click', post_comment);
comment_text.addEventListener('keyup', (event) => {
  if(event.key === 'Enter'){post_comment()}
});
async function post_comment() {
  let text = comment_text.value + "";
  let res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("post_id")+"/comments", {
    method: "POST",
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("key"),
        "Content-Type": "application/json"
      },
    body: JSON.stringify({
        "comment" : {
          "content": text
        }
      })
  })
  response = await res.json();

  console.log("7.1 댓글 작성 API - res.json()");
  console.log(response);

  get_post();
  get_comment();
  comment_text.value = "";
}