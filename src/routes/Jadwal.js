import express from 'express'
import * as JadwalController from '../controller/Jadwal'

const router = express.Router()

router.get('/dosen', JadwalController.getJadwalDosenByHariAndNIP)

export default router
