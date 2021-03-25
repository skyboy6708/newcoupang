const search = document.getElementById("search-input");
const searchBtn = document.getElementById("search-submit");

function getFunc() {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "/form_receiver?searchInput=" + search.value); // 메소드와 주소 설정
  xhr.onload = () => {
    console.log(xhr.response);
  };
  xhr.send();
}

searchBtn.addEventListener("click", getFunc);
