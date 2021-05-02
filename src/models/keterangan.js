export default (sequelize, DataTypes) => {
    const keterangan = sequelize.define('keterangan', {
        id_keterangan: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_mahasiswa: {
            // foreign key
            type: DataTypes.INTEGER,
            references: {
                model: 'mahasiswa',
                id: 'id_mahasiswa'
            }
        },
        status: DataTypes.STRING,
        url: DataTypes.STRING
    })

    return keterangan
}