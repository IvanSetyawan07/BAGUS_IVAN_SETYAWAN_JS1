const nilaiSiswa = [32, 76, 62, 100, 99, 50, 100, 78];
const jumlahSiswa = nilaiSiswa.length;
let jumlahLulus = 0;
let jumlahTidakLulus = 0;

for (let i = 0; i < jumlahSiswa; i++) {
  if (nilaiSiswa[i] > 70) {
    jumlahLulus++;
  } else {
    jumlahTidakLulus++;
  }
}

console.log("=== Hasil Ujian Siswa ===");
console.log(`Jumlah siswa yang lulus: ${jumlahLulus}`);
console.log(`Jumlah siswa yang tidak lulus: ${jumlahTidakLulus}`);
console.log("===========================");