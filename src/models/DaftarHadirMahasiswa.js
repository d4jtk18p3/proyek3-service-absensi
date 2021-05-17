import Sequelize from 'sequelize'

import db from '../db'

const DaftarHadirMahasiswa = db.define(
  'daftar_hadir_mahasiswa',
  {
    id_daftar_hadir_mhs: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    keterlambatan: {
      type: Sequelize.INTEGER
    },
    tanggal: {
      type: Sequelize.DATE
    },
    isHadir: {
      type: Sequelize.BOOLEAN
    },
    id_studi: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Studi',
        key: 'id'
      }
    },
    id_keterangan: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Keterangan',
        key: 'id_keterangan'
      }
    }
  },
  {
    tableName: 'daftar_hadir_mahasiswa'
  }
)

export default DaftarHadirMahasiswa
