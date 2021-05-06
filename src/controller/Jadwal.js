import * as JadwalDAO from '../dao/Jadwal'
// import * as DosenDAO from '../dao/Dosen'

export const getJadwalDosenByHariAndNIP = async (req, res) => {
  try {
    // const { hari } = req.params.hari
    const { NIP } = req.params.nip
    // const dosen = await DosenDAO.findDosenByNIP(NIP)
    const jadwal = await JadwalDAO.findJadwalByNIP(NIP)
    res.status(200).json({
      message: 'get jadwal by hari dan NIP sukses',
      data: {
        jadwal
      }
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}
