export default (sequelize, DataTypes) => {
  const programStudi = sequelize.define('program_studi', {
    kode_program_studi: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    kode_jurusan: {
      type: DataTypes.STRING,
      references: {
        model: 'jurusan',
        key: 'kode_jurusan'
      }
    }
  })
  return programStudi
}
