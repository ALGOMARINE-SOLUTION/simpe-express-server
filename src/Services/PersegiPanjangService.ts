export function perhitunganPersegiPanjangService(input: { panjang: number, lebar: number }) {
    // ========= LOGIKA =========
    let luas = 0
    let keliling = 0
    // LOGIKA LUAS DAN KELILING PERSEGI PANJANG
    const panjang = input.panjang;
    const lebar = input.lebar;

    luas = panjang * lebar
    keliling = ( 2 * panjang ) + ( 2 * lebar )
  
    return { luas: luas, keliling: keliling }
  }