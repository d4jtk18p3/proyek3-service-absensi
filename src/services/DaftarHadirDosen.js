import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'

export const getDaftarHadirNipJadwalTanggal = async (nip, idJadwal, tanggal) => {
  // author : hafizmfadli
  // return : daftar hadri suatu mahasiswa dengan nim, idJadwal pada tanggal tertentu
  try {
    const result = await DaftarHadirDosenDAO.getByNipJadwalTgl(nip, idJadwal, tanggal)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
