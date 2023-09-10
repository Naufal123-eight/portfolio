// ===========================RESPONSIVE NAVBAR=======================================
const navList = document.querySelector(".navlist");
const menuBtn = document.querySelector(".ri-menu-line");

menuBtn.onclick = function () {
  navList.classList.toggle("active");
  menuBtn.classList.toggle("ri-arrow-up-double-line");
};
// ===========================FIXED NAVBAR=======================================
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});
// ===========================PORTFOLIO=======================================

var portfolioTabs = document.getElementsByClassName("portfolio-tab");
var tabContents = document.getElementsByClassName("tab-content");

function tabOpen(x) {
  for (portfolioTab of portfolioTabs) {
    portfolioTab.classList.remove("active");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(x).classList.add("active-content");
}
// ===========================THEME TOGGLER=======================================
let themeBtn = document.querySelector("#theme-btn");
themeBtn.onclick = function () {
  themeBtn.classList.toggle("ri-sun-line");
  if (themeBtn.classList.contains("ri-sun-line")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
// ===========================SCROLLREVEAL ANIMATION=======================================
// Fungsi untuk mengganti nilai data-aos pada elemen
function changeAOSAnimation() {
  const screenWidth = window.innerWidth;

  // Cek jika lebar layar kurang dari 550px
  if (screenWidth < 550) {
    // Ubah data-aos menjadi "fade-up" pada elemen dengan data-aos="fade-right" dan "fade-left"
    const elementsToChange = document.querySelectorAll('[data-aos="fade-right"]', '[data-aos="fade-left"]');
    elementsToChange.forEach((element) => {
      element.setAttribute("data-aos", "fade-up");
    });
  }
}

// Panggil fungsi ketika halaman dimuat dan saat ukuran layar berubah
window.addEventListener("load", changeAOSAnimation);
window.addEventListener("resize", changeAOSAnimation);
