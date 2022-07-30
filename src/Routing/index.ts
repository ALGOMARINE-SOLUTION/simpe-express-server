import { Router } from "express";

// controllers
import { bangunDatarController } from "../Controllers/BangunDatarController";
import { perpustakaanController } from "../Controllers/PerpustakaanController";

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
route.post('/bangun-datar/lingkaran', bangunDatarController.hitungLuasLingkaran)
route.post('/bangun-datar/segitiga', bangunDatarController.hitungLuasSegitiga)
route.post('/bangun-datar/persegi-panjang', bangunDatarController.perhitunganPersegiPanjang)

// ROUTE PERPUSTAKAAN
route.get('/perpustakaan', perpustakaanController.index)
route.get('/perpustakaan/daftar-buku', perpustakaanController.daftarBuku)

// API tambah buku
// TODO : Bikin API Tambah Buku
route.post('/perpustakaan/tambah-buku', perpustakaanController.tambahBuku)
  

// API ubah buku
route.post('/perpustakaan/ubah-buku', perpustakaanController.ubahBukuController)


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