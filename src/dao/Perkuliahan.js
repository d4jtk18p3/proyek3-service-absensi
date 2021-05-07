import Perkuliahan from '../models/Perkuliahan'

export const findPerkuliahanByIdPerkuliahan = async (id_perkuliahan) => {
  try {
    const perkuliahan = await Perkuliahan.findByPk(id_perkuliahan)
    return perkuliahan
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findPerkuliahanByIdMatkulAndKodeKelas = async (id_mata_kuliah, kode_kelas) => {
  try {
    const perkuliahan = await Perkuliahan.findAll({
      where: {
        id_mata_kuliah,
        kode_kelas
      }
    })
    return perkuliahan
  } catch (error) {
    return Promise.reject(error)
  }
}
