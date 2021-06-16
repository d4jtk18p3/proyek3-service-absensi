import Keterangan from '../models/Keterangan'
import db from '../db'

export const insertKeterangan = async (nim, status, url, isAccepted) => {
  try {
    const keterangan = await Keterangan.create({
      nim,
      status,
      url,
      isAccepted
    })
    return keterangan
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateIsAcceptedKeterangan = async (idKeterangan, isAccepted) => {
  try {
    const result = await db.query(`
    UPDATE "Keterangan" SET "isAccepted" = ${isAccepted} WHERE (id_keterangan = ${idKeterangan}) RETURNING *;
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}
