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

// ELSA
// TODO : API ELSA -> Menambahkan data buku
/*
path: '/add-book'
method: GET
Body:
{
  nama: 'divergent',
  pengarang : 'Veronica Roth',
  tahun: 2011,
  kota: 'New York',
  penerbit: 'Mizan Fantasy'
}
Response:
{
  status: 'success'
}
*/

// MOSES
// TODO : API MOSES -> Mengupdate data buku
/*
path: '/add-book'
method: GET
Body:
{
  urutan: 2,
  nama: 'divergent',
  pengarang : 'Veronica Roth',
  tahun: 2011,
  kota: 'New York',
  penerbit: 'Mizan Fantasy'
}
Response:
{
  status: 'success'
}
*/

// Salmaa
// TODO : API Salmaa -> Menghapuse data buku
/*
path: '/add-book'
method: GET
Body:
{
  urutan: 2,
}
Response:
{
  status: 'success'
}
*/


// =================================================================================================
//                                            OTHERS
// =================================================================================================
export default route;