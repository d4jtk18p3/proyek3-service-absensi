import DaftarHadirMahasiswa from '../models/DaftarHadirMahasiswa'

export const insertOne = async (idStudi, idKeterangan, keterlambatan, tanggal, isHadir) => {
  // Belum melibatkan db common
  try {
    const result = await DaftarHadirMahasiswa.create({
      id_studi: idStudi,
      id_keterangan: idKeterangan,
      keterlambatan,
      tanggal,
      isHadir
    })

    return result.dataValues
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findDaftarHadirMahasiswaByNIMAndIdStudi = async (nim, idStudi) => {
  try {
    const daftarHadirMahasiswa = await DaftarHadirMahasiswa.findAll({
      where: {
        nim,
        idStudi
      }
    })
    return daftarHadirMahasiswa
  } catch (error) {
    return Promise.reject(error)
  }
}
