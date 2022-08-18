import { query } from "../Helper/db";

class PerpustakaanModel {
    async insertBuku(nama: string, pengarang: string) {
        return await query(
            `
            INSERT INTO
            perpustakaan (nama, pengarang)
            VALUES
            (?,?)
            `,
            [
                nama,
                pengarang
            ]
        )
    }
}

export const perpustakaanModel = new PerpustakaanModel()