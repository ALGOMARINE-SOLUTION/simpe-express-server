import { query } from '../Helper/db';

class KoleksiBukuModel {
    async getKoleksiBuku() {
        return await query(
           `SELECT * FROM koleksi_film WHERE trending = 0`,
        []
        )
    }
}

export const koleksiBukuModel = new KoleksiBukuModel ()