import { koleksiFilm } from "../Data";

class KoleksiBukuService {
  // Elsa
  trendFilmService () {
    const filterData = koleksiFilm.filter(function (data) {return data.trending === true})
    return (filterData)
  }

  // Moses
}

export const koleksiBukuService = new KoleksiBukuService()