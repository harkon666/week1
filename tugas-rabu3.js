// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks 
// (bintang). Setiap baris memiliki 1 simbol '*'.


var rows1 = 5 // input the number of rows


// do loops to display asterisks in the console.
for(i = 0; i < rows1; i++){
    console.log("*")
}
// ------------------------------------
console.log('')
// ------------------------------------

// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks 
// (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam 
// loop untuk menyelesaikan kasus ini.

var rows2 = 5 // input the number of rows

// do loops to display asterisks in the console.
for (i = 0; i < rows2; i++) {
    let x = "";
    for (j = 0; j < rows2; j++){
        x += "*";
    }
    console.log(x);
}

// ------------------------------------
console.log('loop biasa')
// ------------------------------------

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks 
// (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, 
// hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested 
// loop atau loop di dalam loop untuk menyelesaikan kasus ini.

var rows3 = 5; // input the number of rows
var x ="";

// do loops to display asterisks in the console.
for (let i = 0; i < rows3; i++) {
    x += "*"
    console.log(x)
}


// ------------------------------------
console.log('Nested loop')
// ------------------------------------

// atau mau yang nested loop?
var y = "";
for (let i = 0; i < rows3; i++) {
    
    for (let j = 0; j < ( 2 / rows3); j++) {
        y +="*"
        
    }
    console.log(y)
}


//baru nyadar sama kelipatan bodohnya gua akwkakakawkwak