import { Router } from "express";

// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================

// CREATE THE ROUTER
const route = Router();

// ALL ROUTES
// '/class mobil {
//     brand: strring;
//     warna: string;
//     constructor() {
//         this.brand = 'daihatsu'
//         this.warna = 'merah'
//     }
// }

// const mobil = new mobil()
// mobil.warna
// mobil.startermobil


// route.get ('/jenis-warna', function (req, res){
//     const warna = ["merah", "hitam"]
//     res.send(warna)
// })



// TODO : Create routes
route.get ('/detail-buku', function (req, res){
    const buku = {
        nama: 'divergent',
        pengarang : 'Veronica Roth',
        tahun: 2011,
        kota: 'New York',
        penerbit: 'Mizan Fantasy'
  }
    res.send(buku)
})



// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;