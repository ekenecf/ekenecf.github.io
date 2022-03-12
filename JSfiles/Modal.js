const Modalcontainer = document.querySelector('.Modalcontainer');
const Modalh = document.querySelector('.Modalh');
const Modalrole = document.querySelector('.Modalrole');
const Modalyear = document.querySelector('.Modalyear');
const ModalImg = document.querySelector('.ModalImg');
const Modalpara = document.querySelector('.Modalpara');
const ModalWorks = document.querySelector('.ModalWorks');
const Modalcan = document.querySelector('.Modalcan');
const cross = document.querySelector('.cross');
const cardCover = document.querySelector('.cardCover');

const Arrayprojects = [
  {
    title: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: './images/Snapshoot-Portfolio-(3).jpg',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'CANOPY',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Mulit-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: './images/Snapshoot-Portfolio(4).jpg',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'CANOPY',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Tonic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: './images/Snapshoot-Portfolio(5).jpg',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'CANOPY',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Mulit-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    imageLink: './images/Snapshoot-Portfolio(6).jpg',
    tags: ['HTML', 'CSS', 'Javascript'],
    role: 'Back End Dev',
    company: 'CANOPY',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
];

(() => {
  cardCover.innerHTML = '';
  for (let i = 0; i < Arrayprojects.length; i += 1) {
    let worklist = '';
    for (let j = 0; j < Arrayprojects[i].tags.length; j += 1) {
      worklist = `${worklist}<li class="tag">${Arrayprojects[i].tags[j]}</li>`;
    }
    cardCover.innerHTML = `${cardCover.innerHTML}
    <section class="GridCard3">
    <section class="GridWrapper3">
        <section class="second-section3">
            <div>
                <img src="${Arrayprojects[i].imageLink}" alt="section-eader" class="img1">
            </div>
            <div class="sub-section3">
                <h2 class="mobile-ton">${Arrayprojects[i].title}</h2>               
                    <ul class="to-do3">                       
                        <li class="canopy">${Arrayprojects[i].company}</li>
                        
                        <li class="back-end">${Arrayprojects[i].role}</li>
                        
                        <li class="year">${Arrayprojects[i].year}</li>
                    </ul>
                <p class="to-do-para3">${Arrayprojects[i].description}
                </p>
                <div class="works">
                    <ul>
                     ${worklist}
                    </ul>
                </div>
                <div class="click24">
                    <button class="prj-view-btn">See Projects</button>
                </div>
            </div>
        </section>
    </section>
</section>`;
  }
  const viewBtn = document.querySelectorAll('.prj-view-btn');
  for (let i = 0; i < viewBtn.length; i += 1) {
    viewBtn[i].addEventListener('click', () => {
      Modalh.innerHTML = Arrayprojects[i].title;
      Modalrole.innerHTML = Arrayprojects[i].role;
      Modalyear.innerHTML = Arrayprojects[i].year;
      Modalpara.innerHTML = Arrayprojects[i].description;
      ModalImg.src = Arrayprojects[i].imageLink;
      Modalcan.innerHTML = Arrayprojects[i].company;
      ModalWorks.innerHTML = '';
      for (let j = 0; j < Arrayprojects[i].tags.length; j += 1) {
        ModalWorks.innerHTML = `${ModalWorks.innerHTML}<li class="tag">${Arrayprojects[i].tags[j]}</li>`;
      }
      Modalcontainer.classList.toggle('vanish');
    });
  }
})();

function close() {
  Modalcontainer.classList.toggle('vanish');
}
cross.addEventListener('click', close);