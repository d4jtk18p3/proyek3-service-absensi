export default (sequelize, DataTypes) => {
  const jadwal = sequelize.define('jadwal', {
    id_jadwal: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    ja: {
      type: DataTypes.INTEGER
    },
    jb: {
      type: DataTypes.INTEGER
    },
    waktu_mulai: {
      type: DataTypes.TIME
    },
    waktu_selesai: {
      type: DataTypes.TIME
    },
    batas_terakhir_absen: {
      type: DataTypes.TIME
    },
    hari: {
      type: DataTypes.INTEGER
    },
    jenis: {
      type: DataTypes.STRING
    },
    NIP: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dosen',
        key: 'NIP'
      }
    },
    id_perkuliahan: {
      type: DataTypes.INTEGER,
      references: {
        model: 'perkuliahan',
        key: 'id_perkuliahan'
      }
    }
  }, {
    tableName: 'jadwal'
  })
  return jadwal
}
