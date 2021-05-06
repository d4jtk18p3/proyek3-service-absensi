/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'

export const melakukanAbsensi = async (id_studi, id_keterangan, keterlambatan, tanggal, isHadir) => {
  try {
    const result = await DaftarHadirMahasiswaDAO.insertOne(id_studi, id_keterangan, keterlambatan, tanggal, isHadir)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
