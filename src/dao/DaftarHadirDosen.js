import DaftarHadirDosen from '../models/DaftarHadirDosen'

export const insertOne = async (nip, idStudi, tanggal, isHadir) => {
  // Belum dicoba karena membutuhkan data dari db common
  try {
    const result = await DaftarHadirDosen.create({
      nip,
      id_studi: idStudi,
      tanggal,
      isHadir
    })
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findDaftarHadirDosenByNIPAndIdStudi = async (nip, idStudi) => {
  try {
    const daftarHadirDosen = await DaftarHadirDosen.findAll({
      where: {
        nip,
        idStudi
      }
    })
    return daftarHadirDosen
  } catch (error) {
    return Promise.reject(error)
  }
}