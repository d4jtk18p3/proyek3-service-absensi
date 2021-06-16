import path from 'path'
import upload from '../middleware/upload'
import * as MahasiswaServices from '../services/Mahasiswa'
import * as DosenServices from '../services/Dosen'

export const getSuratIzin = (req, res) => {
  const { filename } = req.params
  const dirname = path.resolve()
  const fullfilepath = path.join(dirname, 'public/uploads/', filename)
  return res.sendFile(fullfilepath)
}
// Catatan : gimana cara nya untuk rollback upload file :(
export const uploadSuratIzin = (req, res) => {
  upload.single('surat-izin')(req, res, async (err) => {
    if (err) {
      // something error
      return res.status(500).json({
        message: err,
        data: {}
      })
    }

    if (req.file === undefined) {
      // file undefined
      return res.status(400).json({
        message: 'Bad request : No File Selected',
        data: {}
      })
    }

    const { idJadwals, status, nim, tglIzin } = req.body

    try {
      const url = req.file.path

      // pastikan idStudies adalah array
      let idJadwalArr = idJadwals
      if (!Array.isArray(idJadwals)) {
        idJadwalArr = [idJadwals]
      }
      const results = await MahasiswaServices.ajukanIzin(idJadwalArr, status, url, nim, tglIzin)
      const rows = results[0]
      res.json({
        message: `mahasiswa nim ${nim} mengajukan izin dengan status ${status} untuk tanggal ${tglIzin}`,
        data: rows
      })
    } catch (error) {
      if (error.statusCode) {
        return res.status(error.statusCode).json({ error })
      }
      res.json({ error })
    }
  })
}

export const validasiKetidakhadiran = async (req, res, next) => {
  const { idKeterangan, isAccepted } = req.query
  try {
    const result = await DosenServices.validasiKetidakhadiran(idKeterangan, isAccepted)
    res.json({
      message: `validasi ketidakhadiran dengan id keterangan ${idKeterangan} dan kode validasi berupa ${isAccepted}`,
      data: result
    })
  } catch (error) {

  }
}
