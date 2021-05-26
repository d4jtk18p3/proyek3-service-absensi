/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as JadwalDAO from '../dao/Jadwal'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'

const hitungKeterlambatan =  (batasAbsen, absenDilakukan) => {
  // Output : selisih antara absenDilakukan dan batasAbsen (dalam menit)

  let temp = batasAbsen.split(':')
  const batasAbsenInSecond = (+temp[0]) * 60 * 60 + (+temp[1]) * 60 + (+temp[2])
  temp = absenDilakukan.split(':')
  const absenDilakukanInSecond = (+temp[0]) * 60 * 60 + (+temp[1]) * 60 + (+temp[2])

  const keterlambatanInMinutes = (absenDilakukanInSecond - batasAbsenInSecond) / 60

  return keterlambatanInMinutes
}

export const melakukanAbsensi = async (idStudi, idJadwal) => {
  // Service ini dipanggil ketika button "Hadir" pada halaman
  // absensi mahasiswa ditekan

  try {
    const d = new Date()
    const tglHariIni = `${d.getFullYear()}:${d.getMonth()}:${d.getDate()}`

    const jadwal = await JadwalDAO.findJadwalById(idJadwal)
    const batasAbsen = jadwal[0].batas_terakhir_absen
    const absenDilakukan = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    const keterlambatan = Math.round(hitungKeterlambatan(batasAbsen, absenDilakukan))

    const result = await DaftarHadirMahasiswaDAO.insertOne(idStudi, null, keterlambatan, tglHariIni, true)

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}