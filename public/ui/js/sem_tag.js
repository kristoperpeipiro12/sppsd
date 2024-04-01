// let btnCounter = document.getElementById("coba");

// let liIndex = [];
// let counter = 0;

// let tglTagihan = new Date();

// btnCounter.onclick = function () {
//   let keterangan = document.getElementById("keterangan").value;
//   if (keterangan == "") {
//     alert("Harap Masukkan Keterangan");
//     return;
//   }
//   counter++;
//   // Membuat elemen li baru
//   let newListItem = document.createElement("li");

//   //Membuat elemen span baru (nama tagihan)
//   let newNamaSpan = document.createElement("span");
//   newNamaSpan.textContent = "Nama : Tagihan " + counter;

//   //Membuat elemen span baru (nama tagihan)
//   let newKetSpan = document.createElement("span");
//   newKetSpan.textContent = keterangan;

//   //Membuat elemen span baru (tanggal tagihan)
//   let newTglSpan = document.createElement("span");
//   newTglSpan.id = "tgl";
//   newTglSpan.textContent =
//     "Jatuh Tempo : " +
//     tglTagihan.getDate() +
//     "/" +
//     tglTagihan.getMonth() +
//     "/" +
//     tglTagihan.getFullYear();

//   //Membuat elemen div baru
//   let newTglDiv = document.createElement("div");
//   newTglDiv.classList.add("tanggal");
//   newTglDiv.appendChild(newKetSpan);
//   newTglDiv.appendChild(newTglSpan);

//   // Menambahkan kelas ke elemen li
//   newListItem.classList.add("tagihan");
//   newListItem.appendChild(newNamaSpan);
//   newListItem.appendChild(newTglDiv);

//   // Mendapatkan elemen ul dengan kelas list-group
//   let listGroup = document.querySelector(".list-tagihan");

//   // Menambahkan elemen li ke dalam elemen ul
//   listGroup.appendChild(newListItem);

//   // Membersihkan Input Keterangan
//   document.getElementById("keterangan").value = "";
// };
