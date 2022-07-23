import { Router } from "express";

// book collection
import { koleksiBuku } from "../Data";

// Materials :
// 1. Exercise
// 2. Joi (Validate Input for naught user)
// 3. Move logic to function (for cleaner Route file)
// 4. Move function to class (for better organization (tagging bangun-datar/perpustakaan) in Route file)

// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================

// CREATE THE ROUTER
const route = Router();

// ROUTE SEPUTAR PERHITUNGAN BANGUN DATAR
route.get('/bangun-datar', (req, res) => {
  res.send(
    `
      <p>Halo, bagian ini adalah segala hal berkaitan dengan perhitungan bangun datar<br>Berikut beberapa API yang tersedia : </p>
      <ul>
        <li>POST : <code>/bangun-datar/persegi</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling persegi dengan input <i>sisi</i></li>
        <li>POST : <code>/bangun-datar/lingkaran</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling lingkaran dengan input <i>radius</i></li>
        <li>POST : <code>/bangun-datar/segitiga</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling segitiga sama sisi dengan input <i>alas</i> dan <i>tinggi</i></li>
        <li>POST : <code>/bangun-datar/persegi-panjang</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling persegi panjang dengan input <i>panjang</i> dan <i>lebar</i></li>
      </ul>
    `
  )
})

route.post('/bangun-datar/persegi', (req, res) => {
  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING PERSEGI
  // 1. ambil data dari client/user
  const payload = req.body;

  // 2. definisikan variabel yang dibutuhkan
  const sisi =payload.sisi

  // 3. hitung luas
  luas = sisi * sisi;

  // 4. hitung keliling
  keliling = 4 * sisi

  // Kirim Luas dan Keliling ke User
  return res.json({ data: { luas: luas, keliling: keliling } })
})

route.post('/bangun-datar/lingkaran', (req, res) => {
  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING LINGKARAN
  // TODO : Membuat logika untuk menghitung luas dan keliling lingkaran

  // 1. Ambil data dari user
  const bundar = req.body;
  //console.log(bundar);

  // 2. Definisikan variabel yang dibutuhkan
  const radius = bundar.radius

  // 3. Hitung luas
  luas = 3.14*(radius**2)

  // 4. Hitung keliling
  keliling = 2*3.14*radius 

  // Kirim Luas dan Keliling ke User
  return res.json({ data: { luas: luas, keliling: keliling } })
})

route.post('/bangun-datar/segitiga', (req, res) => {
  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING SEGITIGA
  // TODO : Membuat logika untuk menghitung luas dan keliling segitiga

  // Kirim Luas dan Keliling ke User
  return res.json({ data: { luas: luas, keliling: keliling } })
})

route.post('/bangun-datar/persegi-panjang', (req, res) => {
  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING PERSEGI PANJANG
  // TODO : Membuat logika untuk menghitung luas dan keliling persegi-panjang
    const input = req.body;
    const panjang = input.panjang;
    const lebar = input.lebar;

    luas = panjang * lebar
    keliling = ( 2 * panjang ) + ( 2 * lebar )
  // Kirim Luas dan Keliling ke User
  return res.json({ data: { luas: luas, keliling: keliling } })
})

// ROUTE PERPUSTAKAAN
route.get('/perpustakaan', (req, res) => {
  res.send(
    `
      <p>Selamat Datang di API perpustakaan,<br>Berikut beberapa API yang tersedia : </p>
      <ul>
        <li>GET : <code>/perpustakaan/daftar-buku</code> &rarr; API ini digunakan untuk melihat daftar buku yang tersedia</li>
        <li>POST : <code>/perpustakaan/tambah-buku</code> &rarr; API ini digunakan untuk menambahkan daftar buku dengan input <i>nama</i> dan <i>pengarang</i></li>
        <li>POST : <code>/perpustakaan/ubah-buku</code> &rarr; API ini digunakan untuk mengubah daftar buku yang sudah ada dengan input <i>urutan</i>, <i>nama</i>, dan <i>pengarang</i></li>
        <li>POST : <code>/perpustakaan/hapus-buku</code> &rarr; API ini digunakan untuk menghapus daftar buku yang sudah ada dengan input <i>urutan</i></li>
      </ul>
    `
  )
})

route.get('/perpustakaan/daftar-buku', (req, res) => {
  // koleksi buku terdapat dalam variabel 'koleksiBuku'
  // Kirim daftar buku ke user
  return res.json({ data: koleksiBuku })
})

// API tambah buku
// TODO : Bikin API Tambah Buku

// API ubah buku
route.post('/perpustakaan/ubah-buku', (req, res) => {
  // 1. Ambil data dari user
  const buku = req.body;

  // 2. Definisi variabel
  const nama = buku.nama;
  const pengarang = buku.pengarang;
  const urutan = buku.urutan;

  // 3. Ubah buku
  koleksiBuku[urutan] = {nama, pengarang}
  return res.json({ data: koleksiBuku })
})


// API hapus buku
// TODO : Bikin API Hapus Buku

// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;