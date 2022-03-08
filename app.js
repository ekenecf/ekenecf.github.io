let Hamb = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');
let cls = document.querySelector('.close')
let links = document.querySelector('.link')


function pop() {
  toggle.classList.add('active');
  Hamb.classList.add('hidden');
  cls.classList.add('show');
}

Hamb.addEventListener('click', pop);

function popout() {
  toggle.classList.remove('active');
  Hamb.classList.remove('hidden');
  cls.classList.remove('show');
}

cls.addEventListener('click', popout);

links.forEach((link) => {
  link.addEventListener('click', popout);
})
