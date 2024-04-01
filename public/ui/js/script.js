// buka-tutup sidebar
let toggleBtn = document.querySelector("#btn");
let bodyBtn = document.querySelector("body");
let sidebar = document.querySelector(".sidebar");

toggleBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
  } else {
    tag_icon.style.transform = "rotate(0deg)";
    tag_toggle.classList.remove("tag-active");
    tag_toggle.classList.add("tag-non-active");
    tag_toggle.classList.add("dropdown-con");
    tag_toggle.classList.remove("update");
  }
};

// buka-tutup tag-dropdown_menu (sidebar)
let tag_dropdown = document.getElementById("dropdown-tag");
let tag_toggle = document.getElementById("tag-items");
let tag_icon = document.getElementById("dd-icon");

tag_dropdown.onclick = function () {
  if (tag_toggle.classList.contains("update")) {
    tag_icon.style.transform = "rotate(0deg)";
    tag_toggle.classList.remove("tag-active");
    tag_toggle.classList.add("tag-non-active");
    tag_toggle.classList.add("dropdown-con");
    tag_toggle.classList.remove("update");
  } else if (
    !tag_toggle.classList.contains("update") &&
    sidebar.classList.contains("active")
  ) {
    tag_icon.style.transform = "rotate(-180deg)";
    tag_toggle.classList.add("tag-active");
    tag_toggle.classList.remove("tag-non-active");
    tag_toggle.classList.remove("dropdown-con");
    tag_toggle.classList.add("update");
  } else if (
    !tag_toggle.classList.contains("update") &&
    !sidebar.classList.contains("active")
  ) {
    tag_icon.style.transform = "rotate(-180deg)";
    sidebar.classList.toggle("active");
    tag_toggle.classList.add("tag-active");
    tag_toggle.classList.remove("tag-non-active");
    tag_toggle.classList.remove("dropdown-con");
    tag_toggle.classList.add("update");
  }
};

// Tampilkan Waktu (Awal)
function tampilkanJam() {
  let sekarang = new Date();
  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();
  let detik = sekarang.getSeconds();

  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  let waktu = jam + ":" + menit + ":" + detik;

  if (jam >= 3 && jam < 12) {
    document.getElementById("jam").innerHTML = "Selamat Pagi";
    document.getElementById("logoJam").classList.add("bi-brightness-alt-high");
  } else if (jam >= 12 && jam < 16) {
    document.getElementById("jam").innerHTML = "Selamat Siang";
    document.getElementById("logoJam").classList.add("bi-brightness-high");
  } else if (jam >= 16 && jam < 19) {
    document.getElementById("jam").innerHTML = "Selamat Sore";
    document.getElementById("logoJam").classList.add("bi-sunset");
  } else if (jam >= 19 || jam < 3) {
    document.getElementById("jam").innerHTML = "Selamat Malam";
    document.getElementById("logoJam").classList.add("bi-moon-stars");
  }
}
setInterval(tampilkanJam, 1000); // Refresh setiap 1 detik
// Tampilkan Waktu (Akhir)


