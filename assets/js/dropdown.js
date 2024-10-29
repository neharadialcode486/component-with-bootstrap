const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const value = this.getAttribute("data-value");
    const button = this.closest(".dropdown").querySelector(".dropdown-toggle");
    button.textContent = value;
  });
});
