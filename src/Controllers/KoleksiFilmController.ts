import { koleksiFilmService } from "../Services/KoleksiFilmService"
import Joi from "joi";


class KoleksiFilmController {
  // Moses
async changefilm(req: any, res: any){  
    const skemaValidasi = Joi.object({
        id : Joi.number().required(),
      nama: Joi.string(),
      sutradara : Joi.string(),
      studio : Joi.string(),
      trending : Joi.boolean()
    })
    const hasilValidasi = skemaValidasi.validate(req.body);
    if(!hasilValidasi.error) {
      const data = await koleksiFilmService.changemovie(req.body)
      return res.json({ data: data })
    } else {
      console.log(hasilValidasi.error)
      res.status(400).json({ error: 'salah iku brader' })
    }
    };
}

export const koleksiFilmController = new KoleksiFilmController()