import DaftarHadirMahasiswa from '../models/DaftarHadirMahasiswa'

export const insertOne = async (id_studi, id_keterangan, keterlambatan, tanggal, isHadir) => {
    try {
        const result = await DaftarHadirMahasiswa.create({
            // id_studi,
            // id_keterangan,
            keterlambatan,
            tanggal,
            isHadir
        })
        return result
    } catch (error) {
        return Promise.reject(error)
    }
}