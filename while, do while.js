const nilaiSiswa = [90, 85, 78, 92, 88, 95, 89, 91, 87, 93];

const jumlahNilai = nilaiSiswa.length;

let totalNilai = 0;

let i = 0;

let nilaiMaksimum = -Infinity;
let nilaiMinimum = Infinity;

while (i < jumlahNilai) {

  totalNilai += nilaiSiswa[i];
  
  if (nilaiSiswa[i] > nilaiMaksimum) {
    nilaiMaksimum = nilaiSiswa[i];
  }
  
  if (nilaiSiswa[i] < nilaiMinimum) {
    nilaiMinimum = nilaiSiswa[i];
  }
  
  i++;
}

const rataRata = totalNilai / jumlahNilai;
console.log("=== Data Nilai Siswa ===");
for (let j = 0; j < jumlahNilai; j++) {
  console.log(`Nilai siswa ke-${j + 1}: ${nilaiSiswa[j]}`);
}
console.log("=========================");
console.log(`Jumlah nilai siswa: ${totalNilai}`);
console.log(`Rata-rata nilai siswa: ${rataRata.toFixed(2)}`);
console.log(`Nilai maksimum: ${nilaiMaksimum}`);
console.log(`Nilai minimum: ${nilaiMinimum}`);
