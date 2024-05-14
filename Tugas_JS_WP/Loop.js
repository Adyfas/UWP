//Loop:



console.log("Bro, sekarang kita bahas tentang loop di JavaScript, yuk! Loop itu kayak ulangan, tapi bukan ulangan sekolah ya. Ini buat ngulang-ngulang tugas yang sama dalam kode.");

// 1. For Loop
console.log("Pertama, ada 'for loop'. Ini paling sering dipake. Cocok buat ngulang sesuatu yang jumlahnya udah pasti.");
for (let i = 0; i < 5; i++) {
  console.log("For loop ke-", i);
}

// 2. While Loop
console.log("Kedua, 'while loop'. Ini jalan terus sampe kondisinya false. Harus hati-hati, bro, jangan sampe lupa bikin kondisi yang bisa berhenti, nanti malah loop forever.");
let j = 0;
while (j < 3) {
  console.log("While loop ke-", j);
  j++;
}

// 3. Do-While Loop
console.log("Ketiga, 'do-while loop'. Mirip 'while loop', tapi ini pasti jalan minimal sekali, baru deh cek kondisi.");
let k = 0;
do {
  console.log("Do-While loop ke-", k);
  k++;
} while (k < 2);

// 4. For..of Loop
console.log("Keempat, 'for..of loop'. Ini enak buat ngulang-ngulang isi dari array atau object yang iterable.");
let buah = ["Apel", "Mangga", "Jeruk"];
for (const b of buah) {
  console.log("Sekarang buah: ", b);
}

// 5. For..in Loop
console.log("Terakhir, 'for..in loop'. Ini spesial buat ngulang-ngulang properties dari object.");
let mobil = { merk: "Toyota", model: "Avanza", tahun: 2020 };
for (const m in mobil) {
  console.log(m + ": " + mobil[m]);
}

console.log("Nah, itu dia jenis-jenis loop di JavaScript. Pilih yang paling cocok buat kebutuhan lo, bro!");
