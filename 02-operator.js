/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

let pengeluaran = Number;
let gundam = 750000
let makan = 2000000
let kost = 1000000
let subscription = 250000
pengeluaran = (gundam + makan + kost + subscription)

let Gaji = Number;
let gajiPokok = 5000000;
let gajiBonus = 10/100 * gajiPokok;
let gajiLembur = 5/100 * gajiPokok;
Gaji = (gajiPokok + gajiBonus +gajiLembur);

/// Sisa Gaji
const sisaGaji = (Gaji-pengeluaran);


let number_string = sisaGaji.toString(),
    sisa 	= number_string.length % 3,
    rupiah 	= number_string.substr(0, sisa),
    ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    console.log(rupiah);


/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = Boolean;
console.log(isSame(oneInString == oneInNumber));


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = Boolean;
console.log(isHigher(studentA >= studentB));

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = Boolean;
console.log(oneInString === oneInNumber);
