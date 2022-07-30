import Joi from "joi";
import { bangunDatarService } from "../Services/BangunDatarService";

class BangunDatarController {
  hitungLuasPersegi(req: any, res: any) {
    // ======== VALIDASI ========
    const skemaValidasi = Joi.object({
      sisi: Joi.number().required()
    })
    
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
      const data = bangunDatarService.hitungLuasPersegiService(req.body)
      // Kirim Luas dan Keliling ke User
      return res.json({ data: data })
    } else {
      console.log(hasilValidasi.error)
      res.status(400).json({ error: 'datanya salah' })
    }
  };

  hitungLuasSegitiga(req: any, res: any) {
    //Jurus validasi
    const skemaValidasi = Joi.object ({
        alas: Joi.number().required(),
        tinggi: Joi.number().required()
    })
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
    const data =  bangunDatarService.hitungLuasSegitigaService(req.body)
    
      // Kirim Luas dan Keliling ke User
      return res.json({ data: data })
    } else {
        console.log(hasilValidasi.error)
        res.status(400).json({ error: 'anda salah' })
      }
    }  
}

export const bangunDatarController = new BangunDatarController()