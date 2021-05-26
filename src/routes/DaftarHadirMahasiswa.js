import express from 'express'
import * as DaftarHadirMahasiswaController from '../controller/DaftarHadirMahasiswa'

const router = express.Router()

router.post('/mhs-kehadiran', DaftarHadirMahasiswaController.presensiMhsHandler)


export default router
