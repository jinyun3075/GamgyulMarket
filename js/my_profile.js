const $body = document.querySelector('body');
const $productlist = $body.querySelector('.sellProduct');
const $cont = $body.querySelector('.yourprofile');
const $nav = $body.querySelector('.top-main-nav');
const $album = $body.querySelector('.m-container');
const $image1 = $body.querySelector('.image1');
const $image2 = $body.querySelector('.image2');
const $profile = $body.querySelector('.profileMain');
const $modal = $body.querySelector('.icon-post-modal');
const $back = $body.querySelector('.leftArrow');
const $home = $body.querySelector('.home');
$home.onclick = ()=> {
    location.href = "./home.html";
}
$back.onclick = ()=> {
    history.back();
}
//유저 정보
async function userinfo() {
    const res = await fetch(localStorage.getItem("url")+"profile/"+localStorage.getItem("username"),{
        headers: {
            "Authorization" : "Bearer "+localStorage.getItem("key"),
            "Content-Type": "application/json"
        }
    })
    const resJson = await res.json();
    $profile.innerHTML =`
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
            <button class="profileUpdate">프로필 수정</button>
            <button class="productUpdate">상품 등록</button>
        </article>
        <article class="profileButtonBox">
            <button class="messageButton"></button>
            <button class="followButton">팔로우</button>
            <button class="shareButton"></button>
        </article>
    `
    const $followers = $body.querySelector('.followers');
    const $followings = $body.querySelector('.followings');
    $followers.onclick =()=>{
        location.href = "followers.html";
    }
    $followings.onclick =()=>{
        location.href = "followings.html";
    }
    const $productupdate = $body.querySelector('.productUpdate');
    const $profileupdate = $body.querySelector('.profileUpdate');
    $productupdate.onclick = ()=>{
        location.href = "add_product.html";
    }
    $profileupdate.onclick = ()=>{
        location.href = "profile_modification.html";
    }
}

// 상품 리스트
const ProductList = async ()=> {
    const res = await fetch(localStorage.getItem("url")+"product/"+localStorage.getItem("username"),{
    headers: {
        "Authorization" : "Bearer "+localStorage.getItem("key"),
        "Content-Type": "application/json"
    }
    })
    const resJson = await res.json();
    // resJson.data=0;//없을떄)
    if (resJson.data=="0"){
        $productlist.style.display ="none";
    }else  {
        for (const data of resJson.product) {    
            $productlist.innerHTML +=`
            <div class="product">
                <img src="${data.itemImage}" class="productImg" alt="프로덕트이미지">
                <p class="productName">${data.itemName}</p>
                <p class="productPrice">${data.price}원</p>
                </div>
                `
        }
    }
}

// 게시물 리스트
$image1.onclick = ()=>{
    $image1.src = "./img/icon-post-list-on.png";
    $image2.src = "./img/icon-post-album-off.png";
    $album.style.display="none";
    $cont.style.display="block"
}
$image2.onclick = ()=>{
    $image1.src = "./img/icon-post-list-off.png";
    $image2.src = "./img/icon-post-album-on.png";
    $album.style.display="block";
    $cont.style.display="none"
}
async function album() {
    const res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("username")+"/userpost", {
        headers: {
            "Authorization" : "Bearer "+localStorage.getItem("key"),
            "Content-Type": "application/json"
        }
    })
    resJson = await res.json();
    let $pics = $album.querySelector('.pics');
    for (const data of resJson.post) {
        let div = document.createElement("div");
        div.className = "pic";
        div.style.backgroundImage = `url("${data.image}")`
        $pics.appendChild(div);
    }
    
    }

