
  let img = document.querySelector('.img');;
  let imgfile = document.querySelector('.img-file');
  let text = document.querySelector(".text");
  let submitBtn = document.querySelector(".save");
  let before = document.querySelector(".arrow");
  let element = [];
  let actionboolean = false;

  // (FRONT-END) 이미지 불러와서 브라우저에 미리보기 제공

  text.addEventListener('keyup', () => {
    if(text.value != "") {submitBtn.style.backgroundColor = '#F26E22';}
    if(text.value == "") {submitBtn.style.backgroundColor = '#ffc7a7';}
  })

  img.addEventListener('click', function (event) { 
    imgfile.click();
  });

  imgfile.addEventListener('change', function (event) { 
    for (let index = 0; index < event.target.files.length; index++) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[index]);
      reader.onload = function (e) {
        element[index] = reader.result;
        let booleansum = 0 ; 
        for (let i = 0; i < event.target.files.length; i++) {
          booleansum += Boolean(element[i]);
        }
        if (booleansum === event.target.files.length) {
          frameaction();
        }
      }
    }
  });

  function frameaction(){
    let comment = document.querySelector('.comment');
    let myimage = document.createElement('div');
    if(element.length > 1){
      myimage.innerHTML = `
        <div style="width:300px; overflow:scroll;">
          <div class="frame" style="width:${180*element.length}px;">
          </div>
        </div>
      `;
      comment.appendChild(myimage);
      let frame = document.querySelector('.frame');
      for (let index = 0; index < element.length; index++) {
        let multiimage = document.createElement('span');
        multiimage.innerHTML = `
          <div style="
            display: inline-block;
            box-sizing: border-box;
            width: 170px;
            height: 125px;
            border-radius: 10px;
            border: #bdbdbd 1px solid;
            background: url(${element[element.length-index-1]}) center center no-repeat;
            background-size: auto 125px;
          "></div>
        `;
        frame.appendChild(multiimage);
      }
    } else {    
      myimage.innerHTML = `
        <div style="
          display: inline-block;
          margin-top: 16px;
          box-sizing: border-box;
          width: 100%;
          height: 230px;
          border-radius: 10px;
          background: url(${element[0]}) center center no-repeat;
          background-size: auto 230px;
        "></div>
      `;
      comment.appendChild(myimage);
    }
    submitBtn.style.backgroundColor = '#F26E22';
  };

  // (BACK-END) 서버에 이미지 올리고, 파일명 받아와서, 포스팅

  const url = "https://api.mandarin.cf/"

  async function imageUpload(files,index) {
    const formData = new FormData();
    formData.append("image", files[index]);
    const res = await fetch(url+"image/uploadfile", {
      method: "POST",
      body : formData
    })
    const data = await res.json()
    console.log(data);
    const productImgName = data["filename"];
    console.log(productImgName);
    return productImgName
  }
  async function createPost(e) {
    const token = localStorage.getItem("key")
    const contentText = text.value
    const imageUrls = []
    const files = imgfile.files
    if (files.length<=3) {
      for (let index = 0; index < files.length; index++) {
        const imgurl = await imageUpload(files,index)
        imageUrls.push(url+imgurl)
      }
      const res = await fetch(url+"post",{
        method:"POST",
        headers:{
          "Authorization" : `Bearer ${token}`,
          "Content-type" : "application/json"
        },
        body:JSON.stringify({
          "post": {
            "content": contentText,
            "image": imageUrls+''
          }
        })
      })
      const json = await res.json()
      console.log(json)
      location.href = "my_profile.html";
      } else {
        alert("3장 이상은 못올림")
      }
      
  }
  submitBtn.addEventListener('click',createPost)
  before.onclick = () => {history.back()}