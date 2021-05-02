export default (sequelize, DataTypes) => {
  const kelas = sequelize.define('kelas', {
    kode_kelas: {
      type: DataTypes.INTEGER,
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
    tahun: DataTypes.STRING
  })
  return kelas
}
