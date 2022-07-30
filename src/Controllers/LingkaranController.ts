import Joi from "joi";
import { hitungLuasLingkaranService } from "../Services/LingkaranService"

export function hitungLuasLingkaran (req: any, res: any) {
    //=======VALIDASI=======
    const skemaValidasi = Joi.object({
        radius: Joi.number().required()
    })
    
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
    const data = hitungLuasLingkaranService(req.body)
    
    // Kirim Luas dan Keliling ke User
    return res.json({ data: data })
    } else {
        console.log(hasilValidasi.error)
        res.status(400).json({ error: 'salah bro'})
    }
}