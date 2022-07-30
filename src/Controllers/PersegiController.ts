export function hitungLuasPersegi(req: any, res: any) {
  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING PERSEGI
  // 1. ambil data dari client/user
  const payload = req.body;

  // 2. definisikan variabel yang dibutuhkan
  const sisi =payload.sisi

  // 3. hitung luas
  luas = sisi * sisi;

  // 4. hitung keliling
  keliling = 4 * sisi

  // Kirim Luas dan Keliling ke User
  return res.json({ data: { luas: luas, keliling: keliling } })
}