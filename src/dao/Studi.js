import Studi from '../models/Studi'

export const findStudiByIdStudi = async (id_studi) => {
  try {
    const studi = await Studi.findByPk(id_studi)
    return studi
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findStudiByIdPerkuliahan = async (id_perkuliahan) => {
  try {
    const studi = await Studi.findAll({
      where: {
        id_perkuliahan,
      }
    })
    return studi
  } catch (error) {
    return Promise.reject(error)
  }
}
