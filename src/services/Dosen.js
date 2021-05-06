/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'

export const melakukanAbsensi = async (nip, id_studi, tanggal, isHadir) => {
  try {
    const result = await DaftarHadirDosenDAO.insertOne(nip, id_studi, tanggal, isHadir)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
