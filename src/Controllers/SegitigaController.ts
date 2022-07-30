import Joi from "joi";
import { hitungLuasSegitigaService } from "../Services/SegitigaService";

export function hitungLuasSegitiga(req: any, res: any) {
//Jurus validasi
const skemaValidasi = Joi.object ({
    alas: Joi.number().required(),
    tinggi: Joi.number().required()
})
const hasilValidasi = skemaValidasi.validate(req.body);
if(!hasilValidasi.error) {
const data =  hitungLuasSegitigaService(req.body)

  // Kirim Luas dan Keliling ke User
  return res.json({ data: data })
} else {
    console.log(hasilValidasi.error)
    res.status(400).json({ error: 'anda salah' })
  }
}