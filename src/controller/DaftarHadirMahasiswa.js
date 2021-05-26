import * as MahasiswaService from '../services/Mahasiswa'

export const presensiMhsHandler = async (req, res, next) => {
  const { idStudi, idJadwal } = req.query
  try {
    const result = await MahasiswaService.melakukanAbsensi(idStudi, idJadwal)
    res.json(result)
  } catch (error) {
    next(error)
  }
}
