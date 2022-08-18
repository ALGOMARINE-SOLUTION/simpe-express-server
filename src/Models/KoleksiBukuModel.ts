import { number, string } from "joi";
import { query } from "../Helper/db";

class KoleksiFilmModel {
    async trendFilm () {
        return await query (
            `
            SELECT * FROM koleksi_film WHERE trending = 1
            `, []
        )
    }

    async tambahFilm(id: number, nama: string, sutradara: string, studio: string, trending: boolean): Promise<any> {
        return await query (
            `
                INSERT INTO
                    koleksi_film (id, nama, sutradara, studio, trending)
                VALUES
                    (?, ?, ?, ?, ?)
            `,
            [
                'id',
                nama,
                sutradara,
                studio,
                'trending'
            ]
        )
    };
}

export const koleksifilmModel = new KoleksiFilmModel()