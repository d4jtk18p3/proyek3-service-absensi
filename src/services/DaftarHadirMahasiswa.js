import * as DaftarHadirMahasiswaDAO from '../dao/DaftarHadirMahasiswa'

export const getDaftarHadirKelasJadwal = async (kodeKelas, idJadwal, tanggal) => {

  try {
   const result = await DaftarHadirMahasiswaDAO.getDaftarHadirKelasJadwal(kodeKelas, idJadwal, tanggal)
   return result 
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getDaftarHadirNimJadwalTanggal = async (nim, idJadwal, tanggal) => {
  try {
    const result = await DaftarHadirMahasiswaDAO.getByNimJadwalTgl(nim, idJadwal, tanggal)
    return result
  } catch (error) {
    return Promise.reject(error)    
  }
}