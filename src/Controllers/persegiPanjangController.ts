import Joi from "joi";
import { perhitunganPersegiPanjangService } from "../Services/PersegiPanjangService";

export function perhitunganPersegiPanjang (req: any, res: any) {
    // VALIDASI
    const skemaValidasi = Joi.object({
        panjang: Joi.number().required(),
        lebar: Joi.number().required()
        })
  
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
        const data = perhitunganPersegiPanjangService(req.body)
        // Kirim Luas dan Keliling ke User
        return res.json({ data: data })
    } else {
        console.log(hasilValidasi.error)
        res.status(400).json({ error: 'salah input!!!' })
    }
}