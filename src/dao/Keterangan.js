import Keterangan from '../models/Keterangan'

export const insertKeterangan = async (nim, status, url) => {
  try {
    const keterangan = await Keterangan.create({
      nim,
      status,
      url
    })
    return keterangan
  } catch (error) {
    return Promise.reject(error)
  }
}
