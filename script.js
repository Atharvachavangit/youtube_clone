let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
    sidebar.classList.toggle("left-sidebar")
}

document.getElementById("toggleBtn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("left-sidebar");
    document.getElementById("mainBody").classList.toggle("sidebar-collapsed");
});
