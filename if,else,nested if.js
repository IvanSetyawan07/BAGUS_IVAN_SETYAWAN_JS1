const nilaiSiswa = 85;

let kategoriNilai = "";

if (nilaiSiswa >= 90) {
  kategoriNilai = "A";
} else if (nilaiSiswa >= 80) {
  kategoriNilai = "B";
} else if (nilaiSiswa >= 70) {
  kategoriNilai = "C";
} else if (nilaiSiswa >= 60) {
  kategoriNilai = "D";
} else {
  kategoriNilai = "E";
}

console.log(`Kategori nilai siswa: ${kategoriNilai}`);