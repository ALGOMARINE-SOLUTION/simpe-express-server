import Joi from "joi";
import { bangunDatarService } from "../Services/BangunDatarService";

class BangunDatarController {
  index(req: any, res: any) {
    res.send(
      `
        <p>Halo, bagian ini adalah segala hal berkaitan dengan perhitungan bangun datar<br>Berikut beberapa API yang tersedia : </p>
        <ul>
          <li>POST : <code>/bangun-datar/persegi</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling persegi dengan input <i>sisi</i></li>
          <li>POST : <code>/bangun-datar/lingkaran</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling lingkaran dengan input <i>radius</i></li>
          <li>POST : <code>/bangun-datar/segitiga</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling segitiga sama sisi dengan input <i>alas</i> dan <i>tinggi</i></li>
          <li>POST : <code>/bangun-datar/persegi-panjang</code> &rarr; API ini digunakan untuk menghitung dengan luas dan keliling persegi panjang dengan input <i>panjang</i> dan <i>lebar</i></li>
        </ul>
      `
    )
  }
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