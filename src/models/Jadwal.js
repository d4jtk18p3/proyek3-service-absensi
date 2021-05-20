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
    ja: {
      type: Sequelize.INTEGER
    },
    jb: {
      type: Sequelize.INTEGER
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
    },
    id_perkuliahan: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Perkuliahan',
        key: 'id'
      },
    },
    nip: {
      type: Sequelize.STRING(30),
      allowNull: true,
      references: {
        model: 'Dosen',
        key: 'nip'
      }
    }
  },
  {
    tableName: 'Jadwal'
  }
)

export default Jadwal
