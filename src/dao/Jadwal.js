import Jadwal from '../models/Jadwal'

export const findJadwalByHariAndNIP = async (hari, NIP) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari,
        NIP
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findJadwalByHariAndNIM = async (hari, NIM) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari,
        NIM
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}
