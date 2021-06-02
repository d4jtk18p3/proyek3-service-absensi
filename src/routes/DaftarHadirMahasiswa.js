import express from 'express'
import * as DaftarHadirMahasiswaController from '../controller/DaftarHadirMahasiswa'

const router = express.Router()

router.put('/presensi', DaftarHadirMahasiswaController.presensiMhsHandler)
router.get('/kelas-jadwal', DaftarHadirMahasiswaController.getDaftarHadirKelasJadwal)

export default router
