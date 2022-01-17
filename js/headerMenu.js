// profileHeader

const profileHeader = document.querySelector(".profileHeader");
const leftArrowButton = profileHeader.querySelector(".leftArrow");
const moreIconButton = profileHeader.querySelector(".moreIcon");
const modalBox = document.querySelector(".icon-post-modal");



leftArrowButton.addEventListener("click", ()=>{ history.back()});

const postModal = document.querySelector(".icon-post-modal");
const infoButton = postModal.querySelector(".infoBox");
const logoutButton = postModal.querySelector(".logoutBox");

const logoutModal = document.querySelector(".logoutModal");
const logoutCancel = logoutModal.querySelector(".logoutCancel");
const logoutSuccess = logoutModal.querySelector(".logoutSuccess");

function openPostModal() {
    postModal.style.display = "block";
}
function closePostModal() {
    postModal.style.display = "none";
}
moreIconButton.addEventListener("click", openPostModal);
modalBox.addEventListener("click", closePostModal);

function openLogoutModal() {
    logoutModal.style.display = "block";
}
function closeLogoutModal() {
    logoutModal.style.display = "none";
}
logoutButton.addEventListener("click", openLogoutModal);
logoutCancel.addEventListener("click", closeLogoutModal);