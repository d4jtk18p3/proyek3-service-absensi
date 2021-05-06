import express from 'express'
import * as KeteranganController from '../controller/Keterangan'

const router = express.Router()

router.get('/image/:filename', KeteranganController.getSuratIzin)
router.post('/upload/surat-izin', KeteranganController.uploadSuratIzin)

export default router
