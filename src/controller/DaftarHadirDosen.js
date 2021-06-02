import * as DosenService from '../services/Dosen'
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'

export const presensiDosenHandler = async (req, res, next) => {
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

export const bikinDaftarHadirDosenHandler = async (req, res, next) => {
  const { nip, idStudi, idJadwal } = req.query
  try {
    const result = await DaftarHadirDosenDAO.bikinDaftarHadirSeluruhDosenHariIni()
    res.json({
      message: `Generate seluruh daftar hadir dosen hari ini`,
      data: {
        presensi: result
      }
    })
  } catch (error) {
    next(error)
  }
}
