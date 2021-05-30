import * as DosenService from '../services/Dosen'

export const presensiMhsHandler = async (req, res, next) => {
  const { nip, idStudi, idJadwal } = req.query
  try {
    const result = await DosenService.melakukanAbsensi(nip, idStudi, idJadwal)
    res.json({
      message: `Mengisi presensi dengan NIP ${nip} dan idStudi ${idStudi} dan idJadwal ${idJadwal}`,
      data: {
        presensi: result
      }
    })
  } catch (error) {
    next(error)
  }
}
