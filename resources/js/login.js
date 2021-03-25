const formSubmit = document.getElementById("submit");
const form = document.getElementById("loginform");
// let userId = new FormData(document.loginform.userid.value);
// let userPw = new FormData(document.loginform.userpw.value);

function postFunc() {
  let userId = document.loginform.userid.value;
  let userPw = document.loginform.userpw.value;
  console.log(userId);

  const xhr = new XMLHttpRequest();
  xhr.open("post", "/login.html", true);
  xhr.onreadystatechange = function () {
    //폴백
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        //200은 잘넘어왔단 것이다.
        process();
      } else {
        alert("요청오류 : " + xhr.status);
      }
    }
  };
  //post방식은 xhr객체에 데이터를 붙여서 전송
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify());
}

formSubmit.addEventListener("click", postFunc);
