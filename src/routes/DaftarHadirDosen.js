import express from 'express'
import * as DaftarHadirDosenController from '../controller/DaftarHadirDosen'


const router = express.Router()

router.put('/presensi-dosen', DaftarHadirDosenController.presensiDosenHandler)
router.post('/buat-presensi-dosen', DaftarHadirDosenController.bikinDaftarHadirDosenHandler)

export default router
