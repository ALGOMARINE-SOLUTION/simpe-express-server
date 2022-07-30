import Joi from "joi";

export function hitungLuasSegitiga(req: any, res: any) {
//Jurus validasi
const skemaValidasi = Joi.object ({
    alas: Joi.number().required(),
    tinggi: Joi.number().required()
})
const hasilValidasi = skemaValidasi.validate(req.body);
if(!hasilValidasi.error) {

  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING SEGITIGA SAMA SISI
  //1 ambil data dari client/user
  const payload = req.body;
  //2 definisikan variabel yang dibutuhkan
  const alas = payload.alas
  const tinggi = payload.tinggi

  //3 hitung luas
  luas = alas*tinggi/2;
  //4 hitung keliling
  keliling = 3*alas
  // TODO : Membuat logika untuk menghitung luas dan keliling segitiga

  // Kirim Luas dan Keliling ke User
  return res.json({ data: { luas: luas, keliling: keliling } })
} else {
    console.log(hasilValidasi.error)
    res.status(400).json({ error: 'anda salah' })
  }
}