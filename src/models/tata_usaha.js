export default (sequelize, DataTypes) => {
  const tataUsaha = sequelize.define('dosen', {
    id_tata_usaha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    nama_dosen: DataTypes.STRING,
    jabatan: DataTypes.STRING
  })

  return tataUsaha
}
