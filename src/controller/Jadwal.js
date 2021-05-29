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
    res.json({ result })
  } catch (error) {
    res.status(error.status).json({ error })
  }
}
