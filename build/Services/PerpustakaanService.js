"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perpustakaanService = void 0;
// book collection
const Data_1 = require("../Data");
class PerpustakaanService {
    // ELSA
    // TODO : CODE
    // MOSES
    // TODO : CODE
    // SALMAA
    hapusBukuService(input) {
        const urutan = input.urutan;
        Data_1.koleksiBuku.splice(urutan, 1);
        return (Data_1.koleksiBuku);
    }
}
exports.perpustakaanService = new PerpustakaanService();
