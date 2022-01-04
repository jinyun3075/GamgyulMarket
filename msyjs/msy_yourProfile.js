// profileHeader

const profileHeader = document.querySelector(".profileHeader");
const leftArrowButton = profileHeader.querySelector(".leftArrow");
const moreIconButton = profileHeader.querySelector(".moreIcon");

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
