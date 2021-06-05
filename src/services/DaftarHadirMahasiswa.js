import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'

export const getDaftarHadirKelasJadwal = async (kodeKelas, idJadwal, tanggal) => {
  // author : hafizmfadli
  // return : daftar hadir seluruh mahasiswa pada suatu kelas tertentu
  try {
    const result = await DaftarHadirMahasiswaDAO.getDaftarHadirKelasJadwal(kodeKelas, idJadwal, tanggal)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getDaftarHadirNimJadwalTanggal = async (nim, idJadwal, tanggal) => {
  // author : hafizmfadli
  // return : daftar hadri suatu mahasiswa dengan nim, idJadwal pada tanggal tertentu
  try {
    const result = await DaftarHadirMahasiswaDAO.getByNimJadwalTgl(nim, idJadwal, tanggal)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getDashboardNim = async (nim) => {
  // author : hafizmfadli
  // return : daftar hadri suatu mahasiswa dengan nim, idJadwal pada tanggal tertentu
  try {
    const jumlahJamSakit = await DaftarHadirMahasiswaDAO.getKeteranganSakitByNim(nim)
    const jumlahJamIzin = await DaftarHadirMahasiswaDAO.getKeteranganIzinByNim(nim)
    const jumlahJamAlfa = await DaftarHadirMahasiswaDAO.getKeteranganAlfaByNim(nim)
    const kehadiran = await DaftarHadirMahasiswaDAO.getPersentaseKehadiranByNim(nim)
    const persentaseKehadiran = kehadiran.persentaseKehadiran
    const jumlahJamHadir = kehadiran.jumlahJamHadir
    const totalJamSP = await DaftarHadirMahasiswaDAO.getTotalJamSPbyNim(nim)
    const totalJamTidakMasuk = totalJamSP.totalJamTidakMasuk
    const jamTersisaUntukSP = totalJamSP.jamTersisaUntukSP
    const result = {
      jumlahJamSakit: jumlahJamSakit,
      jumlahJamIzin: jumlahJamIzin,
      jumlahJamAlfa: jumlahJamAlfa,
      persentaseKehadiran: persentaseKehadiran,
      jumlahJamHadir: jumlahJamHadir,
      totalJamTidakMasuk: totalJamTidakMasuk,
      jamTersisaUntukSP: jamTersisaUntukSP
    }
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
