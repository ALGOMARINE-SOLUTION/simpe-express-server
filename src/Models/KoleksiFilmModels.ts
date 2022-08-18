import { query } from '../Helper/db';

class KoleksiFilmModel {
    async changefilm(id: number,nama: string, sutradara: string, studio: string, trending: boolean) {
        const sql = `
        UPDATE
            koleksi_film 
        SET
            (?,?,?,?)
        WHERE
            id = ${id}
        `
        const params = [nama= nama, sutradara= sutradara, studio= studio, trending= trending]
        return await query (sql, params)
    }
}

export const koleksiFilmModel = new KoleksiFilmModel ()