// Halaman Tambah Tagihan
// per-murid
let btn_tag_murid = document.getElementById("tam-tag-murid");
let dd_murid = document.getElementById("tag-murid");
let icon_murid = document.getElementById("murid_dd_i");

let open_murid = true;
btn_tag_murid.onclick = function () {
  dd_murid.classList.toggle("active");
  if (open_murid) {
    icon_murid.style.transform = "rotate(90deg)";
    open_murid = !open_murid;
  } else {
    icon_murid.style.transform = "rotate(0deg)";
    open_murid = !open_murid;
  }
};

// per-kelas
let btn_tag_kelas = document.getElementById("tam-tag-kelas");
let dd_kelas = document.getElementById("tag-kelas");
let icon_kelas = document.getElementById("kelas_dd_i");

if (dd_kelas.classList.contains("active")) {
  icon_kelas.style.transform = "rotate(90deg)";
}

let open_kelas = true;
btn_tag_kelas.onclick = function () {
  dd_kelas.classList.toggle("active");
  if (open_kelas) {
    // true
    icon_kelas.style.transform = "rotate(0deg)";
    open_kelas = !open_kelas;
  } else {
    // false
    icon_kelas.style.transform = "rotate(90deg)";
    open_kelas = !open_kelas;
  }
};

// per-tahunAkhir
let btn_tag_ta = document.getElementById("tam-tag-ta");
let dd_ta = document.getElementById("tag-ta");
let icon_ta = document.getElementById("ta_dd_i");

if (dd_ta.classList.contains("active")) {
  icon_ta.style.transform = "rotate(90deg)";
}

let open_ta = true;
btn_tag_ta.onclick = function () {
  dd_ta.classList.toggle("active");
  if (open_ta) {
    icon_ta.style.transform = "rotate(0deg)";
    open_ta = !open_ta;
  } else {
    icon_ta.style.transform = "rotate(90deg)";
    open_ta = !open_ta;
  }
};
