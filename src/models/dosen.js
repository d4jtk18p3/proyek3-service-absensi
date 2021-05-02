export default (sequelize, DataTypes) => {
  const dosen = sequelize.define('dosen', {
    NIP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    nama_dosen: DataTypes.STRING,
    jabatan: DataTypes.STRING
  })
  return dosen
}
