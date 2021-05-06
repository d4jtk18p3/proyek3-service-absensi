import DaftarHadirDosen from '../models/DaftarHadirDosen'

export const insertOne = async (nip, id_studi, tanggal, isHadir) => {
  // Belum dicoba karena membutuhkan data dari db common
  try {
    const result = await DaftarHadirDosen.create({
      nip,
      id_studi,
      tanggal,
      isHadir
    })
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
