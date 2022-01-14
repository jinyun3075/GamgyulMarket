const followList = document.querySelector(".followList");
const followImage = followList.querySelector(".followImage");
const followName = followList.querySelector(".followName");
const followIntro = followList.querySelector(".followIntro");


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