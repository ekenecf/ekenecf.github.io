function validate(e) {
  e.preventDefault();

  const email = document.getElementById('mail');

  if (email.value !== email.value.toLowerCase()) {
    const err = document.querySelector('.err');
    err.classList.toggle('show');

  } else if (email.value === email.value.toLowerCase()) {
    const suc = document.querySelector('.suc');
    suc.classList.toggle('visible');
  }
}
  submit.addEventListener('click', validate);