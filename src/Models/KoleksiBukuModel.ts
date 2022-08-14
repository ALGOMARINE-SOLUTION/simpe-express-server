import { query } from '../Helper/db';

class KoleksiBukuModel {
    getKoleksiBuku() {
        return query(
           'SELECT * FROM koleksi_film WHERE trending =  true',
        []
        )
    }
}

export const koleksiBukuModel = new KoleksiBukuModel ()