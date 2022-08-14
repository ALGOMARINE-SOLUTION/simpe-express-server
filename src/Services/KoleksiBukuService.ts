import { koleksiFilm } from "../Data"
import { koleksifilmModel } from "../Models/KoleksiBukuModel"

class KoleksiBukuService {
  // Elsa
  async trendFilmService () {
    const filterData = await koleksifilmModel.trendFilm()
    return (filterData)
  }

  async tambahFilmService(nambah: any){
    koleksiFilm.push(nambah)

    await koleksifilmModel.tambahFilm(nambah.id, nambah.nama, nambah.sutradara, nambah.studio, nambah.trending)

    return (koleksiFilm)
  }

  // Moses
  koleksiFilmFalse () {
    const filterdata = koleksiFilm.filter (function (data) {return data.trending === false })
    return (filterdata)
  }
}


export const koleksiBukuService = new KoleksiBukuService()