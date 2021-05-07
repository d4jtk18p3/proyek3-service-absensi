import express from 'express'
import * as JadwalController from '../controller/Jadwal'

const router = express.Router()

router.get('/dosen', JadwalController.getJadwalDosenByHariAndNIP)
router.get('/mahasiswa', JadwalController.getJadwalMahasiswaByHariAndNIM)

export default router
