import { koleksiBuku } from "../Data";
import { perpustakaanModel } from "../Models/PerpustakaanModel";

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
  async tambahBuku(nambah: any){
    await perpustakaanModel.insertBuku(nambah.nama, nambah.pengarang)
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