import { Router } from "express";

// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================

// CREATE THE ROUTER
const route = Router();

// ALL ROUTES
// TODO : Create routes
// route.get('/warna-warna', function (req, res) {
//     const warna = ['kuning', 'hijau'];
//     res.json ({ "data": warna }) ;
// })

// ELSA
// TODO : API ELSA -> Mengambil list buku perpustakaan
/*
path: '/book-list'
method: GET
{
  data : [
    {
      nama: 'Laskar Pelangi',
      pengarang: 'Andrea Hirata'
    },
    {
      nama: 'Divergent',
      pengarang : 'Veronica Roth'
    }
  ]
}
*/

// MOSES
// TODO : API MOSES -> detail buku
/*
path: '/book-detail'
method: GET
{
  data: {
    nama: 'divergent',
    pengarang : 'Veronica Roth',
    tahun: 2011,
    kota: 'New York',
    penerbit: 'Mizan Fantasy'
  }
}
*/

// SALMAA
// TODO : API SALMAA
/*
path: '/book-abstract'
method: GET
{
  data: 'Buku ini menjelaskan tentang .....'
}
*/
route.get('/book-abstract', function (req, res) {
    const summary = "Buku ini menjelaskan tentang dunia dengan 5 fraksin dan ..."
    res.json ({ "data": summary })
})

// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;