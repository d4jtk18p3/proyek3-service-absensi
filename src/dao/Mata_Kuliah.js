import Mata_Kuliah from '../models/Mata_Kuliah'

export const findMataKuliahByIdMatkul = async (id_mata_kuliah) => {
  try {
    const mata_kuliah = await Mata_Kuliah.findByPk(id_mata_kuliah)
    return mata_kuliah
  } catch (error) {
    return Promise.reject(error)
  }
}
