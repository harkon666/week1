// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu namadan peran. Variabel peranharus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peranberbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peranserta mengeluarkan respon sesuai isi variabel tersebut.

// algoritma
// kalau nama ga ada ada alertnya kalau peran ga ada, ada alertnya, kalau nama dan peran ga ada, alertnya dari nama
// kalau nama dan peran ada maka berhasil, tapi kalau nama ada tapi perannya tidak sesuai.. developernya bakal nyuruh
// kamu jadi bot aja

let nama = "dimas", peran = "penyihir";

if(nama.length === 0 && peran.length === 0) {
    console.log('Nama Harus diisi!')
} else if (nama.length === 0 && peran.length > 0) {
    console.log('Nama Harus diisi!')
} else if (nama.length > 0 && peran.length === 0) {
    console.log(`halo ${nama}, pilih peranmu untuk memulai game! `)
} else if (nama.length > 0 && peran.length > 0) {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
     if (peran === 'Ksatria' || peran === 'ksatria') {
        console.log(`halo ${peran} ${nama} , kamu dapat menyerang dengan senjatamu!`)
     } else if (peran === 'Tabib' || peran === 'tabib') {
        console.log(`halo ${peran} ${nama} , kamu akan membantu temanmu yang terluka`)
     } else if (peran === 'Penyihir' || peran === 'penyihir') {
        console.log(`halo ${peran} ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
     } else {
         console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')
     }
}
