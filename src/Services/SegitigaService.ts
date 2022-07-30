export function hitungLuasSegitigaService(payload: {alas: number, tinggi: number}) {
//LOGIKA
let luas = 0
let keliling = 0
// LOGIKA LUAS DAN KELILING SEGITIGA SAMA SISI
//1 ambil data dari client/user

//2 definisikan variabel yang dibutuhkan
const alas = payload.alas
const tinggi = payload.tinggi

//3 hitung luas
luas = alas*tinggi/2;
//4 hitung keliling
keliling = 3*alas

return {luas:luas, keliling: keliling}
}