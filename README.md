# gamgyulmarket
멋사 감귤마켓 1팀의 repo!!
# Sever

# 유저
## 회원가입
- api
    - /user (post)
    - type : json
- req
    - Email (고유, 필수)
    - Password (필수)
    - UserName (필수)
    - accountname (?)
    - intro (소개)
    - image (default)
- res
    - "_id" : string
    - "username" : String
    - "acoountname : string
    - "email" : string 
    - "intro" : string
    - "image" : string
    - "hearts" : array (?)
    - "following" : array (?)
    - "follower" : array (?)
    - "followCount" : 0
- fail
    - email, password, accountname, username 중 하나라도 작성하지 않을 경우 필수 입력사항을 입력해주세요. 
    - password를 6자 이상 입력하지 않을 경우 비밀번호는 6자 이상이어야 합니다. 
    - eamil 형식이 잘못될 경우 잘못된 이메일 형식입니다. 
    - 가입된 email일 경우 이미 가입된 이메일 주소입니다. 
    - accountname에 지정된 문자 이외의 문자가 들어갈 경우 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다. 
    - 가입된 accountname일 경우 이미 사용중인 계정 ID입니다.

## 로그인
- api
    - /user/login (post)
    - type : json
- req
    - email (필수)
    - password (필수)
- res
    - "_id":String
    - "username" : string
    - "email" : string
    - "accountname" : string
    - "image" : string
    - "token" : string
- fail
    - email, password를 입력하지 않을 때 이메일 또는 비밀번호를 입력해주세요. 
    - email를 입력하지 않을 때 이메일을 입력해주세요. 
    - password를 입력하지 않을 때 비밀번호를 입력해주세요. 
    - email, password를 일치하지 않을 때 이메일 또는 비밀번호가 일치하지 않습니다.

## 전체 유저 목록
- api
    - /user (GET)
- res
    - "_id" : String
    - "username" : String
    - "email" : String
    - "accountname" : String

# 프로필
## 프로필 수정
- api
    - /user (PUT)
- req
    - username
    - acoountname
    - intro
    - image
- res
    - "_id": String,
    - "username": String,
    - "accountname": String,
    - "intro": String,
    - "image": String,
    - "following": array,
    - "follower": array,
    - "followerCount": Number,
    - "followingCount": Number

## 개인 프로필
- api
    - /profile/:accuntname (GET)
- res
    - "_id": String,
    - "username": String,
    - "accountname": String,
    - "intro": String,
    - "image": String,
    - "following": array,
    - "follower": array,
    - "followerCount": Number,
    - "followingCount": Number 
<<<<<<< HEAD

# 게시글
=======
>>>>>>> abd5e8de8532782d7967aa663724b6a80cc5946c
