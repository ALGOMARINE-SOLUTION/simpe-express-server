export function hitungLuasPersegiService(payload: { sisi: number }) {
  // ========= LOGIKA =========
  let luas = 0
  let keliling = 0
  // LOGIKA LUAS DAN KELILING PERSEGI
  // 1. ambil data dari client/user

  // 2. definisikan variabel yang dibutuhkan
  const sisi =payload.sisi

  // 3. hitung luas
  luas = sisi * sisi;

  // 4. hitung keliling
  keliling = 4 * sisi

  return { luas: luas, keliling: keliling }
}