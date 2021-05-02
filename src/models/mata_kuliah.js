export default (sequelize, DataTypes) => {
  const mataKuliah = sequelize.define('mata_kuliah', {
    id_mata_kuliah: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    kode_program_studi: {
      // foreign key
      type: DataTypes.STRING,
      references: {
        model: 'program_studi',
        key: 'kode_program_studi'
      }
    },
    semester: DataTypes.INTEGER,
    nama_mata_kuliah: DataTypes.STRING,
    sks_teori: DataTypes.INTEGER,
    sks_praktek: DataTypes.INTEGER
  })

  return mataKuliah
}
