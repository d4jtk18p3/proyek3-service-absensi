import Sequelize from 'sequelize'
import sequelize from '../db'
import mahasiswa from './mahasiswa'
import kelas from './kelas'
import studi from './studi'
import keterangan from './keterangan'
import jurusan from './jurusan'
import programStudi from './program_studi'
import mataKuliah from './mata_kuliah'
import perkuliahan from './perkuliahan'
import dosen from './dosen'
import pengajar from './pengajar'

const model = {}

// model.Customer = Customer(sequelize, Sequelize.DataTypes)

model.mahasiswa = mahasiswa(sequelize, Sequelize.DataTypes)
model.kelas = kelas(sequelize, Sequelize.DataTypes)
model.studi = studi(sequelize, Sequelize.DataTypes)
model.keterangan = keterangan(sequelize, Sequelize.DataTypes)
model.jurusan = jurusan(sequelize, Sequelize.DataTypes)
model.programStudi = programStudi(sequelize, Sequelize.DataTypes)
model.mata_kuliah = mataKuliah(sequelize, Sequelize.DataTypes)
model.perkuliahan = perkuliahan(sequelize, Sequelize.DataTypes)
model.dosen = dosen(sequelize, Sequelize.DataTypes)
model.pengajar = pengajar(sequelize, Sequelize.DataTypes)

// Associations

// jurusan - prodi
model.jurusan.hasMany(model.programStudi)
model.programStudi.belongsTo(model.jurusan)

// prodi - kelas
model.programStudi.hasMany(model.kelas)
model.kelas.belongsTo(model.programStudi)

// Mahasiswa - kelas
model.kelas.hasMany(model.mahasiswa)
model.mahasiswa.belongsTo(model.kelas)

export default model
