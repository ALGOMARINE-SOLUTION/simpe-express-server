import { Router } from "express";

// controllers
import { bangunDatarController } from "../Controllers/BangunDatarController";
import { hitungLuasLingkaran } from "../Controllers/LingkaranController";
import { perpustakaanController } from "../Controllers/PerpustakaanController";
import { perhitunganPersegiPanjang } from "../Controllers/persegiPanjangController";
import { hitungLuasSegitiga } from "../Controllers/SegitigaController";

// book collection
import { koleksiBuku } from "../Data";

// Materials :
// 1. Exercise
// 2. Move logic to function (for cleaner Route file)
// 3. Move function to class (for better organization (tagging bangun-datar/perpustakaan) in Route file)
// 4. Joi (Validate Input for naught user)

// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================

// CREATE THE ROUTER
const route = Router();

// ROUTE SEPUTAR PERHITUNGAN BANGUN DATAR
route.get('/bangun-datar', bangunDatarController.index)
route.post('/bangun-datar/persegi', bangunDatarController.hitungLuasPersegi)
route.post('/bangun-datar/lingkaran', hitungLuasLingkaran) 
route.post('/bangun-datar/segitiga', hitungLuasSegitiga)
route.post('/bangun-datar/persegi-panjang', perhitunganPersegiPanjang)

// ROUTE PERPUSTAKAAN
route.get('/perpustakaan', perpustakaanController.index)
route.get('/perpustakaan/daftar-buku', perpustakaanController.daftarBuku)

// API tambah buku
// TODO : Bikin API Tambah Buku
route.post('/perpustakaan/tambah-buku', (req, res) => {
    const nambah = req.body;
    koleksiBuku.push(nambah)
    return res.json({data : koleksiBuku})
})

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
route.post('/perpustakaan/hapus-buku', (req, res) => {
    const input = req.body;
    const urutan = input.urutan;
    koleksiBuku.splice(urutan, 1);
    return res.json({ data: koleksiBuku })
})

// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;