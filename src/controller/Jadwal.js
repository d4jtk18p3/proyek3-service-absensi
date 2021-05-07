import * as JadwalDAO from '../dao/Jadwal'
import * as DosenDAO from '../dao/Dosen'
import * as PerkuliahanDAO from '../dao/Perkuliahan'
import * as Kelas from '../dao/Kelas'
import * as Mata_Kuliah from '../dao/Mata_Kuliah'
import * as Studi from '../dao/Studi'
import * as DaftarHadirDosen from '../dao/DaftarHadirDosen'


export const getJadwalDosenByHariAndNIP = async (req, res) => {
  try {
    const { hari } = req.query.hari
    const { NIP } = req.query.nip
    const dosen = await DosenDAO.findDosenByNIP(NIP)
    var listJadwal = await JadwalDAO.findJadwalByHariAndNIP(hari, NIP)

    var i
    var listJadwalPerkuliahan = []
    for(i = 0;i < listJadwal.length;i++) {
      var perkuliahan = await PerkuliahanDAO.findPerkuliahanByIdPerkuliahan(listJadwal[i].id_perkuliahan)
      var kelas = await Kelas.findKelasByKodeKelas(perkuliahan.kode_kelas)
      var mata_kuliah = await Mata_Kuliah.findMataKuliahByIdMatkul(perkuliahan.id_mata_kuliah)
      var studi = await Studi.findStudiByIdPerkuliahan(perkuliahan.id_perkuliahan)

      var j
      var listDaftarHadirDosen = []
      for(j = 0;j < studi.length;j++) {
        var daftar_hadir_dosen = await DaftarHadirDosen.findDaftarHadirDosenByNIPAndIdStudi(NIP, studi[j].id_studi)
        listDaftarHadirDosen.push(daftar_hadir_dosen)
      }

      const jadwalPerkuliahan = {
        jadwal: listJadwal[i],
        kelas: kelas,
        mata_kuliah: mata_kuliah,
        daftar_hadir_dosen: listDaftarHadirDosen,
        dosen: dosen
      }

      listJadwalPerkuliahan.push(jadwalPerkuliahan)
    }

    

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
