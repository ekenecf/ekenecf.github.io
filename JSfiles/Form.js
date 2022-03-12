function validate() {
  const mail = document.getElementById('mail');
  if (mail.value !== mail.toLowerCase()) {
    mail.classList.toggle('err');
  } else {
    mail.classList.toggle('suc');
  }
}
const click = document.getElementById('submit');
click.addEventListener('submit', validate);
