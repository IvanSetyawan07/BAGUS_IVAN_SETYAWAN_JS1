function tentukanKategoriNilai(nilai) {
    if (nilai >= 90) {
      return "A";
    } else if (nilai >= 80) {
      return "B";
    } else if (nilai >= 70) {
      return "C";
    } else if (nilai >= 60) {
      return "D";
    } else {
      return "E";
    }
  }
  
  const nilaiSiswa1 = 85;
  const nilaiSiswa2 = 92;
  const nilaiSiswa3 = 52;
  
  console.log("=== Kategori Nilai Siswa ===");
  console.log(`Nilai siswa 1: ${nilaiSiswa1} (Kategori: ${tentukanKategoriNilai(nilaiSiswa1)})`);
  console.log(`Nilai siswa 2: ${nilaiSiswa2} (Kategori: ${tentukanKategoriNilai(nilaiSiswa2)})`);
  console.log(`Nilai siswa 3: ${nilaiSiswa3} (Kategori: ${tentukanKategoriNilai(nilaiSiswa3)})`);
  console.log("===============================");