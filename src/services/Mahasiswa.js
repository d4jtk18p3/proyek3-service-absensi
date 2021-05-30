/*
  Catatan :  File ini berisi seluruh bussiness logic yang dapat dilakukan oleh mahasiswa
*/
import * as JadwalDAO from '../dao/Jadwal'
import * as KeteranganDAO from '../dao/Keterangan'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'
import * as StudiDAO from '../dao/Studi'


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
    const tglHariIni = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
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
    console.log("JADDWAL YANG MAU IJIN ", idJadwals)
    const d = new Date()
    const tglHariIni = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    const jadwals = await JadwalDAO.getJadwalMhsHrTertentu(nim, d.getDay())
    const keterangan = await KeteranganDAO.insertKeterangan(nim, status, url)
    console.log("JADWAL AYEUNANE ANJENG", jadwals)
    console.log("KETERANGAN AING ", keterangan)
    // OK !

    let results = []
    await Promise.all( jadwals.map(async (jadwal) => {
      console.log("ITERASI JADWAL BGST ", jadwal)
      if(idJadwals.includes(`${jadwal.id_jadwal}`)){
        console.log("masuk pa eko")
        const result = await DaftarHadirMahasiswaDAO.updateStatusKehadiranMhs(jadwal.id_studi, 0, tglHariIni, false, jadwal.ja, jadwal.jb, keterangan.dataValues.id_keterangan)        
        results.push(result[0])
      }
    })
    )
    
    
    // const results = await Promise.all(
    //   idStudies.map(async (idStudi) =>
    //     // await DaftarHadirMahasiswaDAO.insertOne(idStudi, keterangan.id_keterangan, -1, `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, false)
    //       // ubah isHadir menjadi false dan kasih id keterangan untuk seluruh matkul yang diajukan izin
    //       jadwals.forEach(async (jadwal) => {
    //         if(jadwal.id_studi === idStudi){
    //           await DaftarHadirMahasiswaDAO.updateStatusKehadiranMhs(idStudi, 0, tglHariIni, false, jadwal.ja, jadwal.jb, keterangan.id_keterangan)
    //         }
    //       })
    //     )
    // )
    // const results = await Promise.all(idJadwals.map(async (idJadwal) => {
    //     const jadwal = (await JadwalDAO.findJadwalById(idJadwal))[0]
    //     console.log("DETAIL SUATU JADWAL", jadwal)
    //     await DaftarHadirMahasiswaDAO.updateStatusKehadiranMhs(jadwal.id_studi, 0, tglHariIni, false, jadwal.ja, jadwal.jb, keterangan.id_keterangan)
    //   })
    // )
    console.log("RESULT BARU", results)
    return results
  } catch (error) {
    return Promise.reject(error)
  }
}
