const form = document.querySelector("#questionnaire");
const show = document.querySelector("#show");
const hide = document.querySelector("#hide");

// 나오는 문진표를 슬라이드 토글로 구현하기 //

function formShow() {
  form.style.display = "";
  show.style.display = "none";
}

function formHide() {
  form.style.display = "none";
  show.style.display = "";
}

show.addEventListener("click", formShow);
hide.addEventListener("click", formHide);
