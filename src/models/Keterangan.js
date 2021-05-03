import Sequelize from 'sequelize'

import db from '../db'

const keterangan = db.define('keterangan', {
  id_keterangan: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nim: {
    // foreign key
    type: Sequelize.INTEGER,
    references: {
      model: 'mahasiswa',
      key: 'nim'
    }
  },
  status: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
})

export default keterangan
