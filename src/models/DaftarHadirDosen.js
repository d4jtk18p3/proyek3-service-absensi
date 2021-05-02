export default (sequelize, DataTypes) => {
  const DaftarHadirDosen = sequelize.define('daftar_hadir_dosen', {
    id_daftar_hadir_dosen: {
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
    NIP: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dosen',
        key: 'NIP'
      }
    },
    tanggal: {
      type: DataTypes.DATE
    },
    isHadir: {
      type: DataTypes.BOOLEAN
    }
  })
  return DaftarHadirDosen
}
