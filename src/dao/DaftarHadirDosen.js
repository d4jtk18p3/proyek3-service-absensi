import DaftarHadirDosen from '../models/DaftarHadirDosen'
import * as DosenDAO from './Dosen'
import * as JadwalDAO from './Jadwal'
import db from '../db'

export const insertOne = async (nip, idStudi, tanggal, isHadir, idJadwal) => {
  // Belum dicoba karena membutuhkan data dari db common
  try {
    const result = await DaftarHadirDosen.create({
      nip,
      id_studi: idStudi,
      tanggal,
      isHadir,
      idJadwal
    })
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findDaftarHadirDosenByNIPAndIdStudi = async (nip, idStudi) => {
  try {
    const daftarHadirDosen = await DaftarHadirDosen.findAll({
      where: {
        nip,
        idStudi
      }
    })
    return daftarHadirDosen
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateStatusKehadiranDosen = async (nip, idStudi, tanggal, isHadir, idJadwal) => {
  try {
    const result = await db.query(`
    UPDATE "daftar_hadir_dosen" SET "isHadir" = ${isHadir} WHERE (nip='${nip}' AND id_studi=${idStudi} AND tanggal='${tanggal}' AND "idJadwal"=${idJadwal}) RETURNING *;
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}

export const isSudahPunyaDaftarHadir = async (nip, tanggal, idJadwal) => {
  try {
    const result = await db.query(`
    SELECT * FROM "daftar_hadir_dosen" WHERE nip='${nip}' AND tanggal='${tanggal}' AND "idJadwal"=${idJadwal};
    `)
    const rows = result[0]
    return rows.length > 0
  } catch (error) {
    return Promise.reject(error)
  }
}

export const bikinDaftarHadirSeluruhDosenHariIni = async () => {
  // Author : hafizmfadli
  // param : -
  // return : -
  // FS : daftar hadir seluruh mahasiswa untuk setiap matkul hari ini telah siap

  // Catatan :
  // Fungsi ini harus dipanggil satu kali sehari
  // untuk inisiasi daftar hadir mahasiswa

  // Bikin daftar hadirnya jadngan berdasarkan matkul, tapi berdasarkan jadwal ngab
  try {
    const date = new Date()
    const tglHariIni = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const allDosen = await DosenDAO.findAllDosen()
    console.log(allDosen)
    allDosen.forEach(async (dosen) => {
      const jadwalHariIni = await JadwalDAO.getJadwalDosenHrTertentu(dosen.nip, date.getDay())
      console.log("JADWAL DOSEN HARI INI NGAB")
      console.log(jadwalHariIni)
      await Promise.all(jadwalHariIni.map(async (jadwal) => {
        const isPunya = await isSudahPunyaDaftarHadir(dosen.nip, tglHariIni, jadwal.id_jadwal)
        if (!isPunya) {
          // bikin daftar hadir untuk setiap jadwal hari ini
          const result = await insertOne(dosen.nip, jadwal.id_studi, tglHariIni, false, jadwal.id_jadwal)
          console.log(result)
        }
      })
      )
    })
    return true
  } catch (error) {
    return Promise.reject(error)
  }
}
