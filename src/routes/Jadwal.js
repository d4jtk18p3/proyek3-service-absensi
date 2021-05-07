import express from 'express'
import * as JadwalController from '../controller/Jadwal'

const router = express.Router()

router.get('/api/jadwal_perkuliahan', JadwalController.getJadwalDosenByHariAndNIP)

export default router
