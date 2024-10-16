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
// Select all tab buttons using Bootstrap's button class
const tabButtons = document.querySelectorAll('.btn[data-target]');
const contents = document.querySelectorAll('.tabsInfoTwo');

// Add click event listeners to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from currently active tab button
        const activeButton = document.querySelector('.btn.active');
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton.classList.remove('bg-orange',);
            activeButton.classList.add('text-black'); // Assuming default text color is black
        }

        // Hide all tab contents
        contents.forEach(content => content.classList.add('d-none'));

        // Activate the clicked tab button
        button.classList.add('active','text-black','bg-orange');
        button.classList.remove('text-black');

        // Get the target content ID and show it
        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.remove('d-none');
        }
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