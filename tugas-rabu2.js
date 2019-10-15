// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

let i = 1;
let x = "";
let y = "";

console.log('LOOPING PERTAMA')
while (i < 21) {
    x = "I love coding"
    if (i % 2 === 0) {
        console.log(`${i} - ${x}`)
    }
    i++
}
console.log('LOOPING KE DUA')
i = 21;
while (i > 0) {
    y = "I will become fullstack developer"
    if (i % 2 === 0) {
        console.log(`${i} - ${y}`)
    }
    i--
}


// ------------------------------------
console.log('')
// ------------------------------------

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat 
// tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. 
// Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

console.log('LOOPING PERTAMA')

for (let j = 1; j < 21; j++) {
    console.log(`${j} - ${x}`)
}

console.log('LOOPING KE DUA')

for (let j = 21; j > 0; j--) {
    console.log(`${j} - ${y}`)
}


// ------------------------------------
console.log('')
// ------------------------------------


// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(`Counter sekarang : ${i} - genap`)
    } else {
        console.log(`Counter sekarang : ${i} - ganjil`)
    } 
}

console.log('');

for (let i = 1; i < 101; i++) {
    if ( i === 1 ) {
        console.log(i + ' ""')
    } else {
        i += 1;
        if (i % 3 === 0) {
            console.log(`${i} KELIPATAN 3`)
        } else {
            console.log(i + ' ""');
        } 
    }
} 

console.log('');

for (let i = 1; i < 101; i++) {
    if ( i === 1 ) {
        console.log(i + ' ""')
    } else {
        i += 4;
        if (i % 6 === 0) {
            console.log(`${i} KELIPATAN 6`)
        } else {
            console.log(i + ' ""');
        } 
    }
}

console.log('');

for (let i = 1; i < 101; i++) {
    if ( i === 1 ) {
        console.log(i + ' ""')
    } else {
        i += 8;
        if (i % 10 === 0) {
            console.log(`${i} KELIPATAN 10`)
        } else {
            console.log(i + ' ""');
        } 
    }
} 