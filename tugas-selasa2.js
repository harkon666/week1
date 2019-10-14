// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

var tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200) 

switch (true) {
    case   tanggal < 32 && tanggal > 0 :
            tanggal;
        break;
    default :
        tanggal = "salah"
        break;
    
}

switch (bulan) {
    case  "januari" :
            bulan;
        break;
    case  "februari" :
            bulan;
        break;
    case  "maret" :
            bulan;
        break;
    case  "april" :
            bulan;
        break;
    case  "mei" :
            bulan;
        break;
    case  "juni" :
            bulan;
        break;
    case  "juli" :
            bulan;
        break;
    case  "agusutus" :
            bulan;
        break;
    case  "september" :
            bulan;
        break;
    case  "oktober" :
            bulan;
        break;
    case  "november" :
            bulan;
        break;
    case  "desember" :
            bulan;
        break;
    default :
        bulan = "salah"
        break;
    
}

switch (true) {
    case   tahun < 9999 && tahun > 0 :
            tahun;
        break;
    default :
        tahun = "salah"
        break;
    
} 

console.log(`${tanggal} ${bulan} ${tahun}`)