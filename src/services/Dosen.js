/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'
import * as JadwalDAO from '../dao/Jadwal'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'

export const melakukanAbsensi = async (nip, idStudi, idJadwal) => {
  try {
    const d = new Date()
    const tglHariIni = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

    const result = await DaftarHadirDosenDAO.updateStatusKehadiranDosen(nip, idStudi, tglHariIni, true, idJadwal)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateKehadiranMahasiswa = async (idStudi, idJadwal, tanggal, isHadir) => {
  // author : hafizmfadli
  // return : rows daftar mahasiswa yang sudah update
  try {
    const jadwal = await JadwalDAO.findJadwalById(idJadwal)
    const jadwalRow = jadwal[0]
    const daftarHadirMhs = await DaftarHadirMahasiswaDAO.updateIsHadirMhs(idStudi, tanggal, jadwalRow.ja, jadwalRow.jb, isHadir)
    return daftarHadirMhs
  } catch (error) {
    return Promise.reject(error)
  }
}
