import Sequelize from 'sequelize'

import db from '../db'

const bap = db.define('bap', {

  id_BAP: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
  nip: {
    // foreign key
    type: Sequelize.INTEGER,
    references: {
      model: 'dosen',
      key: 'nip'
    }
  },
  id_studi: {
    // foreign key
    type: Sequelize.INTEGER,
    references: {
      model: 'studi',
      key: 'id_studi'
    }
  },
  materi: {
    type: Sequelize.TEXT
  },
  kegiatan: {
    type: Sequelize.TEXT
  },
  minggu: {
    type: Sequelize.INTEGER
  },
  bukti: {
    type: Sequelize.STRING
  },
  jumlah_mhs_hadir: {
    type: Sequelize.INTEGER
  },
  jumlah_mhs_tidak_hadir: {
    type: Sequelize.INTEGER
  },
  tahun_ajaran: {
    type: Sequelize.STRING
  },
  tanggal: {
    type: Sequelize.DATE
  },
  event: {
    type: Sequelize.STRING
  }
})

export default bap
