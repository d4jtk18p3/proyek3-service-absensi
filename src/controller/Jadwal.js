import * as JadwalDAO from '../dao/Jadwal'
import * as DosenDAO from '../dao/Dosen'
import * as PerkuliahanDAO from '../dao/Perkuliahan'
import * as Kelas from '../dao/Kelas'
import * as MataKuliah from '../dao/Mata_Kuliah'
import * as Studi from '../dao/Studi'

export const getJadwalDosenByHariAndNIP = async (req, res) => {
  try {
    const hari = parseInt(req.query.hari)
    const NIP = req.query.nip
    const dosen = await DosenDAO.findDosenByNIP(NIP)
    const listJadwal = await JadwalDAO.findJadwalByHariAndNIP(hari, NIP)

    console.log(listJadwal)
    console.log(dosen)

    var i
    const listJadwalPerkuliahan = []
    for (i = 0; i < listJadwal.length; i++) {
      const perkuliahan = await PerkuliahanDAO.findPerkuliahanByIdPerkuliahan(listJadwal[i].id_perkuliahan)
      const kelas = await Kelas.findKelasByKodeKelas(perkuliahan.kode_kelas)
      const mataKuliah = await MataKuliah.findMataKuliahByIdMatkul(perkuliahan.id_mata_kuliah)
      const studi = await Studi.findStudiByIdPerkuliahan(perkuliahan.id)

      const jadwalPerkuliahan = {
        jadwal: listJadwal[i],
        kelas: kelas,
        mata_kuliah: mataKuliah,
        studi: studi,
        dosen: dosen
      }

      listJadwalPerkuliahan.push(jadwalPerkuliahan)
    }

    res.status(200).json({
      message: 'get jadwal by hari dan NIP sukses',
      data: {
        listJadwalPerkuliahan
      }
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}
