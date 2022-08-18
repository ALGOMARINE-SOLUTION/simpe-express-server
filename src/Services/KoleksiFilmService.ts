import { koleksiFilm } from "../Data"
import { koleksiFilmModel } from "../Models/KoleksiFilmModels"

class KoleksiFilmService {
  // Moses
  async changemovie(film: { id: number,nama: string, sutradara: string, studio: string, trending: boolean}) {
  
    const luwe = await koleksiFilmModel.changefilm(film.id, film.nama, film.studio, film.sutradara, film.trending)
        return (luwe)
      } 
}



export const koleksiFilmService = new KoleksiFilmService()