import express from 'express'
import * as DaftarHadirDosenController from '../controller/DaftarHadirDosen'
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'


const router = express.Router()

router.put('/presensi-dosen', DaftarHadirDosenController.presensiMhsHandler)
router.post('/buat-presensi-dosen', DaftarHadirDosenDAO.bikinDaftarHadirSeluruhDosenHariIni)

export default router
