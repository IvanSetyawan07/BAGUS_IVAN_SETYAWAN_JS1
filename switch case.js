const pilihanMenu = "Pasta";

// Menentukan aksi berdasarkan pilihan menu menggunakan switch case
let pesan = "";

switch (pilihanMenu) {
  case "Pizza":
    pesan = "Anda memilih Pizza. Harganya $10.";
    break;
  case "Pasta":
    pesan = "Anda memilih Pasta. Harganya $12.";
    break;
  case "Burger":
    pesan = "Anda memilih Burger. Harganya $8.";
    break;
  default:
    pesan = "Pilihan menu tidak tersedia.";
    break;
}

console.log(pesan);
