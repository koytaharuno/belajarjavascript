// Menampilkan Output Console.log
console.log("Hello, World!");

// Mendefinisikan Fungsi untuk Menambahkan Dua Angka
function addNumbers(a, b) {
    return a + b;
}

// Memanggil Fungsi dan Menampilkan Hasilnya
const result = addNumbers(5, 10);
console.log("Hasil Penjumlahan: " + result);

// Mendefinisikan Fungsi untuk Mengalikan Dua Angka
function multiplyNumbers(a, b) {
    return a * b;
}

// Memanggil Fungsi dan Menampilkan Hasilnya
const product = multiplyNumbers(5, 10);
console.log("Hasil Perkalian: " + product);

// Mendefinisikan Fungsi untuk Menghitung Faktorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Memanggil Fungsi dan Menampilkan Hasilnya
const factResult = factorial(5);
console.log("Hasil Faktorial: " + factResult);

// Menampilkan Pesan Selesai
console.log("Selesai menjalankan program.");