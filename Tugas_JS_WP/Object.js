//----------//




//Object:

// Bro, Object itu kayak buku catatan. Lo bisa simpen banyak info dalam satu tempat, dan tiap info punya 'key' sebagai labelnya.

// Contoh Object biasa:
let mobil = {
    merk: "Toyota",
    model: "Avanza",
    tahun: 2020
  };
  console.log("Info Mobil: ", mobil);
  
  // Object dengan fungsi:
  let orang = {
    nama: "Andi",
    umur: 25,
    sapa: function() {
      console.log("Halo, nama saya " + this.nama);
    }
  };
  orang.sapa(); // Output: Halo, nama saya Andi
  
  // Array of Objects:
  let bukuTeman = [
    {nama: "Budi", umur: 20},
    {nama: "Cici", umur: 22},
    {nama: "Dodi", umur: 23}
  ];
  console.log("Buku Teman: ", bukuTeman);
  console.log("Umur Cici: ", bukuTeman[1].umur); // Output: 22
  
  // Gampang kan? Object membantu lo untuk simpen banyak info yang terstruktur dalam satu tempat.
  
  
  
  
  