import Sequelize from 'sequelize'

import db from '../db'

const TataUsaha = db.define('tata_usaha', {
  id_tata_usaha: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
})

export default TataUsaha
