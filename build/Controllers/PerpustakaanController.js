"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.perpustakaanController = void 0;
const joi_1 = __importDefault(require("joi"));
const PerpustakaanService_1 = require("../Services/PerpustakaanService");
// book collection
const Data_1 = require("../Data");
class PerpustakaanController {
    index(req, res) {
        res.send(`
        <p>Selamat Datang di API perpustakaan,<br>Berikut beberapa API yang tersedia : </p>
        <ul>
          <li>GET : <code>/perpustakaan/daftar-buku</code> &rarr; API ini digunakan untuk melihat daftar buku yang tersedia</li>
          <li>POST : <code>/perpustakaan/tambah-buku</code> &rarr; API ini digunakan untuk menambahkan daftar buku dengan input <i>nama</i> dan <i>pengarang</i></li>
          <li>POST : <code>/perpustakaan/ubah-buku</code> &rarr; API ini digunakan untuk mengubah daftar buku yang sudah ada dengan input <i>urutan</i>, <i>nama</i>, dan <i>pengarang</i></li>
          <li>POST : <code>/perpustakaan/hapus-buku</code> &rarr; API ini digunakan untuk menghapus daftar buku yang sudah ada dengan input <i>urutan</i></li>
        </ul>
      `);
    }
    daftarBuku(req, res) {
        // koleksi buku terdapat dalam variabel 'koleksiBuku'
        // Kirim daftar buku ke user
        return res.json({ data: Data_1.koleksiBuku });
    }
    // ELSA
    ubahBukuController(req, res) {
        // ======= VALIDASI ==========
        const skemaValidasi = joi_1.default.object({
            urutan: joi_1.default.number().required(),
            nama: joi_1.default.string().required(),
            pengarang: joi_1.default.string().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = PerpustakaanService_1.perpustakaanService.ubahBukuService(req.body);
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'salah bro' });
        }
    }
    // MOSES
    // TODO : CODE
    tambahBuku(req, res) {
        const skemaValidasi = joi_1.default.object({
            nama: joi_1.default.string().required(),
            pengarang: joi_1.default.string().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = PerpustakaanService_1.perpustakaanService.tambahBuku(req.body);
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'salah masukin kamu' });
        }
    }
    ;
    // SALMAA
    hapusBuku(req, res) {
        const skemaValidasi = joi_1.default.object({
            urutan: joi_1.default.number().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = PerpustakaanService_1.perpustakaanService.hapusBukuService(req.body);
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'datanya salah' });
        }
    }
    ;
}
exports.perpustakaanController = new PerpustakaanController();
