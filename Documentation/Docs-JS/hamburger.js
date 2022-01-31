const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector("#sidebar");
const sidebarList = document.querySelectorAll(".sidebar-list");
const mainSection = document.querySelector("#main");

const toggleSidebar = () => {
  sidebar.classList.toggle("sidebar-active");
  mainSection.classList.toggle("blur-filter");
};

hamburger.addEventListener("click", toggleSidebar);

sidebarList.forEach((sidebarListItem) => {
  sidebarListItem.addEventListener("click", toggleSidebar);
});
