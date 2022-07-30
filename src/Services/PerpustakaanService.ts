import { koleksiBuku } from "../Data";

class PerpustakaanService {
  // ELSA
  ubahBukuService (buku: {nama: string, pengarang: string, urutan: number}) {
    // 1. Ambil data dari user
  
    // 2. Definisi variabel
    const nama = buku.nama;
    const pengarang = buku.pengarang;
    const urutan = buku.urutan;

    // 3. Ubah buku
    koleksiBuku[urutan] = {nama, pengarang}
    return (koleksiBuku)
  }

  // MOSES
  // TODO : CODE
  tambahBuku(nambah: any){
    koleksiBuku.push(nambah)
    return (koleksiBuku)
  }

  // SALMAA
  hapusBukuService (input: { urutan: number }) {
    const urutan = input.urutan;
    koleksiBuku.splice(urutan, 1);
    return (koleksiBuku)
  }
}

export const perpustakaanService = new PerpustakaanService()