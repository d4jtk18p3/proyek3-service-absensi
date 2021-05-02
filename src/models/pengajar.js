/* Catatan : relasi ini berperan sebagai junction table 
            untuk menghandle Many to Many antara relasi Perkuliahan dan Dosen
*/

export default (sequelize, DataTypes) => {
    const pengajar = sequelize.define('pengajar', {
        NIP: {
            // foreign key
            type: DataTypes.INTEGER,
            references: {
                model: 'dosen',
                id: 'NIP'
            }
        },
        id_mata_kuliah: {
            // foreign key
            type: DataTypes.STRING,
            references: {
                model: 'perkuliahan',
                key: 'id_mata_kuliah'
            }
        },
        kode_kelas: {
            // foreign key
            type: DataTypes.INTEGER,
            references: {
                model: 'perkuliahan',
                key: 'kode_kelas'
            }
        }       
    })
    
    return pengajar
}