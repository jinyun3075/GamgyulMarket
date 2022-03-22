# 프론트 스쿨 일팀의 감귤마켓 2021.12.27 ~ 2022.01.17
### 🎉목표
#### 마이크로 서비스 서버와 통신하여 기능 구현 및 UI 구현

<br>

### 👇 프로젝트 결과물
#### [포트폴리오](https://glow-fortnight-4c2.notion.site/479b665a9b6349a180bf3b0cfaf8c0c0)
#### [바로가기](https://jinyun3075.github.io/GamgyulMarket/)
<br>

### 👩‍💻팀원소개👨‍💻

| [👨‍💻 진윤재](https://github.com/jinyun3075)                                                                                  | [👨‍💻 김만학](https://github.com/manaks)                                                                                  | [👨‍💻 민성윤](https://github.com/SeongYoonMin)                                                                         | [👨‍💻 김준우](https://github.com/ZERO2ONE23581)                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://user-images.githubusercontent.com/64072136/149876386-7a39418a-90f5-430f-905c-da0a068b2b01.png" width="100"/> | <img src="https://avatars.githubusercontent.com/u/45092095?v=4" width="100"/> | <img src="https://avatars.githubusercontent.com/u/44321712?v=4" width="100"/> | <img src="https://avatars.githubusercontent.com/u/92930171?v=4" width="100"/> | <img src="https://avatars.githubusercontent.com/u/93367589?v=4" width="100"/> |
| BE, FE                                                                                                                    | FE                                                                                                                      | FE                                                                                                                  | FE                                                                                                                |
<br>

### 📌 기술스택
- HTML, CSS, JS
- Node-Express, MongoDB, Docker
<br>

### 📌 서버
- #### [서버 REPO](https://github.com/jinyun3075/GamgyulServer/)
<br>

### 📌 구조
![image](https://user-images.githubusercontent.com/64072136/149900252-728e0926-bfd5-4611-843a-b5c96714b3f8.png)
<br>

### 📌 구현 기능

#### splash
- 서비스 접속 초기화면
- splash 화면이 잠시 나온 뒤 다음 페이지가 나타납니다

![Animation](https://user-images.githubusercontent.com/64072136/149899962-9438d593-845a-4e02-bcf1-70e236705171.gif)



#### 로그인
- SNS(카카오톡, 구글, 페이스북) 로그인은 구현하지 않았고, 화면에 버튼만 배치
- 이메일로 로그인 을 클릭하면 이메일로 로그인할 수 있는 화면이동
- 로그인 기능, 유효성 검사

![image](https://user-images.githubusercontent.com/64072136/149901877-5bc87bf8-04c1-4eb2-8b65-0ce4a2e7b055.png)

<br>

#### 회원가입
- 이메일 주소 또는 비밀번호를 입력하고 입력창에서 포커스를 잃으면 바로 유효성 검사가 진행되고 통과하지 못한 경우 경고 문구가 각 입력창 하단에 표시
- 작성이 완료된 후, 유효성 검사를 통과할 경우 다음 버튼이 활성화

![image](https://user-images.githubusercontent.com/64072136/149902124-2c6f4e75-f1bb-40f3-a8bf-ead70c885ccc.png)![image](https://user-images.githubusercontent.com/64072136/149902361-1002a5bc-afca-4408-8e06-012af695d149.png)

<br>

#### 감귤마켓 피드(홈 화면)
- 감귤마켓 피드는 사용자들이 올린 게시글들이 표시되는 페이지
- 팔로우한 사용자가 없을 경우와 내가 팔로우한 사용자가 올린 게시글이 없는 경우 "유저를 검색해 팔로우 해보세요!" 문구와 함께 검색하기 버튼 활성화
- 게시글이 화면을 벗어날경우 드레그 기능 할성화

![image](https://user-images.githubusercontent.com/64072136/149900607-b5321ab5-19d2-4ba7-8cf2-cda95ff3b47e.png)![image](https://user-images.githubusercontent.com/64072136/149901065-7938e171-092b-422f-b500-257b466c6642.png)

<br>

#### 검색
- 사용자 이름과 계정을 검색할 수 있는 페이지
- 입력창에 텍스트를 입력하면 해당하는 사용자 출력
- 검색어와 같은 단어에는 주황색 글씨가 표시

![image](https://user-images.githubusercontent.com/64072136/149902635-6c9d0590-9879-42d6-a605-5e94c249aadc.png)

<br>

### 프로필 페이지
- 사용자 이름, 계정 ID, 소개, 팔로워 및 팔로잉 수, 판매 상품, 그리고 사용자가 업로드한 게시글 
- 게시글 섹션에서는 목록형과 앨범형으로 게시글 보여지는 화면 분류. 이미지가 없는 게시글을 경우 표시X

![image](https://user-images.githubusercontent.com/64072136/149903791-65847d5a-2063-4d77-a8b1-3e916a0f677f.png)![image](https://user-images.githubusercontent.com/64072136/149904703-78b5d169-92a9-4626-8c3a-f5c260c20d36.png)
<br>

### 팔로워, 팔로잉 목록
![image](https://user-images.githubusercontent.com/64072136/149905285-bce9fb41-321f-409d-9034-499b341c6ccd.png)

<br>

### 내 프로필 수정 & 상품 등록
- 유효성 검사가 통과되지 않을 경우 저장 버튼이 비활성화
- 상품 등록같은경우 입력되는 값이 다름

![image](https://user-images.githubusercontent.com/64072136/149906393-0a25ffb6-b4fc-4393-8940-cf11a7adad1c.png)![image](https://user-images.githubusercontent.com/64072136/149906670-6fec0284-583b-41dc-9f8a-e410fea1c578.png)

<br>

### 댓글 기능
- 게시글 이미지 혹은 글을 클릭시 게시글로 이동 후 채팅을 클릭시 댓글 창 할성화
- 댓글 작성이 현재 시간으로 부터 몇 분, 시간 전에 작성되었는지 표시

![image](https://user-images.githubusercontent.com/64072136/149907957-adfbc764-b2bd-4231-8d62-8888db37cb61.png)

<br>

### 게시글 업로드
- 글이 입력되거나 사진이 업로드 되면 업로드 버튼이 활성화

![image](https://user-images.githubusercontent.com/64072136/149909046-717229fc-5e15-4672-be54-61019582663d.png)

<br>

### 게시글 삭제
- 게시글 오른쪽 위에 버튼을 클릭시 모달창이 뜨고 삭제를 할 수 있다.

![image](https://user-images.githubusercontent.com/64072136/149910484-ef136785-ce92-4bf7-ab69-64a895e4b597.png)

### 채팅방
- 채팅 기능 구현

![image](https://user-images.githubusercontent.com/64072136/149909681-475d1dc4-087e-4b9a-b2e3-4e20f4eb064e.png)

<br>

### 좋아요 
- 게시글이 나타나는 모든 페이지에서 기능 구현
- 좋아요 개수는 카운트 되어 하트모양 우측에 표시

![image](https://user-images.githubusercontent.com/64072136/149910212-011d66a5-ed44-4692-8f12-ffef1162c321.png)
