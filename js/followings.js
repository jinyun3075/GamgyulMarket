const followList = document.querySelector(".followList");
const followImage = followList.querySelector(".followImage");
const followName = followList.querySelector(".followName");
const followIntro = followList.querySelector(".followIntro");

const profileHeader = document.querySelector(".profileHeader");
const leftArrowButton = profileHeader.querySelector(".leftArrow");



leftArrowButton.addEventListener("click", ()=>{ history.back()});


const url = "https://146.56.183.55:5050/";

function handleFollowButton() {
    const followButton = followList.querySelectorAll(".followButton");
    followButton.forEach((item)=> {
        item.addEventListener("click", () => {
            if (item.textContent === '팔로우'){
                item.textContent = '취소';
                item.classList.remove("followButton");
                item.classList.add("unfollowButton");
            }
            else {
                item.textContent = '팔로우';
                item.classList.remove("unfollowButton");
                item.classList.add("followButton");
            }
        });
    })
}

handleFollowButton();

async function followerlist() {
    const res = await fetch(url+`profile/${localStorage.username}/following`, {
        method: "get",
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTQ0N2ExODQ4NDMxZTE5MWJkZDUwOSIsImV4cCI6MTY0NzUzNDk5MiwiaWF0IjoxNjQyMzUwOTkyfQ.kkMRFrKsLQ22VeqEBBm1tzwEyuMA4lVor_s3DnqnESk",
            "Content-type" : "application/json"
        }
    })
    resJson = await res.json();
    for(let index = 0; index < resJson.length; index++){
        followList.innerHTML += 
    `<article class="followers">
        <a href="#" class="followImage">
            <img src="${resJson[index].image}" alt="${resJson[index].username}사진">
        </a>
        <div class="userinfo">
            <p class="followName">${resJson[index].username}</p>
            <p class="followIntro">${resJson[index].intro}</p>
        </div>
        <button class="followButton">팔로우</button>
    </article>`
    }
    console.log(resJson);
    console.log("팔로워 리스트");
}
followerlist();