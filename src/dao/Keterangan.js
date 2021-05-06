import Keterangan from '../models/Keterangan'

export const insertKeterangan = async (status, url) => {

    try {
        const keterangan = await Keterangan.create({
            status,
            url
        })
        return keterangan
    } catch (error) {
        return Promise.reject(error)
    }
}