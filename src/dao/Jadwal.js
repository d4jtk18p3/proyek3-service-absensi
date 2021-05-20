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

export const getJadwalMhsHariIni = async (nim) => {
  // Input : nim
  // output : jadwal kuliah mahasiswa hari ini
  
  const date = new Date()
  const tgl = 1 
  try {
    const result = await db.query(`
    SELECT j.*, s.id AS id_studi, d.nama_dosen FROM "Mahasiswa" m
    INNER JOIN "Studi" s ON m.nim = s.id_mahasiswa
    INNER JOIN "Perkuliahan" p ON p.id = s.id_perkuliahan
    INNER JOIN "Jadwal" j ON j.id_perkuliahan = p.id
    INNER JOIN "Dosen" d ON d.nip = j.nip
    WHERE j.hari=1 AND m.nim='${nim}';
    `)
    
    let jadwalMap = new Map()
    const jadwals = result[0]
    jadwals.forEach(jadwal => {
      if(jadwalMap.has(jadwal.id_perkuliahan)){
        // perkuliahan sudah tersimpan di map
        // tambahkan dosen yang mengajar
        let prettyJadwalUpdated = jadwalMap.get(jadwal.id_perkuliahan)
        prettyJadwalUpdated.dosens.push({
          nip: jadwal.nip,
          nama: jadwal.nama_dosen
        })
        jadwalMap.set(jadwal.id_perkuliahan, prettyJadwalUpdated)
      }else{
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
          id_studi: jadwal.id_studi
        }
        jadwalMap.set(jadwal.id_perkuliahan, prettyJadwal)
      }
    })

    console.log("MAP JADWAL LLL ", jadwalMap)

    let prettyJadwals = []
    for(let [key, value] of jadwalMap){
      prettyJadwals.push(value)
    }

    return prettyJadwals
  } catch (error) {
    console.log("ERROR NAON ANJIM", error)
    return Promise.reject({ error })
  }
}
