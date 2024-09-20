
const body = document.querySelector("body"),
      sidebar = body.querySelector("nav"),
      toggle = body.querySelector(".sidebar-toggle"),
      modeSwitch = body.querySelector(".mode-toggle .switch");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    handleLocalStorage();
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    saveThemeToLocalStorage();
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const savedSidebar = localStorage.getItem("sidebar");

    if (savedTheme === "dark") {
        body.classList.add("dark");
    }
    if (savedSidebar === "close") {
        sidebar.classList.add("close");
    }
});
