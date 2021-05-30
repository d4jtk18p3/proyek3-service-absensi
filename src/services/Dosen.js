/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'

export const melakukanAbsensi = async (nip, idStudi) => {
  try {
    const d = new Date()
    const tglHariIni = `${d.getFullYear()}:${d.getMonth()}:${d.getDate()}`

    const result = await DaftarHadirDosenDAO.insertOne(nip, idStudi, tglHariIni, true)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
