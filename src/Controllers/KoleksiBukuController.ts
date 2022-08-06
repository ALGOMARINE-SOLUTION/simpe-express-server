import { koleksiBukuService } from "../Services/KoleksiBukuService"

class KoleksiBukuController {
  // Elsa

  // Moses
  koleksiBukuFalse(req: any, res: any){
    const data = koleksiBukuService.koleksiFilmFalse(req.body)
      return res.json({ data: data })
}}

export const koleksiBukuController = new KoleksiBukuController()