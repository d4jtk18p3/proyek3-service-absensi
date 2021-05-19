import * as KeteranganDAO from '../dao/Keterangan'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'
import * as StudiDAO from '../dao/Studi'

export const ajukanIzin = async (idStudies, status, url) => {
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
    const nim = (await StudiDAO.findStudiByIdStudi(idStudies[0])).dataValues.id_mahasiswa
    console.log("NIM : ", nim)
    const keterangan = await KeteranganDAO.insertKeterangan(nim, status, url)
    const date = new Date()
    const results = await Promise.all(
      idStudies.map(async (idStudi) =>
        await DaftarHadirMahasiswaDAO.insertOne(idStudi, keterangan.id_keterangan, -1, `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, false)
      )
    )
    return results
  } catch (error) {
    return Promise.reject(error)
  }
}
