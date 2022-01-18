const toptap = document.querySelector('.top-search-nav');
        const search = toptap.querySelector('.search');
        const list = document.querySelector('.searchAfter');
        const $profile = document.querySelector('.profile');
        const back = document.querySelector('.arrow');
        back.onclick= () => {
            history.back();
        }
        $profile.onclick = ()=> {
            location.href = "my_profile.html";
        }
        search.addEventListener("keydown",async (d)=> {
            const res = await fetch(localStorage.getItem("url")+'user/searchuser/?keyword='+search.value,{
                headers: {
                    "Authorization" : "Bearer "+localStorage.getItem("key"),
                    "Content-Type": "application/json"
                }
            });
            const resJson = await res.json();
            console.log(resJson);
            list.innerHTML = "";
            for (const data of resJson) {
                list.innerHTML += `<section class="user-search">
                    <img src="${data.image}" alt="검색된 프로필" class="searchProfile">
                    <div class="searchName">
                        <h3 class="searchFirstName">${data.username}</h3>
                        <h3 class="searchLastName">&nbsp;${data.accountname}</h3>
                        </div>
                        <p class="searchEmail">@ weniv_Mandarin</p>
                        </section>`
                }

        })