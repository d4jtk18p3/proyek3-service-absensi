import Sequelize from 'sequelize'

import db from '../db'

const DaftarHadirDosen = db.define(
  'DaftarHadirDosen',
  {
    id_daftar_hadir_dosen: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    tanggal: {
      type: Sequelize.DATE
    },
    isHadir: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    tableName: 'DaftarHadirDosen'
  }
)

export default DaftarHadirDosen