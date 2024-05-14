//--------------------//


//GET-POST-PUT:


// Bro, yuk kita bahas tentang GET, POST, dan PUT biar makin paham!

// GET itu kayak lo nanya ke server, "Bro, data yang ini ada nggak?" Biasanya dipakai buat ambil data.
// Misalnya, lo mau cek profil temen lo di sosmed.
// Contoh pakai GET:
fetch('https://api.sosmed.com/users/andi')
  .then(response => response.json())
  .then(data => console.log('Profil Andi:', data));

// POST itu kayak lo bilang ke server, "Bro, simpen data ini yuk!" Biasanya dipakai buat kirim data baru.
// Misalnya, lo mau daftar akun baru di sosmed.
// Contoh pakai POST:
fetch('https://api.sosmed.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({nama: "Tono", umur: 22})
})
.then(response => response.json())
.then(data => console.log('Akun baru:', data));

// PUT itu kayak lo bilang ke server, "Bro, update data ini dong!" Biasanya dipakai buat update data yang udah ada.
// Misalnya, lo mau ganti foto profil di sosmed.
// Contoh pakai PUT:
fetch('https://api.sosmed.com/users/tono', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({fotoProfil: "foto_baru.jpg"})
})
.then(response => response.json())
.then(data => console.log('Profil Tono diupdate:', data));

// Jadi, pake GET kalo lo mau tanya data, POST kalo mau simpen data baru, dan PUT kalo mau update data yang udah ada. Gampang kan, bro?

//aman ya otaknya gak ngebul ok!
