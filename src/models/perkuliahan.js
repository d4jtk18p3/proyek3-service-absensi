// Catatan : relasi ini memiliki composite key (id_mata_kuliah + kode_kelas)
// Proses pendefinisian composite key dilakukan pada saat migrasi
// referensi :
// https://gist.github.com/lucasscariot/5b8747fbc8a6948a805c646fae4ceef8
// https://stackoverflow.com/questions/23533184/primary-key-for-multiple-column-in-postgresql

export default (sequelize, DataTypes) => {
  const perkuliahan = sequelize.define('perkuliahan', {
    id_mata_kuliah: {
      // (foreign key)
      type: DataTypes.STRING,
      references: {
        model: 'mata_kuliah'
      }
    },
    kode_kelas: {
      // (foreign key)
      type: DataTypes.INTEGER,
      references: {
        model: 'mata_kuliah'
      }
    },
    tahun_akademik: DataTypes.STRING
  })
  return perkuliahan
}
