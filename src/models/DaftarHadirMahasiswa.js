import Sequelize from 'sequelize'

import db from '../db'

const DaftarHadirMahasiswa = db.define(
  'daftar_hadir_mahasiswa',
  {
    id_daftar_hadir_mhs: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    keterlambatan: {
      type: Sequelize.INTEGER
    },
    tanggal: {
      type: Sequelize.DATE
    },
    isHadir: {
      type: Sequelize.BOOLEAN
    }
  }
)

export default DaftarHadirMahasiswa