async function mylist() {
    const res = await fetch(localStorage.getItem("url")+"post/"+localStorage.getItem("username")+"/userpost", {
        headers: {
            "Authorization" : "Bearer "+localStorage.getItem("key"),
            "Content-Type": "application/json"
        }
    })
    resJson = await res.json();
    // resJson = {}; // 없을때
    if(!resJson.post){
        $nav.style.display = "none"
    }else{
        $cont.innerHTML="";
        for (const data of resJson.post) {
            let heart = '<button class="heatbtn"  type="button"><img src="./img/icon-heart.png" alt="좋아요아이콘"></button>'
            if(data.hearted) {
                heart = '<button class="heatbtn on" type="button"><img src="./img/icon-heart2.png" alt="좋아요아이콘"></button>'
            }
            const date = JSON.stringify(data.updatedAt).split('-');
            $cont.innerHTML += 
            `<section class="home-post">
                <section class="leftSide">
                <button type="button" class="proPic"><img src="${data.author.image}" alt="프로필이미지"></button>
                </section>
                <section class="rightSide">
                <div class="menuWrap">
                    <div class="proId">
                    <p>${data.author.username}</p>
                    <p>@ naver.com</p>
                    </div>
                    <button class="menuBtn" type="button"><img src="./img/more-icon.png" alt="더보기아이콘" id="${data.id}"></button>
                    </div>
                    <div class="cntTxt">
                        <p>${data.content}</p>
                        </div>
                        <div class="cntImg">
                            <img src="${data.image}" alt="콘텐트이미지">
                            </div>
                            <div class="btnWrap">
                                <div class="btnLike">
                                    ${heart}
                                    <input class="id_in" type="hidden" value="${data.id}"/>
                                    <p>${data.heartCount}</p>
                                </div>
                            <div class="btnCmt">
                            <button type="button"><img src="./img/icon-message-circle.png" alt="댓글아이콘"></button>
                            <p>${data.commentCount}</p>
                        </div>
                    </div>
                <p class="date">${date[0].slice(1,5)}년 ${date[1]}월 ${date[2].slice(1,2)}일</p>
                </section>
            </section> `
            
        }
        let $heartbtn = $cont.querySelectorAll('.heatbtn');
        let $cntImg = $cont.querySelectorAll('.cntImg');
        for (const object of $heartbtn) {    
            object.onclick = (e)=>{
                const btn = e.target;
                const id = btn.parentNode.parentNode.querySelector('input').value
                const check = e.target.parentNode.classList.contains('on');
                if (check) {
                    e.target.classList.remove('.on');
                    unheartCheck(id);
                } else {
                    e.target.classList.add('.on');
                    heartCheck(id);
                }
                
            };
        }
        for (const object of $cntImg) {    
            object.onclick = (e)=>{
                const id = e.target.parentNode.parentNode.querySelector('input').value;
                localStorage.getItem('post_id',id);
                location.href = 'post.html';
            };
        }
        // 모달 창
        let $modalbtn = $body.querySelectorAll('.menuBtn');
        for (const object of $modalbtn) {   
            object.onclick = (e)=>{
                $modal.style.display = "block";
                const exit = $modal.querySelector('.topBar');
                const deletebtn = $modal.querySelector('.deleteBox');
                exit.onclick = () => {
                    $modal.style.display = "none";
                }
                deletebtn.onclick = async ()=>{
                    if(window.confirm("삭제할가요?")){
                        const res = await fetch(localStorage.getItem('url')+"post/"+e.target.id, {
                            method : "delete",
                            headers: {
                                "Authorization" : "Bearer "+localStorage.getItem("key"),
                                "Content-Type": "application/json"
                            }
                        })
                        const resJson = await res.json();
                        alert(resJson.message);
                        $modal.style.display = "none";
                        mylist();
                    } else{
                    }
                }
            }
        }
        
}
}
// 좋아요
let heartCheck = async (id)=>{
    await fetch(localStorage.getItem("url")+"post/"+id+"/heart",{
        method: "post",
        headers: {
            "Authorization" : "Bearer "+localStorage.getItem("key"),
            "Content-Type": "application/json"
        }
    }).then((data)=>{
        return data.json;
    }).then((data)=>{
        mylist();
    })
}
// 좋아요 취소
let unheartCheck = async (id)=>{
    await fetch(localStorage.getItem("url")+"post/"+id+"/unheart",{
        method: "delete",
        headers: {
            "Authorization" : "Bearer "+localStorage.getItem("key"),
            "Content-Type": "application/json"
        }
    }).then((data)=>{
        return data.json;
    }).then((data)=>{
        mylist();
    })
}
mylist();
album();
ProductList();
userinfo();