// follow, Message, share

const profileMain = document.querySelector(".profileMain");
const followButton = profileMain.querySelector("#followbtn");
const mainProduct = document.querySelector(".mainProduct");

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

// tab-menu


// top-main-nav

const topMainNav = document.querySelector(".top-main-nav");
const boardList = topMainNav.querySelector(".image1");
const albumList = topMainNav.querySelector(".image2");
const homePost = mainProduct.querySelector(".home-post");
const albumPost = mainProduct.querySelector(".m-container.album");


function handleBoard() {
    albumPost.style.display = "none";
    homePost.style.display = "flex";
    boardList.src = "../img/icon-post-list-on.png";
    albumList.src = "../img/icon-post-album-off.png";
}
function handleAlbum() {
    albumPost.style.display = "block";
    homePost.style.display = "none";
    boardList.src = "../img/icon-post-list-off.png";
    albumList.src = "../img/icon-post-album-on.png";
}

boardList.addEventListener("click", handleBoard);
albumList.addEventListener("click", handleAlbum);
