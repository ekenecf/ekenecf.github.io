const Hamb = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const cls = document.querySelector('.close');
const link = document.querySelectorAll('.link');

function pop() {
  toggle.classList.toggle('active');
  Hamb.classList.toggle('hidden');
  cls.classList.toggle('show');
}

Hamb.addEventListener('click', pop);

function popout() {
  toggle.classList.toggle('active');
  Hamb.classList.toggle('hidden');
  cls.classList.toggle('show');
}

cls.addEventListener('click', popout);

link.forEach((link) => {
  link.addEventListener('click', popout);
});
