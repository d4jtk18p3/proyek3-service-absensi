import Sequelize from 'sequelize'

import db from '../db'

const Jadwal = db.define(
  'Jadwal',
  {
    id_jadwal: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    waktu_mulai: {
      type: Sequelize.TIME
    },
    waktu_selesai: {
      type: Sequelize.TIME
    },
    batas_terakhir_absen: {
      type: Sequelize.TIME
    },
    hari: {
      type: Sequelize.INTEGER
    },
    jenis: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: 'Jadwal'
  }
)

export default Jadwal
