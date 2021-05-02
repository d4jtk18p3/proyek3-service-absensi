/* Catatan : relasi ini berperan sebagai junction table
            untuk menghandle Many to Many antara relasi Perkuliahan dan Mahasiswa
*/

export default (sequelize, DataTypes) => {
  const studi = sequelize.define('studi', {
    id_studi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_mahasiswa: {
      // foreign key
      type: DataTypes.INTEGER,
      references: {
        model: 'mahasiswa',
        key: 'id_mahasiswa'
      }
    },
    id_mata_kuliah: {
      // foreign key
      type: DataTypes.STRING,
      references: {
        model: 'perkuliahan',
        key: 'id_mata_kuliah'
      }
    },
    kode_kelas: {
      // foreign key
      type: DataTypes.INTEGER,
      references: {
        model: 'mahasiswa',
        key: 'kode_kelas'
      }
    }
  })

  return studi
}
