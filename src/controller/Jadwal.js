import * as JadwalDAO from '../dao/Jadwal'

export const getJadwalMhsHrTertentuHandler = async (req, res) => {
  const nim = req.query.nim
  const hari = req.query.hari
  try {
    const result = await JadwalDAO.getJadwalMhsHrTertentu(nim, hari)
    res.json({
      message: `Jadwal kuliah nim ${nim} pada hari ${hari}`,
      data: {
        jadwal: result
      }
    })
  } catch (error) {
    res.status(error.status).json({ error })
  }
}

export const getJadwalDosenHrTertentuHandler = async (req, res) => {
  const nip = req.query.nip
  const hari = req.query.hari
  try {
    const result = await JadwalDAO.getJadwalDosenHrTertentu(nip, hari)
    const d = new Date()
    const tanggalHariIni = `${d.getFullYear()}:${d.getMonth() + 1}:${d.getDate()}`
    res.json({ result, tanggalHariIni })
  } catch (error) {
    res.status(error.status).json({ error })
  }
}

export const getAllJadwal = async (req, res) => {
  try {
    const result = await JadwalDAO.getAllJadwal()
    res.json({
      message: 'Semua jadwal kuliah',
      data: {
        jadwal: result
      }
    })
  } catch (error) {
    res.status(error.status).json({ error })
  }
}
