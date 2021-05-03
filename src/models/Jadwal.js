import Sequelize from 'sequelize'

import db from '../db'

const Jadwal = db.define(
  'Jadwal',
  {
    id_jadwal: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    waktu_mulai: {
      type: Sequelize.TIME
    },
    waktu_selesai: {
      type: Sequelize.TIME
    },
    batas_terakhir_absen: {
      type: Sequelize.TIME
    }
  },
  {
    tableName: 'Jadwal'
  }
)

export default Jadwal