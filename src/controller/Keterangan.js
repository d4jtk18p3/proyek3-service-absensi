import path from 'path'
import upload from '../middleware/upload'
import * as MahasiswaServices from '../services/Mahasiswa'

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

    const { idJadwals, status, nim } = req.body

    try {
      const url = req.file.path

      // pastikan idStudies adalah array
      let idJadwalArr = idJadwals
      if(!Array.isArray(idJadwals)){
        idJadwalArr = [idJadwals]
      }

      const results = await MahasiswaServices.ajukanIzin(idJadwalArr, status, url, nim)
      res.json({ results })
    } catch (error) {
      res.status(500).json({ error })
    }
  })
}
