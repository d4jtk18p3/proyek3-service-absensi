import Keterangan from '../models/Keterangan'

export const insertKeterangan = async (nim, status, url, isAccepted) => {
  try {
    const keterangan = await Keterangan.create({
      nim,
      status,
      url,
      isAccepted
    })
    return keterangan
  } catch (error) {
    return Promise.reject(error)
  }
}
