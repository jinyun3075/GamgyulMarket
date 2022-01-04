// profileHeader

const profileHeader = document.querySelector(".profileHeader");
const leftArrowButton = profileHeader.querySelector(".leftArrow");
const moreIconButton = profileHeader.querySelector(".moreIcon");

// followButton

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

const tabMenu = document.querySelector(".tab-menu");
const homeButton = tabMenu.querySelector(".home");
const chattingButton = tabMenu.querySelector(".chatting");
const createButton = tabMenu.querySelector(".create");
const profileButton = tabMenu.querySelector(".profile");

function handleProfileButton() {
    location.href = "../pagemarge_04_my_profile.html"
}

profileButton.addEventListener("click", handleProfileButton);
// chattingButton.addEventListener("click");
// createButton.addEventListener("click");
// profileButton.addEventListener("click");

// top-main-nav

const topMainNav = document.querySelector(".top-main-nav");
const boardList = topMainNav.querySelector(".image1");
const albumList = topMainNav.querySelector(".image2");
const homePost = mainProduct.querySelector(".home-post");
const albumPost = mainProduct.querySelector(".m-container.album");

function handleBoard() {
    albumPost.style.display = "none";
    homePost.style.display = "flex";
}
function handleAlbum() {
    albumPost.style.display = "block";
    homePost.style.display = "none";
}

boardList.addEventListener("click", handleBoard);
albumList.addEventListener("click", handleAlbum);

// post-modal

const postModal = document.querySelector(".icon-post-modal");
const closeBar = postModal.querySelector(".topBar");
const infoButton = postModal.querySelector(".infoBox");
const logoutButton = postModal.querySelector(".logoutBox");


function openPostModal() {
    postModal.style.display = "block";
}
function closePostModal() {
    postModal.style.display = "none";
}
moreIconButton.addEventListener("click", openPostModal);
closeBar.addEventListener("click", closePostModal);