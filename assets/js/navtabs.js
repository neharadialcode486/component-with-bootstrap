const contentData = {
  beginner: {
    title: "Investisseur néophyte",
    text: "Dans ce module dédié aux débutants, on passe en revue les principes de bases de ce marché avec de nombreuses vidéos sur le bitcoin, les stratégies d'investissement les plus efficaces et la psychologie à adopter pour réussir. L'objectif est d'Acquérir les bases pour bien débuter en Investissement !",
  },
  profitable: {
    title: "Investisseur rentable",
    text: "Ce module se concentre sur des stratégies pour maximiser vos gains. Vous apprendrez à analyser le marché et à développer une approche de trading durable.",
  },
  experienced: {
    title: "Investisseur expérimenté",
    text: "Destiné aux investisseurs avec un peu plus d'expérience, ce module explore des techniques avancées et des outils pour affiner vos stratégies.",
  },
  smart: {
    title: "Investisseur malin",
    text: "Apprenez à investir intelligemment en utilisant des outils et des stratégies qui maximisent votre retour sur investissement tout en minimisant le risque.",
  },
  independent: {
    title: "Investisseur indépendant",
    text: "Ce module vous guidera pour devenir un investisseur autonome, capable de prendre des décisions éclairées et stratégiques.",
  },
};

function showContent(level) {

    const content = contentData[level];
    document.getElementById("content-title").textContent = content.title;
    document.getElementById("content-text").textContent = content.text;

   
    const buttons = document.querySelectorAll('.nav-btns button');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

   
    const activeButton = document.querySelector(`button[onclick="showContent('${level}')"]`);
    activeButton.classList.add('active-button');
}


// second-tabs

// Tab 2
const secondTab = document.querySelectorAll('.shop-nav-btn');
const contentsTwo = document.querySelectorAll('.tabsInfoTwo');

secondTab.forEach(tab => {
    tab.addEventListener('click', () => {
        const isActiveTab = document.querySelector('.shop-nav-btn.active');
        if (isActiveTab) {
                isActiveTab.classList.remove('active', 'bg-orange', 'text-white', 'font-bold');
            isActiveTab.classList.add('font-bold'); }
        contentsTwo.forEach(content => content.classList.add('d-none'));     
        tab.classList.add('active', 'bg-orange', 'text-white', 'font-bold');
        tab.classList.remove('font-bold',);
        
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('d-none');
    });
});

// Tab 2 swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
 loop: true,
 slidesPerView: 1,
 spaceBetween: 10,
 pagination: {
     el: ".swiper-pagination",
     clickable: true,
 },
 breakpoints: {
     640: {
         slidesPerView: 1,
     },
     768: {
         slidesPerView: 2,
     },
     1024: {
         slidesPerView: 3,
     },
 },
});
});