import DaftarHadirMahasiswa from '../models/DaftarHadirMahasiswa'
import * as MahasiswaDAO from './Mahasiswa'
import * as JadwalDAO from './Jadwal'
import db from '../db'

export const insertOne = async (idStudi, idKeterangan, keterlambatan, tanggal, isHadir, minggu, bulan, ja, jb) => {
  // Belum melibatkan db common
  try {
    const result = await DaftarHadirMahasiswa.create({
      id_studi: idStudi,
      id_keterangan: idKeterangan,
      keterlambatan,
      tanggal,
      isHadir,
      minggu,
      bulan,
      ja,
      jb
    })

    return result
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findDaftarHadirMahasiswaByNIMAndIdStudi = async (nim, idStudi) => {
  try {
    const daftarHadirMahasiswa = await DaftarHadirMahasiswa.findAll({
      where: {
        nim,
        idStudi
      }
    })
    return daftarHadirMahasiswa
  } catch (error) {
    return Promise.reject(error)
  }
}

export const isSudahPunyaDaftarHadir = async (idStudi, tanggal, ja, jb) => {
  try {
    const result = await db.query(`
    SELECT * FROM "daftar_hadir_mahasiswa" WHERE id_studi=${idStudi} AND ja=${ja} AND jb=${jb} AND tanggal='${tanggal}';
    `)
    const rows = result[0]
    return rows.length > 0
  } catch (error) {
    return Promise.reject(error)
  }
}

export const bikinDaftarHadirSeluruhMhsHariIni = async () => {
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
    const allMhs = await MahasiswaDAO.findAllMahasiswa()
    allMhs.forEach(async (mhs) => {
      const matkulHariIni = await JadwalDAO.getJadwalMhsHrTertentu(mhs.nim, date.getDay())
      await Promise.all(matkulHariIni.map(async (matkul) => {
        const isPunya = await isSudahPunyaDaftarHadir(matkul.id_studi, tglHariIni, matkul.ja, matkul.jb)
        if (!isPunya) {
          // bikin daftar hadir untuk setiap matkul hari ini
          const result = await insertOne(matkul.id_studi, null, 0, tglHariIni, false, calculateWeekOfMonth(date.getDate()), date.getMonth() + 1, matkul.ja, matkul.jb)
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

export const calculateWeekOfMonth = (tgl) => {
  const week = Math.ceil(tgl / 7)
  return week > 4 ? 4 : week
}

export const getDaftarHadirKelasJadwal = async (kodeKelas, idJadwal, tanggal) => {
  // Author : hafizmfadli
  // Fungsi ini digunakan oleh dosen pengampu ketika mau liat daftar hadir pada matkul yang sedang dia ajar
  // Param : kodeKelas, hari, idJadwal, tanggal (yyyy-mm-dd)
  // return : daftar hadir mhs pada suatu kelas, jadwal, dan hari tertentu

  try {
    const date = new Date(tanggal)
    const hari = date.getDay()
    const result = await db.query(`
    SELECT mhs.nim, mhs.nama, mhs.kode_kelas, p.id AS id_perkuliahan, mk.id, s.id AS id_studi, j.id_jadwal, mk.nama_mata_kuliah, d.nama_dosen, dhm.tanggal, j.batas_terakhir_absen, j.id_jadwal, dhm."isHadir",
    dhm.id_daftar_hadir_mhs FROM "Jadwal" j
    INNER JOIN "Perkuliahan" p ON p.id = j.id_perkuliahan
    INNER JOIN "Studi" s ON p.id = s.id_perkuliahan
    INNER JOIN "daftar_hadir_mahasiswa" dhm ON dhm.id_studi = s.id AND dhm.ja = j.ja AND dhm.jb = j.jb
    INNER JOIN "Mahasiswa" mhs ON mhs.nim = s.id_mahasiswa
    INNER JOIN "Mata_Kuliah" mk ON mk.id = p.id_mata_kuliah
    INNER JOIN "Dosen" d ON d.nip = j.nip
    WHERE j.hari=${hari} AND p.kode_kelas=${kodeKelas} AND j.id_jadwal=${idJadwal} AND dhm.tanggal='${tanggal}';
    `)
    const resultRow = result[0]
    const mahasiswa = resultRow.map(mhs => {
      // ambil informasti ttg status hadir mahasiswa saja
      return {
        id_studi: mhs.id_studi,
        nim: mhs.nim,
        nama: mhs.nama,
        isHadir: mhs.isHadir,
        id_daftar_hadir: mhs.id_daftar_hadir_mhs
      }
    })

    const resultPretty = {
      // rapihin dulu
      id_jadwal: resultRow[0].id_jadwal,
      id_perkuliahan: resultRow[0].id_perkuliahan,
      nama_mata_kuliah: resultRow[0].nama_mata_kuliah,
      kode_kelas: resultRow[0].kode_kelas,
      dosen: resultRow[0].nama_dosen,
      tanggal: resultRow[0].tanggal,
      batas_terakhir_absen: resultRow[0].batas_terakhir_absen,
      mahasiswa
    }

    return resultPretty
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateStatusKehadiranMhsByID = async (idDaftarHadirMhs, isHadir) => {
  try {
    const result = await db.query(`
    UPDATE "daftar_hadir_mahasiswa" SET "isHadir" = ${isHadir} WHERE id_daftar_hadir_mhs = ${idDaftarHadirMhs} RETURNING *;
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateStatusKehadiranMhs = async (idStudi, keterlambatan, tanggal, isHadir, ja, jb, idKeterangan) => {
  // Author : Hafiz
  // param : idStudi (int), tanggal (string : 'yyyy-mm-dd'), isHadir (boolean), ja (int), jb(int)
  // Output : nilai field isHadir pada tabel daftar_hadir_mahasiswa terupdate
  // return : rows yang telah diupdated
  try {
    const result = await db.query(`
    UPDATE "daftar_hadir_mahasiswa" SET "isHadir" = ${isHadir}, keterlambatan = ${keterlambatan}, id_keterangan = ${idKeterangan} WHERE (id_studi=${idStudi} AND tanggal='${tanggal}' AND ja=${ja} AND jb=${jb}) RETURNING *;
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updateIsHadirMhs = async (idStudi, tanggal, ja, jb, isHadir) => {
  try {
    const result = await db.query(`
    UPDATE "daftar_hadir_mahasiswa" SET "isHadir" = ${isHadir} WHERE (id_studi=${idStudi} AND tanggal='${tanggal}' AND ja=${ja} AND jb=${jb}) RETURNING *;
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getByNimJadwalTgl = async (nim, idJadwal, tanggal) => {
  // Author : hafizmfadli
  // param : nim (string), idJadwal (int), tanggal (yyyy-mm-dd : string)
  // return : daftar hadir mhs dgn nim, idJadwal, tanggal ybs

  try {
    const result = await db.query(`
    SELECT mhs.nim, mhs.nama, dhm.* FROM "daftar_hadir_mahasiswa" dhm
    INNER JOIN "Studi" s ON s.id = dhm.id_studi
    INNER JOIN "Perkuliahan" p ON p.id= s.id_perkuliahan
    INNER JOIN "Jadwal" j ON j.id_perkuliahan = p.id AND dhm.ja = j.ja AND dhm.jb = j.jb
    INNER JOIN "Mahasiswa" mhs ON mhs.nim = s.id_mahasiswa
    WHERE dhm.tanggal='${tanggal}' AND mhs.nim='${nim}' AND j.id_jadwal=${idJadwal}
    `)
    const rows = result[0]
    return rows
  } catch (error) {
    return Promise.reject(error)
  }
}

// export const updateKehadiranDanKeterlambatan = async (isHadir, keterlambatan, idStudi, tanggal) => {

//   // Author : hafizmfadli
//   // param: isHadir (boolean), keterlambatan (int), idStudi (int), tanggal (string : 'yyyy-mm-dd')
//   // Output : nilai isHadir dan keterlambatan diperbarui
//   // return : rows yang telah diupdate

//   try {
//     const result = await db.query(`
//     UPDATE "daftar_hadir_mahasiswa" SET "isHadir" = ${isHadir}, keterlambatan = ${keterlambatan} WHERE id_studi=${idStudi} AND tanggal='${tanggal}' RETURNING *
//     `)
//     const rows = result[0]
//     return rows
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }
