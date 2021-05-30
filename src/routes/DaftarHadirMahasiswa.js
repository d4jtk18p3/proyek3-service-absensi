import express from 'express'
import * as DaftarHadirMahasiswaController from '../controller/DaftarHadirMahasiswa'

const router = express.Router()

router.put('/presensi', DaftarHadirMahasiswaController.presensiMhsHandler)

export default router
