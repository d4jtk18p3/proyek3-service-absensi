import sequelize from '../db'
import models from '../models/index'

export const insertOneJurusan = async (kode_jurusan) => {
    const jurusan = {
        kode_jurusan
    }
    const result = await models.jurusan.create(jurusan)
    return result
}

export const selectJadwalDosenHariIni = async (NIP) => {
    const date = new Date()
    
    const result = await sequelize.query(`
    SELECT p.kode_kelas, p.id_mata_kuliah, 
    m.nama_mata_kuliah, j.jenis, j.ja, j.jb, j.waktu_mulai, j.waktu_selesai,
    j.batas_terakhir_absen FROM jadwal j
    LEFT JOIN perkuliahan p
    ON j.id_perkuliahan = p.id_perkuliahan
    LEFT JOIN mata_kuliah m
    ON p.id_mata_kuliah = m.id_mata_kuliah
    WHERE j.hari = ${date.getDay()};
    `)

    return result[0]
}