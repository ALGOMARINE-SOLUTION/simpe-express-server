import { Router } from "express";

// controllers
import { bangunDatarController } from "../Controllers/BangunDatarController";
import { koleksiBukuController } from "../Controllers/KoleksiBukuController";
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
route.post('/perpustakaan/hapus-buku', perpustakaanController.hapusBuku)
route.post('/perpustakaan/tambah-buku', perpustakaanController.tambahBuku)
route.post('/perpustakaan/ubah-buku', perpustakaanController.ubahBukuController)

// ROUTE KOLEKSI BUKU
// TODO: ELSA
route.get('/cinema/trending-now-list', koleksiBukuController.trendFilmController)

// TODO: MOSES
route.get('/cinema/not-trending-list', koleksiBukuController.koleksiBukuFalse)

// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;