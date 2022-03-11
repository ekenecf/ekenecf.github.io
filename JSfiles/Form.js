
function validate(e) {
  e.preventDefault();

  const userName = document.getElementById('name');
  const submit = document.getElementById('submit')
  const mail = document.getElementById('mail');
  const msg = document.getElementById('msg');

submit.addEventListener('click', validate);
if (!userName.value) {
    userName.classList.toggle('view');
} else if(!mail.value) {
  mail.classList.toggle('view');
}else if(!msg.value ){
  msg.classList.toggle('view');
}else {
  window.location ="./newpage.html"
}
}
