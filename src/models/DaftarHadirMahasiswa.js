import Sequelize from 'sequelize'

import db from '../db'

const DaftarHadirMahasiswa = db.define(
  'DaftarHadirMahasiswa',
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
  },
  {
    tableName: 'DaftarHadirMahasiswa'
  }
)

export default DaftarHadirMahasiswa