/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'

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
