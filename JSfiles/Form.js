function validate(e) {

  const email = document.getElementById('mail');

  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    const err = document.querySelector('.err');
    err.classList.toggle('show');
  }
}
const submit = document.getElementById('submit');
submit.addEventListener('click', validate);