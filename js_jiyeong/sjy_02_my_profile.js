// post-modal

const postBtn = document.querySelector(".menuBtn");

const postModal = document.querySelector(".icon-post-modal");
const closeBar = postModal.querySelector(".topBar");
const deleteBtn = postModal.querySelector(".deleteBox");
const modifyBtn = postModal.querySelector(".modifyBox");


function openPostModal() {
    postModal.style.display = "block";
}
function closePostModal() {
    postModal.style.display = "none";
}
postBtn.addEventListener("click", openPostModal);
closeBar.addEventListener("click", closePostModal);


// product-modal

const productBtn = document.querySelector(".product");
// const productBtn = document.querySelector(".sellProduct.product");

const productModal = document.querySelector(".icon-product-modal");
const closeBar2 = productModal.querySelector(".topBar");
const deleteBtn2 = productModal.querySelector(".deleteBox_2");
const modifyBtn2 = productModal.querySelector(".modifyBox_2");
const websiteBtn = productModal.querySelector(".websiteBox");


function openProductModal() {
    productModal.style.display = "block";
}
function closeProductModal() {
    productModal.style.display = "none";
}
productBtn.addEventListener("click", openProductModal);
closeBar2.addEventListener("click", closeProductModal);