import Joi from "joi";
import { koleksiBukuService } from "../Services/KoleksiBukuService";

// book collection
import { koleksiFilm } from "../Data";

class KoleksiBukuController {
  // Elsa
  trendFilmController (req: any, res: any) {
    const data = koleksiBukuService.trendFilmService()
    return res.json({ data: data })
  }
  

  // Moses
}
export const koleksiBukuController = new KoleksiBukuController()