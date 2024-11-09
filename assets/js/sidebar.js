 // =====sidebar open & close==========
 const sidebar = document.getElementById("sidebar");
 const bodyName = document.getElementById("body");
 const blackLayer = document.querySelector(".sidebar-overlay")

 function OpenSidebar() {
   sidebar.classList.add("left-0");
   bodyName.classList.add("main_parent");
 }

 function CloseSidebar() {
   sidebar.classList.remove("left-0");
   bodyName.classList.remove("main_parent");
 }
 function CloseSidebar() {
  document.body.classList.remove("sidebar-overlay");
}

 // =======sidebar=toggle=================
 function toggleMenuIcon() {
   const menuIcon = document.querySelector(".menu-icon");
   menuIcon.classList.toggle("rotate");
   sidebar.classList.toggle("left-0");
   blackLayer.classList.toggle("d-flex")
 }