// book collection
import { koleksiBuku } from "../Data";

class PerpustakaanService {
  // ELSA
  // TODO : CODE

  // MOSES
  // TODO : CODE

  // SALMAA
  hapusBukuService (input: { urutan: number }) {
    const urutan = input.urutan;
    koleksiBuku.splice(urutan, 1);
    return ({ data: koleksiBuku })
  }
}

export const perpustakaanService = new PerpustakaanService()