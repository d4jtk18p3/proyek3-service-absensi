import Kelas from '../models/Kelas'

export const findKelasByKodeKelas = async (kode_kelas) => {
  try {
    const kelas = await Kelas.findByPk(kode_kelas)
    return kelas
  } catch (error) {
    return Promise.reject(error)
  }
}
