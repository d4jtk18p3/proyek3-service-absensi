import Sequelize from 'sequelize'

import db from '../db'

const Perkuliahan = db.define('Perkuliahan', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tahun_akademik: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_mata_kuliah: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Mata_Kuliah',
      key: 'id'
    },
  },
  kode_kelas: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Kelas',
      key: 'kode_kelas'
    }
  },
})

export default Perkuliahan
