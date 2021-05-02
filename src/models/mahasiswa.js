export default (sequelize, DataTypes) => {
    const mahasiswa = sequelize.define('mahasiswa', {
        id_mahasiswa: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        kode_kelas: {
            // foreign key
            type: DataTypes.INTEGER,
            references: {
                model: 'kelas',
                key: 'kode_kelas'
            }
        },
        nama_mahasiswa: DataTypes.STRING,
        email: DataTypes.STRING,
        nomor_hp: DataTypes.STRING,
        url_foto: DataTypes.STRING,
        status: DataTypes.STRING
    })

    return mahasiswa
}