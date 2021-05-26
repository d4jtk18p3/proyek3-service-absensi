import * as JadwalDAO from '../dao/Jadwal'
import * as DosenDAO from '../dao/Dosen'
import * as MahasiswaDAO from '../dao/Mahasiswa'
import * as PerkuliahanDAO from '../dao/Perkuliahan'
import * as Kelas from '../dao/Kelas'
import * as MataKuliah from '../dao/Mata_Kuliah'
import * as Studi from '../dao/Studi'
import * as DaftarHadirDosen from '../dao/DaftarHadirDosen'
import * as DaftarHadirMahasiswa from '../dao/DaftarHadirMahasiswa'

export const getJadwalDosenByHariAndNIP = async (req, res) => {
  try {
    const hari = parseInt(req.query.hari)
    const NIP = parseInt(req.query.nip)
    const dosen = await DosenDAO.findDosenByNIP(NIP)
    const listJadwal = await JadwalDAO.findJadwalByHariAndNIP(hari, NIP)

    var i
    var listJadwalPerkuliahan = []
    for (i = 0; i < listJadwal.length; i++) {
      var perkuliahan = await PerkuliahanDAO.findPerkuliahanByIdPerkuliahan(listJadwal[i].id_perkuliahan)
      var kelas = await Kelas.findKelasByKodeKelas(perkuliahan.kode_kelas)
      var mataKuliah = await MataKuliah.findMataKuliahByIdMatkul(perkuliahan.id_mata_kuliah)
      var studi = await Studi.findStudiByIdPerkuliahan(perkuliahan.id_perkuliahan)

      var j
      var listDaftarHadirDosen = []
      for (j = 0; j < studi.length; j++) {
        var daftarHadirDosen = await DaftarHadirDosen.findDaftarHadirDosenByNIPAndIdStudi(NIP, studi[j].id_studi)
        listDaftarHadirDosen.push(daftarHadirDosen)
      }

      const jadwalPerkuliahan = {
        jadwal: listJadwal[i],
        kelas: kelas,
        mata_kuliah: mataKuliah,
        daftarHadirDosen: listDaftarHadirDosen,
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

export const getJadwalMahasiswaByHariAndNIM = async (req, res) => {
  try {
    const hari = parseInt(req.query.hari)
    const NIM = parseInt(req.query.nim)
    const mahasiswa = await MahasiswaDAO.findMahasiswaByNIM(NIM)
    const listJadwal = await JadwalDAO.findJadwalByHari(hari)

    var i
    var listJadwalPerkuliahan = []
    var listDosen = []
    for (i = 0; i < listJadwal.length; i++) {
      var perkuliahan = await PerkuliahanDAO.findPerkuliahanByIdPerkuliahan(listJadwal[i].id_perkuliahan)
      var kelas = await Kelas.findKelasByKodeKelas(perkuliahan.kode_kelas)
      var mataKuliah = await MataKuliah.findMataKuliahByIdMatkul(perkuliahan.id_mata_kuliah)
      var studi = await Studi.findStudiByIdPerkuliahan(perkuliahan.id_perkuliahan)
      var dosen = await DosenDAO.findDosenByNIP(listJadwal[i].nip)
      listDosen.push(dosen)

      var j
      var listDaftarHadirMahasiswa = []
      for (j = 0; j < studi.length; j++) {
        var daftarHadirMahasiswa = await DaftarHadirMahasiswa.findDaftarHadirMahasiswaByNIMAndIdStudi(NIM, studi[j].id_studi)
        listDaftarHadirMahasiswa.push(daftarHadirMahasiswa)
      }

      const jadwalPerkuliahan = {
        jadwal: listJadwal[i],
        kelas: kelas,
        mata_kuliah: mataKuliah,
        daftarHadirMahasiswa: daftarHadirMahasiswa,
        dosen: listDosen,
        mahasiswa: mahasiswa
      }

      listJadwalPerkuliahan.push(jadwalPerkuliahan)
    }

    res.status(200).json({
      message: 'get jadwal by hari dan NIM sukses',
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
