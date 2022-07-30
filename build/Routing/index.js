"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const BangunDatarController_1 = require("../Controllers/BangunDatarController");
const PerpustakaanController_1 = require("../Controllers/PerpustakaanController");
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
route.post('/perpustakaan/tambah-buku', PerpustakaanController_1.perpustakaanController.tambahBuku);
// API ubah buku
route.post('/perpustakaan/ubah-buku', PerpustakaanController_1.perpustakaanController.ubahBukuController);
// =================================================================================================
//                                            OTHERS
// =================================================================================================
exports.default = route;
