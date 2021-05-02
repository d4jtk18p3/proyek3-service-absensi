export default (sequelize, DataTypes) => {
  const jurusan = sequelize.define('jurusan', {
    kode_jurusan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    }
  })
  return jurusan
}
