import db from '../db'

export const insertOne = async (materi, kegiatan, minggu, bukti, jumlahMhsHadir, jumlahMhsTdkHadir, tanggal, nip, idPerkuliahan) => {
  try {
    const result = await db.query(`
    INSERT INTO "Bap" (materi, kegiatan, minggu, bukti, jumlah_mhs_hadir, jumlah_mhs_tidak_hadir, tanggal, nip, id_perkuliahan) VALUES ('${materi}', '${kegiatan}', ${minggu}, '${bukti}', 
      ${jumlahMhsHadir}, ${jumlahMhsTdkHadir}, '${tanggal}', '${nip}', ${idPerkuliahan}) RETURNING *
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}
