"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perpustakaanService = void 0;
const Data_1 = require("../Data");
class PerpustakaanService {
    // ELSA
    ubahBukuService(buku) {
        // 1. Ambil data dari user
        // 2. Definisi variabel
        const nama = buku.nama;
        const pengarang = buku.pengarang;
        const urutan = buku.urutan;
        // 3. Ubah buku
        Data_1.koleksiBuku[urutan] = { nama, pengarang };
        return (Data_1.koleksiBuku);
    }
    // MOSES
    // TODO : CODE
    tambahBuku(nambah) {
        Data_1.koleksiBuku.push(nambah);
        return (Data_1.koleksiBuku);
    }
    // SALMAA
    hapusBukuService(input) {
        const urutan = input.urutan;
        Data_1.koleksiBuku.splice(urutan, 1);
        return (Data_1.koleksiBuku);
    }
}
exports.perpustakaanService = new PerpustakaanService();
