const tabMenu = document.querySelector(".tab-menu");
const homeButton = tabMenu.querySelector(".home");
const chattingButton = tabMenu.querySelector(".chatting");
const createButton = tabMenu.querySelector(".create");
const profileButton = tabMenu.querySelector(".profile");

function handleProfileButton() {
    location.href = "../pagemarge_04_my_profile.html"
}
function handleChattingButton() {
    location.href = "../kmh_05_Chat_List.html"
}
function handleCreateButton() {
    location.href = "../jyj_upload.html"
}

profileButton.addEventListener("click", handleProfileButton);
chattingButton.addEventListener("click",handleChattingButton);
createButton.addEventListener("click", handleCreateButton);
homeButton.addEventListener("click");
