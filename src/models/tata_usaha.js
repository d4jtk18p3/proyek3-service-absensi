export default (sequelize, DataTypes) => {
  const tataUsaha = sequelize.define('tata_usaha', {
    id_tata_usaha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    }
  })

  return tataUsaha
}
