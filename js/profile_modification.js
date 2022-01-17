const body = document.querySelector('body');
        const username = body.querySelector('.userName');
        const nameerror = body.querySelector('.nameerror'); 
        const userid = body.querySelector('.userId');
        const userintro = body.querySelector('.userIntro');
        const iderror = body.querySelector('.iderror');
        const savebtn = body.querySelector('.save');
        const file = body.querySelector('#fi');
        const back = body.querySelector('.arrow');
        back.onclick= () => {
            history.back();
        }
        let img;
        let [check1,check2,check3] = [false,false,false];
        // 이름 유효성 검사
        username.onblur =(e)=>{
            const length=e.target.value.length;
            if(length<2){
                check1=false;
                nameerror.style.display = 'block';
            }else if(length>10){
                check1=false;
                nameerror.style.display = 'block';
            }else {
                nameerror.style.display = 'none';
                check1=true;
            }
            check();
        }
        // 아이디 유효성 검사
        userid.onblur = (e)=> {
            const val=e.target.value;
            if(/[^a-z|^A-Z|^가-힣|^/.|^/_|^0-9]/g.test(val)||val.length<1) {
                iderror.style.display = 'block';
                check2 =false;
            }else {
                iderror.style.display = 'none';
                check2 =true;
            }
            check();
        }
        
        // 소개 유효성 검사
        userintro.onblur = (e)=>{
            const length=e.target.value.length;
            if(length>0){
                check3 =true;
            }else {
                check3 =false;
            }
            check();
        }
        // 버튼 활성화 확인
        function check(){
            if(check1==true&&check2==true&&check3==true) {
                savebtn.disabled = false;
            } else {
                savebtn.disabled = true;
            }
        }
        // api 통신
        savebtn.onclick = async ()=>{
            const image= localStorage.getItem("url")+await imgApi(img);
            console.log(image)
            const res = await fetch(localStorage.getItem("url")+"user", {
                method : "put",
                headers: {
                    "Authorization" : "Bearer "+localStorage.getItem("key"),
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    user : {
                        username: username.value,
                        accountname : userid.value,
                        intro : userintro.value,
                        image
                    }
                })
            })
            const resJson = await res.json();
            console.log(resJson);
        }

        // 이미지 업로드 및 보이기
        file.addEventListener('change',function(e){
            const f1=e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(f1);
            reader.onload = ()=>{
                const user = body.querySelector('.userimg');
                user.style = `background : url(${reader.result}) no-repeat center center;`;
            }
            img=f1;
            console.log(img);
        })

        async function imgApi(img){
            const formdata = new FormData();
            formdata.append("image",img);
            const res = await fetch(localStorage.getItem("url")+"image/uploadfile",{
                method :"post",
                body : formdata
            }) 
            const result = await res.json();
            return result["filename"];
        }