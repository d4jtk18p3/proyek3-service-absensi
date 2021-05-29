import Jadwal from '../models/Jadwal'
import db from '../db'

export const findJadwalByHariAndNIP = async (hari, NIP) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari: hari,
        nip: NIP
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findJadwalByHari = async (hari) => {
  try {
    const jadwal = await Jadwal.findAll({
      where: {
        hari: hari
      }
    })
    return jadwal
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getJadwalMhsHrTertentu = async (nim, hari) => {
  // Input : nim
  // output : jadwal kuliah mahasiswa hari tertentu

  try {
    const result = await db.query(`
    SELECT j.*, s.id AS id_studi, d.nama_dosen, k.nama_mata_kuliah FROM "Mahasiswa" m
    INNER JOIN "Studi" s ON m.nim = s.id_mahasiswa
    INNER JOIN "Perkuliahan" p ON p.id = s.id_perkuliahan
    INNER JOIN "Jadwal" j ON j.id_perkuliahan = p.id
    INNER JOIN "Dosen" d ON d.nip = j.nip
    INNER JOIN "Mata_Kuliah" k ON k.id = p.id_mata_kuliah
    WHERE j.hari=${hari} AND m.nim='${nim}';
    `)

    const jadwalMap = new Map()
    const jadwals = result[0]
    jadwals.forEach(jadwal => {
      if (jadwalMap.has(jadwal.id_perkuliahan)) {
        // perkuliahan sudah tersimpan di map
        // tambahkan dosen yang mengajar
        const prettyJadwalUpdated = jadwalMap.get(jadwal.id_perkuliahan)
        prettyJadwalUpdated.dosens.push({
          nip: jadwal.nip,
          nama: jadwal.nama_dosen
        })
        jadwalMap.set(jadwal.id_perkuliahan, prettyJadwalUpdated)
      } else {
        // perkuliahan belum tersimpan di map
        const prettyJadwal = {
          id_jadwal: jadwal.id_jadwal,
          ja: jadwal.ja,
          jb: jadwal.jb,
          waktu_mulai: jadwal.waktu_mulai,
          waktu_selesai: jadwal.waktu_selesai,
          batas_terakhir_absen: jadwal.batas_terakhir_absen,
          hari: jadwal.hari,
          jenis: jadwal.jenis,
          dosens: [
            {
              nip: jadwal.nip,
              nama: jadwal.nama_dosen
            }
          ],
          id_perkuliahan: jadwal.id_perkuliahan,
          id_studi: jadwal.id_studi,
          nama_mata_kuliah: jadwal.nama_mata_kuliah
        }
        jadwalMap.set(jadwal.id_perkuliahan, prettyJadwal)
      }
    })

    const prettyJadwals = []
    for (const value of jadwalMap.values()) {
      prettyJadwals.push(value)
    }

    return prettyJadwals
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getJadwalDosenHrTertentu = async (nip, hari) => {
  // Input : nip
  // output : jadwal kuliah mahasiswa hari tertentu

  try {
    const result = await db.query(`
    SELECT j.*, s.id AS id_studi, k.id AS id_mata_kuliah, k.nama_mata_kuliah, c.* FROM "Jadwal" j
    INNER JOIN "Studi" s ON s.id_perkuliahan = j.id_perkuliahan
    INNER JOIN "Perkuliahan" p ON p.id = j.id_perkuliahan
    INNER JOIN "Mata_Kuliah" k ON k.id = p.id_mata_kuliah
    INNER JOIN "Kelas" c ON c.kode_kelas = p.kode_kelas
    WHERE j.hari=${hari} AND j.nip='${nip}';
    `)

    const jadwalMap = new Map()
    const jadwals = result[0]
    jadwals.forEach(jadwal => {
      if (jadwalMap.has(jadwal.id_perkuliahan)) {
        // perkuliahan sudah tersimpan di map
        // tambahkan dosen yang mengajar
        const prettyJadwalUpdated = jadwalMap.get(jadwal.id_perkuliahan)
        jadwalMap.set(jadwal.id_perkuliahan, prettyJadwalUpdated)
      } else {
        // perkuliahan belum tersimpan di map
        const prettyJadwal = {
          id_jadwal: jadwal.id_jadwal,
          ja: jadwal.ja,
          jb: jadwal.jb,
          waktu_mulai: jadwal.waktu_mulai,
          waktu_selesai: jadwal.waktu_selesai,
          batas_terakhir_absen: jadwal.batas_terakhir_absen,
          hari: jadwal.hari,
          jenis: jadwal.jenis,
          id_perkuliahan: jadwal.id_perkuliahan,
          id_studi: jadwal.id_studi,
          kelas: {
            kode_kelas: jadwal.kode_kelas,
            tahun: jadwal.tahun,
            kode_program_studi: jadwal.kode_program_studi
          },
          mata_kuliah: {
            id_mata_kuliah: jadwal.id_mata_kuliah,
            nama_mata_kuliah: jadwal.nama_mata_kuliah
          }
        }
        jadwalMap.set(jadwal.id_perkuliahan, prettyJadwal)
      }
    })

    const prettyJadwals = []
    for (const value of jadwalMap.values()) {
      prettyJadwals.push(value)
    }

    return prettyJadwals
  } catch (error) {
    return Promise.reject(error)
  }
}
