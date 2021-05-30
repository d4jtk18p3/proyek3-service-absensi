import express from 'express'
import * as DaftarHadirDosenController from '../controller/DaftarHadirDosen'

const router = express.Router()

router.post('/dosen-kehadiran', DaftarHadirDosenController.presensiMhsHandler)

export default router
