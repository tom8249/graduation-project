const form = document.querySelector("#questionnaire");
const show = document.querySelector("#show");
const hide = document.querySelector("#hide");

function formShow() {
    form.style.display = '';
}

function formHide() {
    form.style.display = 'none';
}


show.addEventListener("click",formShow);
hide.addEventListener("click",formHide);
