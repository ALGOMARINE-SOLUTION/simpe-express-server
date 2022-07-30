export function hitungLuasLingkaran (req: any, res: any) {
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING LINGKARAN
    // TODO : Membuat logika untuk menghitung luas dan keliling lingkaran
  
    // 1. Ambil data dari user
    const bundar = req.body;
    //console.log(bundar);
  
    // 2. Definisikan variabel yang dibutuhkan
    const radius = bundar.radius
  
    // 3. Hitung luas
    luas = 3.14*(radius**2)
  
    // 4. Hitung keliling
    keliling = 2*3.14*radius 
  
    // Kirim Luas dan Keliling ke User
    return res.json({ data: { luas: luas, keliling: keliling } })
}