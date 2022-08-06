import { koleksiFilm } from "../Data"

class KoleksiBukuService {
  // Elsa
  trendFilmService () {
    const filterData = koleksiFilm.filter(function (data) {return data.trending === true})
    return (filterData)
  }

  // Moses
  koleksiFilmFalse () {
    const filterdata = koleksiFilm.filter (function (data) {return data.trending === false })
    return (filterdata)
  }
}


export const koleksiBukuService = new KoleksiBukuService()