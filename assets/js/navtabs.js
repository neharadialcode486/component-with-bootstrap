// Tab 1
const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".tabsInfo");
const tabHeads = document.querySelectorAll(".tabHead");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const isActiveTab = document.querySelector(".tab.active");
    if (isActiveTab) {
      isActiveTab.classList.remove("active", "button-one");
    }
    const isActiveTabHead = document.querySelector(".tabHead.active");
    if (isActiveTabHead) {
      isActiveTabHead.classList.remove(
        "active",
        "light-green",
        "bg-light-black"
      );
      isActiveTabHead.classList.add("text-white");
    }
    content.forEach((content) => content.classList.add("d-none"));
    tab.classList.add("active", "button-one");

    const tabHead = tab.querySelector(".tabHead");
    tabHead.classList.add("active", "light-green", "bg-light-black");
    tabHead.classList.remove("text-white");
    const target = tab.getAttribute("data-target");
    const targetContent = document.getElementById(target);
    targetContent && targetContent.classList.remove("d-none");
  });
});

// tab 1 Accordion
const accordionItems = document.querySelectorAll(".accordionItem");
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordionHeader");
  const content = item.querySelector(".accordionInfo");
  const icon = item.querySelector("img");
  const heading = item.querySelector(".accordionHead");

  header.addEventListener("click", () => {
    const accordionActive = document.querySelector(".accordionItem.active");

    if (accordionActive && accordionActive !== item) {
      // Deactivate the currently active item
      accordionActive.classList.remove("active");
      accordionActive.querySelector(".accordionInfo").classList.add("d-none");
      accordionActive.querySelector("img").src = "./assets/images/svg/add.svg";
      accordionActive.classList.add("border-light-black");
      accordionActive
        .querySelector(".accordionHead")
        .classList.remove("text-3xll", "fw-bold", "max-md-text-2xl");
      accordionActive
        .querySelector(".accordionHead")
        .classList.add("text-lg", "fw-medium");
      accordionActive.querySelector(".accordionHeader").classList.add("p-6");
    }
    item.classList.toggle("active");
    content.classList.toggle("d-none");
    icon.classList.toggle("rotate");
    icon.classList.toggle("duration-one-sec");

    if (item.classList.contains("active")) {
      icon.src = "./assets/images/svg/minus.svg";
      item.classList.remove("border-light-black");
      header.classList.remove("p-6");
      heading.classList.add("text-3xll", "fw-bold", "max-md-text-2xl");
      heading.classList.remove("text-lg", "fw-medium");
    } else {
      icon.src = "./assets/images/svg/add.svg";
      item.classList.add("border-light-black");
      header.classList.add("p-6");
      heading.classList.add("text-lg", "fw-medium");
      heading.classList.remove("text-3xll", "fw-bold", "max-md-text-2xl");
    }
  });
});
// Tab 2
const tabButtons = document.querySelectorAll('.btn[data-target]');
const contents = document.querySelectorAll('.tabsInfoTwo');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const activeButton = document.querySelector('.btn.active');
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton.classList.remove('bg-orange',);
            activeButton.classList.add('text-black'); 
        }
        contents.forEach(content => content.classList.add('d-none'));

        button.classList.add('active','text-black','bg-orange');
        button.classList.remove('text-black');

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