// follow, Message, share

const url = "http://146.56.183.55:5050/"


const profileMain = document.querySelector(".profileMain");

const mainProduct = document.querySelector(".mainProduct");
const sellProduct = mainProduct.querySelector(".sellProduct");



// tab-menu


// top-main-nav

const topMainNav = document.querySelector(".top-main-nav");
const boardList = topMainNav.querySelector(".image1");
const albumList = topMainNav.querySelector(".image2");
const albumPost = mainProduct.querySelector(".m-container.album");
const homePostSection = mainProduct.querySelector("#homePostSection");


function handleBoard() {
    albumPost.style.display = "none";
    homePostSection.style.display = "flex";
    boardList.src = "../img/icon-post-list-on.png";
    albumList.src = "../img/icon-post-album-off.png";
}
function handleAlbum() {
    albumPost.style.display = "block";
    homePostSection.style.display = "none";
    boardList.src = "../img/icon-post-list-off.png";
    albumList.src = "../img/icon-post-album-on.png";
}
boardList.addEventListener("click", handleBoard);
albumList.addEventListener("click", handleAlbum);

// async await

async function prolist(){
    const res = await fetch(url+"product/sinhan",{
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE",
            "Content-Type": "application/json"
        }
    });
    const resJson = await res.json();
    for (let index = 0; index < resJson.product.length; index++) {
        sellProduct.innerHTML += `<div class="product">
        <img src="${resJson.product[index].itemImage}" class="productImg" alt="프로덕트이미지">
        <p class="productName">${resJson.product[index].itemName}</p>
        <p class="productPrice">${resJson.product[index].price}원</p>
        </div>
    `
    }
}
async function mylist() {
    const res = await fetch(url+"post/sinhan/userpost", {
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE",
            "Content-Type": "application/json"
        }
    })
    resJson = await res.json();
    console.log(resJson);
    for (let index = 0; index < resJson.post.length; index++){
        homePostSection.innerHTML += `<section class="home-post">
        <section class="leftSide">
            <button type="button" class="proPic">
                <img src="${resJson.post[index].author}" alt="프로필이미지">
            </button>
        </section>
        <section class="rightSide">
            <div class="menuWrap">
                <div class="proId">
                <p>${resJson.post[index].author.username}</p>
                <p>@ weniv_Mandarin</p>
                </div>
                <button class="menuBtn" type="button">
                    <img src="../img/more-icon.png" alt="더보기아이콘">
                </button>
            </div>
            <div class="cntTxt">
                <p>옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.</p>
            </div>
            <div class="cntImg">
                <img src="${resJson.post[index].image}" alt="콘텐트이미지">
            </div>
            <div class="btnWrap">
                <div class="btnLike">
                <button type="button"><img src="../img/icon-heart.png" alt="좋아요아이콘"></button>
                <p>${resJson.post[0].heartCount}</p>
                </div>
                <div class="btnCmt">
                <button type="button"><img src="../img/icon-message-circle.png" alt="댓글아이콘"></button>
                <p>${resJson.post[0].commentCount}</p>
                </div>
            </div>
            <p class="date">${resJson.post[index].updatedAt.slice(0,4)}년 ${resJson.post[index].updatedAt.slice(5,7)}월 ${resJson.post[index].updatedAt.slice(8,10)}일</p>
        </section>
    </section>`
    }
    console.log("내 게시글 리스트");
}
async function userinfo() {
    const res = await fetch(localStorage.getItem("url")+"profile/"+localStorage.getItem("username"),{
        headers: {
            "Authorization" : "Bearer "+localStorage.getItem("key"),
            "Content-Type": "application/json"
        }
    })
    const resJson = await res.json();
    profileMain.innerHTML =`
        <article class="followImageBox">
        <div class="followers">
            <p class="followersNumber">${resJson.profile.followerCount}</p>
            <p>followers</p>
        </div>
        <img src="${resJson.profile.image}" alt="">
        <div class="followings">
            <p class="followingsNumber">${resJson.profile.followingCount}</p>
            <p>followings</p>
        </div>
        </article>
        <article class="profileNameBox">
            <p class="marketName">${resJson.profile.username}</p>
            <p class="marketEmail">@ weniv_Mandarin</p>
            <p>${resJson.profile.intro}</p>
        </article>
        <article class="profileButtonBox">
            <button class="messageButton"></button>
            <button id="followbtn" class="followButton">팔로우</button>
            <button class="shareButton"></button>
        </article>
    `
    const followButton = profileMain.querySelector("#followbtn");
    const followers = profileMain.querySelector(".followers");
    function handleFollwers() {
        location.href ="../msy_followers.html";
    }
    followers.addEventListener("click", handleFollwers);
    
    function handleFollow() {
        if (followButton.textContent === '팔로우'){
            followButton.textContent = '언팔로우';
            followButton.classList.remove("followButton");
            followButton.classList.add("unfollowButton");
            mainProduct.style.display = "none";
        }
        else {
            followButton.textContent = '팔로우';
            followButton.classList.remove("unfollowButton");
            followButton.classList.add("followButton");
            mainProduct.style.display = "block";
        }
    }
    
    followButton.addEventListener('click', handleFollow);
}
userinfo();
prolist();
mylist();

// resJson.post[0].author.followerCount
// resJson.post[0].author.followingCount