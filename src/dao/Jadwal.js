import Jadwal from '../models/Jadwal'

export const findJadwalByHariAndNIP = async (hari, NIP) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari: hari,
        nip: NIP
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findJadwalByHari = async (hari) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari: hari
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}
