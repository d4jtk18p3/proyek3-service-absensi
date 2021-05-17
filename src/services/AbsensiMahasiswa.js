import * as KeteranganDAO from '../dao/Keterangan'
import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'

export const ajukanIzin = async (idStudies, status, url) => {
  // ide :
  // insert keterangan terlebih dahulu (karena kita butuh id nya)
  // id_keterangan dan id studi akan menjadi FK pada tabel daftar_hadir_mhs

  try {
    const nim = idStudies[0].id_mahasiswa
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
