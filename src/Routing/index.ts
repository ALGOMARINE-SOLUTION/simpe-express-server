import { Router } from "express";

// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================

// KOLEKSI BUKU
const koleksiBuku = []

// CREATE THE ROUTER
const route = Router();

// ALL ROUTES
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


// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;