/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as JadwalDAO from '../dao/Jadwal'
import * as KeteranganDAO from '../dao/Keterangan'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'
import schedule from 'node-schedule'

export const generateDaftarHadirMahasiswa = async () => {
  // Author : hafizmfadli
  // param: -
  // Output: daftar hadir hari ini untuk seluruh mahasiswa digenerate

  try {
    // hanya dijalankan ketika pertama kali app di run
    await DaftarHadirMahasiswaDAO.bikinDaftarHadirSeluruhMhsHariIni()
  } catch (error) {
    return Promise.reject(error)
  }
  schedule.scheduleJob('0 0 * * *', async () => {
    // akan dijalankan once a day jam 00:00
    try {
      await DaftarHadirMahasiswaDAO.bikinDaftarHadirSeluruhMhsHariIni()
    } catch (error) {
      return Promise.reject(error)
    }
  })
}

const hitungKeterlambatan = (batasAbsen, absenDilakukan) => {
  // Output : selisih antara absenDilakukan dan batasAbsen (dalam menit)

  let temp = batasAbsen.split(':')
  const batasAbsenInSecond = (+temp[0]) * 60 * 60 + (+temp[1]) * 60 + (+temp[2])
  temp = absenDilakukan.split(':')
  const absenDilakukanInSecond = (+temp[0]) * 60 * 60 + (+temp[1]) * 60 + (+temp[2])

  const keterlambatanInMinutes = (absenDilakukanInSecond - batasAbsenInSecond) / 60

  return keterlambatanInMinutes
}

export const melakukanAbsensi = async (idStudi, idJadwal) => {
  // Author : hafizmfadli
  // param : idStudi (int), idJadwal (int)
  // Output : Mahasiswa dianggap hadir dengan keterlambatannya telah dihitung
  // return : rows updated

  try {
    const d = new Date()
    const tglHariIni = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    const jadwal = await JadwalDAO.findJadwalById(idJadwal)
    const batasAbsen = jadwal[0].batas_terakhir_absen
    const absenDilakukan = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    const keterlambatan = Math.round(hitungKeterlambatan(batasAbsen, absenDilakukan))
    const result = await DaftarHadirMahasiswaDAO.updateStatusKehadiranMhs(idStudi, keterlambatan, tglHariIni, true, jadwal[0].ja, jadwal[0].jb, null)
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const ajukanIzin = async (idJadwals, status, url, nim) => {
  // ide :
  // insert keterangan terlebih dahulu (karena kita butuh id nya)
  // id_keterangan dan id studi akan menjadi FK pada tabel daftar_hadir_mhs

  // Input:
  // idStudies : array of id_studi
  // status : char (i = izin, s = sakit, a = alfa)
  // urgl : string (url image surat izin)

  // Output :
  // data daftar hadir berhasil disimpan di db
  // return daftar daftar hadir mahasiswa yang mengajukan izin

  try {
    const d = new Date()
    const tglHariIni = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    const jadwals = await JadwalDAO.getJadwalMhsHrTertentu(nim, d.getDay())
    const keterangan = await KeteranganDAO.insertKeterangan(nim, status, url)

    const results = []
    await Promise.all(jadwals.map(async (jadwal) => {
      if (idJadwals.includes(`${jadwal.id_jadwal}`)) {
        const result = await DaftarHadirMahasiswaDAO.updateStatusKehadiranMhs(jadwal.id_studi, 0, tglHariIni, false, jadwal.ja, jadwal.jb, keterangan.dataValues.id_keterangan)
        results.push(result[0])
        return result
      }
    })
    )
    return results
  } catch (error) {
    return Promise.reject(error)
  }
}
