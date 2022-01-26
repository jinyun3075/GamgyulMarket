const tabMenu = document.querySelector(".tab-menu");
const homeButton = tabMenu.querySelector(".home");
const chattingButton = tabMenu.querySelector(".chatting");
const createButton = tabMenu.querySelector(".create");
const profileButton = tabMenu.querySelector(".profile");

function handleProfileButton() {
    location.href = "my_profile.html"
}
function handleChattingButton() {
    location.href = "Chat_List.html"
}
function handleCreateButton() {
    location.href = "upload.html"
}
function handleHomeButton() {
    location.href = "your_profile.html"
}

profileButton.addEventListener("click", handleProfileButton);
chattingButton.addEventListener("click",handleChattingButton);
createButton.addEventListener("click", handleCreateButton);
homeButton.addEventListener("click", handleHomeButton);
