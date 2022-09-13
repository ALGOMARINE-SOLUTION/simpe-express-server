import { koleksiFilm } from "../Data"
import { koleksifilmModel } from "../Models/KoleksiBukuModel"

class KoleksiBukuService {
  // Elsa
  async trendFilmService () {
    const filterData = await koleksifilmModel.trendFilm()
    return {data : filterData}
  }

  async tambahFilmService(nambah: {id: number, nama: string, sutradara: string, studio: string, trending: boolean} ){
    const addFilm = await koleksifilmModel.tambahFilm(nambah.id, nambah.nama, nambah.sutradara, nambah.studio, nambah.trending)
    return (addFilm)
  }

  // Moses
  koleksiFilmFalse () {
    const filterdata = koleksiFilm.filter (function (data) {return data.trending === false })
    return (filterdata)
  }
}


export const koleksiBukuService = new KoleksiBukuService()