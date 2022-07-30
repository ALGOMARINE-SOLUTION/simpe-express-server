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
  }

  hitungLuasLingkaran (req: any, res: any) {
    //=======VALIDASI=======
    const skemaValidasi = Joi.object({
        radius: Joi.number().required()
    })
    
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
    const data = bangunDatarService.hitungLuasLingkaranService(req.body)
    
    // Kirim Luas dan Keliling ke User
    return res.json({ data: data })
    } else {
        console.log(hasilValidasi.error)
        res.status(400).json({ error: 'salah bro'})
    }
  }
  perhitunganPersegiPanjang (req: any, res: any) {
    // VALIDASI
    const skemaValidasi = Joi.object({
        panjang: Joi.number().required(),
        lebar: Joi.number().required()
        })
  
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
        const data = bangunDatarService.perhitunganPersegiPanjangService(req.body)
        // Kirim Luas dan Keliling ke User
        return res.json({ data: data })
    } else {
        console.log(hasilValidasi.error)
        res.status(400).json({ error: 'salah input!!!' })
    }
}
}

export const bangunDatarController = new BangunDatarController()