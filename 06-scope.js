/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
console.log('---------ada berapa banyak variabel scope pada Javascript----------');
console.log('---------ada 2 variabel---------');
console.log('---------jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript----------');
console.log('--varriabel pertama adalah local scope, variabel ini memblok kode yang berada di dalamnya sehingga tidak dapat diakses dari luar block. variabel lokal scope dapat digunakan dengan memasukkan variabel di dalam tanda{}');
console.log('--variabel kedua adalah global scope, variabel ini membuat kita dapat mengakses semua variabel yang dideklarasikan diluar block');
console.log('-----implementasi sederhana----');
console.log('----local scope-----');
console.log(`----{let x = 'imam'}---- ini membuat x hanya dapat diakses didalam blok tersebut -----`);
console.log('----global scope-----');
console.log(`----let x = 'imam'; ---- karena tidak berada di dalam blok, ini membuat kita dapat mengaksesnya dimanapun-----`);



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
console.log('----apa yang akan tampil didalam console.log----');
console.log(`----yang akan tampil adalah 'Mariah'-----`);
console.log(`----apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variabel name----`);
console.log(`----hal ini dikarenakan varibabel const name tidak dipanggil menggunakan console log. sementara pada baris kode di atas yang dipanggil adalah function printFirstName-------`);
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
