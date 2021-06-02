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
