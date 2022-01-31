const hamburger = document.querySelector("#hamburger");
const sidebar = document.querySelector("#sidebar");
const sidebarList = document.querySelectorAll(".sidebar-list");

const toggleSidebar = () => {
  sidebar.classList.toggle("sidebar-active");
};

hamburger.addEventListener("click", toggleSidebar);

sidebarList.forEach((sidebarListItem) => {
  sidebarListItem.addEventListener("click", toggleSidebar);
});
