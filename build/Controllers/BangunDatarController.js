"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bangunDatarController = void 0;
const joi_1 = __importDefault(require("joi"));
const BangunDatarService_1 = require("../Services/BangunDatarService");
class BangunDatarController {
    index(req, res) {
        res.send(`
        <p>Halo, bagian ini adalah segala hal berkaitan dengan perhitungan bangun datar<br>Berikut beberapa API yang tersedia : </p>
        <ul>
          <li>POST : <code>/bangun-datar/persegi</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling persegi dengan input <i>sisi</i></li>
          <li>POST : <code>/bangun-datar/lingkaran</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling lingkaran dengan input <i>radius</i></li>
          <li>POST : <code>/bangun-datar/segitiga</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling segitiga sama sisi dengan input <i>alas</i> dan <i>tinggi</i></li>
          <li>POST : <code>/bangun-datar/persegi-panjang</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling persegi panjang dengan input <i>panjang</i> dan <i>lebar</i></li>
        </ul>
      `);
    }
    hitungLuasPersegi(req, res) {
        // ======== VALIDASI ========
        const skemaValidasi = joi_1.default.object({
            sisi: joi_1.default.number().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = BangunDatarService_1.bangunDatarService.hitungLuasPersegiService(req.body);
            // Kirim Luas dan Keliling ke User
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'datanya salah' });
        }
    }
    ;
    hitungLuasSegitiga(req, res) {
        //Jurus validasi
        const skemaValidasi = joi_1.default.object({
            alas: joi_1.default.number().required(),
            tinggi: joi_1.default.number().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = BangunDatarService_1.bangunDatarService.hitungLuasSegitigaService(req.body);
            // Kirim Luas dan Keliling ke User
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'anda salah' });
        }
    }
    hitungLuasLingkaran(req, res) {
        //=======VALIDASI=======
        const skemaValidasi = joi_1.default.object({
            radius: joi_1.default.number().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = BangunDatarService_1.bangunDatarService.hitungLuasLingkaranService(req.body);
            // Kirim Luas dan Keliling ke User
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'salah bro' });
        }
    }
    perhitunganPersegiPanjang(req, res) {
        // VALIDASI
        const skemaValidasi = joi_1.default.object({
            panjang: joi_1.default.number().required(),
            lebar: joi_1.default.number().required()
        });
        const hasilValidasi = skemaValidasi.validate(req.body);
        if (!hasilValidasi.error) {
            const data = BangunDatarService_1.bangunDatarService.perhitunganPersegiPanjangService(req.body);
            // Kirim Luas dan Keliling ke User
            return res.json({ data: data });
        }
        else {
            console.log(hasilValidasi.error);
            res.status(400).json({ error: 'salah input!!!' });
        }
    }
}
exports.bangunDatarController = new BangunDatarController();
