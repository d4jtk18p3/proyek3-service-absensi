import path from 'path'
import upload from '../middleware/upload'
import * as KeteranganDAO from '../dao/Keterangan'

export const getSuratIzin = (req, res) => {
    const { filename } = req.params
    const dirname = path.resolve()
    const fullfilepath = path.join(dirname, 'public/uploads/', filename)
    return res.sendFile(fullfilepath)
}

export const uploadSuratIzin = (req, res) => {
    upload.single('surat-izin')(req, res, async(err) => {
      
      if(err){
        // something error
        return res.status(500).json({
          message: err,
          data: {}
        })
      }
  
      if(req.file == undefined){
        // file undefined
        return res.status(400).json({
          message: 'Bad request : No File Selected',
          data: {}
        })
      }

      try {
        const keteragan = await KeteranganDAO.insertKeterangan(req.body.status, req.file.path)  
        res.status(200).json({
          data: keteragan
        })
      } catch (error) {
        res.status(500).json({
          error
        })
      }
    })
  }