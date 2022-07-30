import Joi from "joi";
import { hitungLuasPersegiService } from "../Services/PersegiService";

export function hitungLuasPersegi(req: any, res: any) {
  // ======== VALIDASI ========
  const skemaValidasi = Joi.object({
    sisi: Joi.number().required()
  })
  
  const hasilValidasi = skemaValidasi.validate(req.body);
  if(!hasilValidasi.error) {
    const data = hitungLuasPersegiService(req.body)
    // Kirim Luas dan Keliling ke User
    return res.json({ data: data })
  } else {
    console.log(hasilValidasi.error)
    res.status(400).json({ error: 'datanya salah' })
  }
}