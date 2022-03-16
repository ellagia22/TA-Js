/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let i = Number;
for ( i=2; i <= 100; i++) {
    bil= 0;
    for ( let j= 1; j <= i; j++){
        if (i%j == 0){
            bil= bil + 1;
        }
    }
    if (bil==2){
        console.log(i);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = Number;

/// EDIT HERE
let a = 1;
while (primeCounter < 50) {a++
    let cut = false;
    for (let b = 2; b <= a; b++) {
        if (a%b==0 && a!==b){
        cut = true;
    }
}
if (cut == false){
    primeCounter++; // 2 3 4 7 ..
    fiftiethPrime = a;
    }
}
console.log(fiftiethPrime)

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let c = 0;
do {c++;
    if(c%2 == 1){
        oddCounter++;
        if(oddCounter == 50){
            fiftiethOdd = c;
            console.log(fiftiethOdd);
            }
        }
    } while (oddCounter<=50);
