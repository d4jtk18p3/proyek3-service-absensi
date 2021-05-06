import Sequelize from 'sequelize'

import db from '../db'

const DaftarHadirDosen = db.define(
  'daftar_hadir_dosen',
  {
    id_daftar_hadir_dosen: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    tanggal: {
      type: Sequelize.DATE
    },
    isHadir: {
      type: Sequelize.BOOLEAN
    }
  }
)

export default DaftarHadirDosen
