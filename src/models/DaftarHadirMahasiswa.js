export default (sequelize, DataTypes) => {
  const DaftarHadirMahasiswa = sequelize.define('daftar_hadir_mahasiswa', {
    id_daftar_hadir_mhs: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    // foreign key
    id_studi: {
      type: DataTypes.INTEGER,
      references: {
        model: 'studi',
        key: 'id_studi'
      }
    },
    // foreign key
    id_keterangan: {
      type: DataTypes.INTEGER,
      references: {
        model: 'keterangan',
        key: 'id_keterangan'
      }
    },
    keterlambatan: {
      type: DataTypes.INTEGER
    },
    tanggal: {
      type: DataTypes.DATE
    },
    isHadir: {
      type: DataTypes.BOOLEAN
    }
  })
  return DaftarHadirMahasiswa
}

