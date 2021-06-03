/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as DaftarHadirDosenDAO from '../dao/DaftarHadirDosen'
import * as JadwalDAO from '../dao/Jadwal'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'
import schedule from 'node-schedule'
import { DateTime } from 'luxon'

export const generateDaftarHadirDosen = async () => {
  try {
    // hanya dijalankan ketika pertama kali app di run
    await DaftarHadirDosenDAO.bikinDaftarHadirSeluruhDosenHariIni()
  } catch (error) {
    return Promise.reject(error)
  }
  schedule.scheduleJob('0 0 * * *', async () => {
    // akan dijalankan once a day jam 00:00
    try {
      await DaftarHadirDosenDAO.bikinDaftarHadirSeluruhDosenHariIni()
    } catch (error) {
      return Promise.reject(error)
    }
  })
}

export const melakukanAbsensi = async (nip, idStudi, idJadwal) => {
  try {
    const jadwal = await JadwalDAO.findJadwalById(idJadwal)
    // presensi dapat dilakukan ketika
    // 30 menit sebelum perkuliaham dimulai
    // sampai batas akhir waktu perkuliahan
    const now = DateTime.now()
    const tglHariIni = now.toISODate()
    const pembukaanPreseni = DateTime.fromISO(`${tglHariIni}T${jadwal[0].waktu_mulai}`).minus({ minutes: 30 })
    const batasAkhirPresensi = DateTime.fromISO(`${tglHariIni}T${jadwal[0].waktu_selesai}`)

    let result
    if (now >= pembukaanPreseni) {
      // presensi sudah dibuka
      if (now <= batasAkhirPresensi) {
        // update kehadiran
        result = await DaftarHadirDosenDAO.updateStatusKehadiranDosen(nip, idStudi, tglHariIni, true, idJadwal)
      } else {
        // sudah melewati jam matkul
        const error = new Error('Presensi sudah ditutup')
        error.statusCode = 400
        error.cause = 'Perkuliahan telah selesai'
        throw error
      }
    } else {
      // presensi belum boleh dilakukan
      const error = new Error('Presensi belum bisa dilakukan')
      error.statusCode = 400
      error.cause = 'Presensi dibuka 30 menit sebelum perkuliahan dimulai'
      throw error
    }

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
