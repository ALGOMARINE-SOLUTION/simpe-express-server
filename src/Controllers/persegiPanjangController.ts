import Joi from "joi";

export function perhitunganPersegiPanjang (req: any, res: any) {
    // VALIDASI
    const skemaValidasi = Joi.object({
        panjang: Joi.number().required(),
        lebar: Joi.number().required()
        })
  
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
        let luas = 0
        let keliling = 0
        // LOGIKA LUAS DAN KELILING PERSEGI PANJANG
        const input = req.body;
        const panjang = input.panjang;
        const lebar = input.lebar;

        luas = panjang * lebar
        keliling = ( 2 * panjang ) + ( 2 * lebar )
        // Kirim Luas dan Keliling ke User
        return res.json({ data: { luas: luas, keliling: keliling } })
    } else {
        console.log(hasilValidasi.error)
        res.status(400).json({ error: 'salah input!!!' })
    }
}