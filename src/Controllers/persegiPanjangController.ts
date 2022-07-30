export function perhitunganPersegiPanjang (req: any, res: any) {
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING PERSEGI PANJANG
    // TODO : Membuat logika untuk menghitung luas dan keliling persegi-panjang
    const input = req.body;
    const panjang = input.panjang;
    const lebar = input.lebar;

    luas = panjang * lebar
    keliling = ( 2 * panjang ) + ( 2 * lebar )
    // Kirim Luas dan Keliling ke User
    return res.json({ data: { luas: luas, keliling: keliling } })
  }