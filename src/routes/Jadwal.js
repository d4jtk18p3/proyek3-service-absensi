import express from 'express'
import * as JadwalController from '../controller/Jadwal'

const router = express.Router()

router.get('/dosen', JadwalController.getJadwalDosenByHariAndNIP)
// router.get('/mahasiswa', JadwalController.getJadwalMahasiswaByHariAndNIM)
router.get('/mahasiswa', JadwalController.getJadwalMhsHrTertentuHandler)

export default router
