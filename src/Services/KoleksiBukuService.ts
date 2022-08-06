import { koleksiFilm } from "../Data"

class KoleksiBukuService {
  // Elsa

  // Moses
  koleksiFilmFalse ( trending : any) {
    const filterdata = koleksiFilm.filter (function (data) {return data.trending === false })
    return (filterdata)
  }
}


export const koleksiBukuService = new KoleksiBukuService()