import { koleksiFilm } from "../Data"
import { koleksiBukuModel } from "../Models/KoleksiBukuModel"

class KoleksiBukuService {
  // Elsa
  trendFilmService () {
    const filterData = koleksiFilm.filter (function (data) {return data.trending === true })
    return (filterData)
  }

  // Moses
   async koleksiFilmFalse () {
    const filterdata = await koleksiBukuModel.getKoleksiBuku()
    return (filterdata)
  }
}


export const koleksiBukuService = new KoleksiBukuService()