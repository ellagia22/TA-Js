/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
console.log('------type error------');
console.log('---type error = terjadi kesalahan pada tipe variabel');
console.log('------reference error------');
console.log('---reference error = terjadi kesalahan pada referensi variabel');
console.log('------range error------');
console.log('---range error = teradi kesalahan karena menggunakan angka di luar rentang nilai yang legal');
console.log('------syntax error------');
console.log('---syntax error = terjadi kesalahan pada syntax---');

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log('---apabila kita menjalankan baris kode dibawah apa yang akan terjadi?---');
console.log('---terjadi error---');
console.log('---apabila terjadi error, termasuk dalam kategori manakah error tersebut?---');
console.log('---termasuk dalam reference error, hal ini terjadi karena pemanggilan dilakukan sebelum inisialisasi variabel salaryWithVar dan salaryWithConst dilakukan---');

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
