const body = document.querySelector('body');
        const product = body.querySelector('.pro');
        const proerror = body.querySelector('.proerror');
        const price = body.querySelector('.price');
        const priceerror = body.querySelector('.priceerror');
        const link = body.querySelector('.link');
        const savebtn = body.querySelector('.save');
        const file = body.querySelector('#img-b');
        let img;
        let [check1,check2,check3] = [false,false,false];
        const back = body.querySelector('.arrow');
        back.onclick= () => {
            history.back();
        }

        // 이름 유효성 검사
        product.onblur =(e)=>{
            const length=e.target.value.length;
            if(length<2){
                check1=false;
                proerror.style.display = 'block';
            }else if(length>15){
                check1=false;
                proerror.style.display = 'block';
            }else {
                proerror.style.display = 'none';
                check1=true;
            }
            check();
        }
        // 가격 유효성 검사
        price.onblur = (e)=> {
            const val=e.target.value;
            if(/[^0-9]/g.test(val)||val.length<1) {
                priceerror.style.display = 'block';
                check2 =false;
            }else {
                priceerror.style.display = 'none';
                check2 =true;
            }
            check();
        }
        // 판매링크 유효성 검사
        link.onblur = (e)=>{
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
        // 이미지 업로드 및 보이기
        file.addEventListener('change',function(e){
            const f1=e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(f1);
            reader.onload = ()=>{
                const img = body.querySelector('.img-box');
                img.style = `background : url(${reader.result}) no-repeat center center;`;
            }
            img=f1
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
        savebtn.onclick = async ()=>{
            const image = localStorage.getItem("url")+await imgApi(img)
            const res = await fetch(localStorage.getItem("url")+"product", {
                method : "POST",
                headers:{
                    "Authorization" : "Bearer "+localStorage.getItem("key"),
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    product:{
                        itemName: product.value,
                        price : +price.value,
                        link : link.value,
                        itemImage : image
                    }
                })
            })

            const resJson = await res.json();
            console.log(resJson);
        }