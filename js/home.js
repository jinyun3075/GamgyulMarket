const cont = document.querySelector(".homepostBox");
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
                cont.innerHTML =
                `
                <div class="m-container home">
                <div class="img"></div>
                <div class="text">유저를 검색해 팔로우 해보세요!</div>
                <button class="M-button">검색하기</button>
                </div>`
                const mbtn = document.querySelector(".M-button");
                mbtn.addEventListener("click",()=>{
                    location.href= "sjy_02_search-1.html";
                })
            }else{
                cont.innerHTML=""  
                for (const data of resJson.post) {
                    let heart = '<button class="heatbtn"  type="button"><img src="../img/icon-heart.png" alt="좋아요아이콘"></button>'
                    if(data.hearted) {
                        heart = '<button class="heatbtn on" type="button"><img src="../img/icon-heart2.png" alt="좋아요아이콘"></button>'
                    }
                    const date = JSON.stringify(data.updatedAt).split('-');
                    cont.innerHTML += 
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
                            <button class="menuBtn" type="button"><img src="../img/more-icon.png" alt="더보기아이콘"></button>
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
                                            <input type="hidden" value="${data.id}"/>
                                            <p>${data.heartCount}</p>
                                        </div>
                                    <div class="btnCmt">
                                    <button type="button"><img src="../img/icon-message-circle.png" alt="댓글아이콘"></button>
                                    <p>${data.commentCount}</p>
                                </div>
                            </div>
                        <p class="date">${date[0].slice(1,5)}년 ${date[1]}월 ${date[2].slice(1,2)}일</p>
                        </section>
                    </section> `
                }
                let $cntImg = cont.querySelectorAll('.cntImg');
                let heartbtn = cont.querySelectorAll('.heatbtn');
                for (const object of $cntImg) {    
                    object.onclick = (e)=>{
                        const id = e.target.parentNode.parentNode.querySelector('input').value;
                        localStorage.getItem('post_id',id);
                        location.href = 'post.html';
                    };
                }
                for (const object of heartbtn) {    
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
        }
        }
        // 게시물 리스트가져오기
        mylist();
        const tabMenu = document.querySelector(".tab-menu");
        const homeButton = tabMenu.querySelector(".home");
        const chattingButton = tabMenu.querySelector(".chatting");
        const createButton = tabMenu.querySelector(".create");
        const profileButton = tabMenu.querySelector(".profile");
        const search = document.querySelector('.search');

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
        // 이동
        search.addEventListener("click",()=>{
                    location.href= "sjy_02_search-1.html";
                })
        function handleProfileButton() {
            location.href = "../pagemarge_04_my_profile.html"
        }

        profileButton.addEventListener("click", handleProfileButton);