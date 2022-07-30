"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const BangunDatarController_1 = require("../Controllers/BangunDatarController");
const PerpustakaanController_1 = require("../Controllers/PerpustakaanController");
// book collection
const Data_1 = require("../Data");
// Materials :
// 1. Exercise
// 2. Move logic to function (for cleaner Route file)
// 3. Move function to class (for better organization (tagging bangun-datar/perpustakaan) in Route file)
// 4. Joi (Validate Input for naught user)
// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================
// CREATE THE ROUTER
const route = (0, express_1.Router)();
// ROUTE SEPUTAR PERHITUNGAN BANGUN DATAR
route.get('/bangun-datar', BangunDatarController_1.bangunDatarController.index);
route.post('/bangun-datar/persegi', BangunDatarController_1.bangunDatarController.hitungLuasPersegi);
route.post('/bangun-datar/lingkaran', BangunDatarController_1.bangunDatarController.hitungLuasLingkaran);
route.post('/bangun-datar/segitiga', BangunDatarController_1.bangunDatarController.hitungLuasSegitiga);
route.post('/bangun-datar/persegi-panjang', BangunDatarController_1.bangunDatarController.perhitunganPersegiPanjang);
// ROUTE PERPUSTAKAAN
route.get('/perpustakaan', PerpustakaanController_1.perpustakaanController.index);
route.get('/perpustakaan/daftar-buku', PerpustakaanController_1.perpustakaanController.daftarBuku);
route.post('/perpustakaan/hapus-buku', PerpustakaanController_1.perpustakaanController.hapusBuku);
// API tambah buku
// TODO : Bikin API Tambah Buku
route.post('/perpustakaan/tambah-buku', (req, res) => {
    const nambah = req.body;
    Data_1.koleksiBuku.push(nambah);
    return res.json({ data: Data_1.koleksiBuku });
});
// API ubah buku
route.post('/perpustakaan/ubah-buku', (req, res) => {
    // 1. Ambil data dari user
    const buku = req.body;
    // 2. Definisi variabel
    const nama = buku.nama;
    const pengarang = buku.pengarang;
    const urutan = buku.urutan;
    // 3. Ubah buku
    Data_1.koleksiBuku[urutan] = { nama, pengarang };
    return res.json({ data: Data_1.koleksiBuku });
});
// =================================================================================================
//                                            OTHERS
// =================================================================================================
exports.default = route;
