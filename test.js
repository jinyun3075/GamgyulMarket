const url = "http://146.56.183.55:5050/"
async function sign(){
        const res = await fetch(url+"user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                "user":{
                    "email": "jin@naver.com",
                    "password": "123123",
                    "username": "yunjae",
                    "accountname": "sinhan",
                    "intro": "하이"
                }
            })
        })
        resJson = await res.json();
        console.log(resJson);
        console.log("회원가입");
    }
    
async function login(){
    // 쿠키값 : 0%7C48%2C0%7C49%2C0%7C50%2C0%7C1%2C6%7C52
    // accountname: "sinhan"
    // email: "jin@naver.com"
    // image: "/uploadFiles/Ellipse.png"
    // intro: "하이"
    // refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDEzODAyODIsImV4cCI6MTY0MjU4OTg4Mn0.HSFTsxcHGE5iNZ4xsPVmgEGIZX6aa4hNh9v_VIiuO88"
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE"
    // username: "yunjae"
    // _id: "61d578946b8216fc566876fa"
    const res = await fetch(url+"user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({
            "user":{
                "email": "jin@naver.com",
                "password": "123123",
            }
        })
    })
    resJson = await res.json();
    console.log(resJson);
    console.log("로그인");
}
async function followlist() {
    const res = await fetch(url+"post/feed", {
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE",
            "Content-Type": "application/json"
        }
    })
    resJson = await res.json();
    console.log(resJson);
    console.log("리스트");
}
async function mylist() {
    const res = await fetch(url+"post/sinhan/userpost", {
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE",
            "Content-Type": "application/json"
        }
    })
    resJson = await res.json();
    console.log(resJson);
    console.log("리스트");
}
async function postcreate() {
    const res = await fetch(url+"post", {
        method: "post",
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            post:{
                content: "2번게시물",
                image: "content2.png"
            }
        })
        
    })
    resJson = await res.json();
    console.log(resJson);
    console.log("게시글만들기");
}
async function deletepost() {
    const res = await fetch(url+"post/61d597496b8216fc566878d0", {
        method: "delete",
        headers: {
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDU3ODk0NmI4MjE2ZmM1NjY4NzZmYSIsImV4cCI6MTY0NjU2NDI4MiwiaWF0IjoxNjQxMzgwMjgyfQ.tHh7nnvnaQM0dn5LlPJPN8DeL8ecjKaGUsTrv_mbqnE",
            "Content-Type": "application/json"
        },
    })
    resJson = await res.json();
    console.log(resJson);
    console.log("게시글삭제");
}
// sign();
// login();
// list();
// postcreate();
// mylist();
// deletepost();




