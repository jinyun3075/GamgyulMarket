// home 검색하기 버튼 : 페이지 이동 
const mContainerHome = document.querySelector(".m-container.home");
const searchIcon = mContainerHome.querySelector(".top-main-nav .search");
const searchBtn = mContainerHome.querySelector(".M-button");

function searchButton() {
    location.href = "../sjy_02_search-1.html"
}

searchIcon.addEventListener("click", searchButton);
searchBtn.addEventListener("click", searchButton);




// feach 하기

// async function home(){
//     const email = document.querySelector("#email")
//     const pw = document.querySelector("#pw")
//     const res = await fetch("http://146.56.183.55:5050/user/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body : JSON.stringify({
//             "user": {
//                 "email": email.value,
//                 "password": pw.value,
//             }
//         })
//     });
//     const json = await res.json();
//     console.log(json);
// }
// document.querySelector("#login-btn").addEventListener('click', login);
