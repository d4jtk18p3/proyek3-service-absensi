'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Keterangan', {
      id_keterangan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      // nim (foreign key)
      status: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('daftar_hadir_mahasiswa', {
      id_daftar_hadir_mhs: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      // id_studi (fk)
      // id_keterangan (fk)
      keterlambatan: {
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      isHadir: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    }
    )

    await queryInterface.createTable('daftar_hadir_dosen', {
      id_daftar_hadir_dosen: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      tanggal: {
        type: Sequelize.DATE
      },
      isHadir: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    }
    )

    await queryInterface.createTable('Jadwal', {
      id_jadwal: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      ja:{
        type: Sequelize.INTEGER
      },
      jb:{
        type: Sequelize.INTEGER
      },
      waktu_mulai: {
        type: Sequelize.TIME
      },
      waktu_selesai: {
        type: Sequelize.TIME
      },
      batas_terakhir_absen: {
        type: Sequelize.TIME
      },
      hari: {
        type: Sequelize.INTEGER
      },
      jenis: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Keterangan')
    await queryInterface.dropTable('daftar_hadir_mahasiswa')
    await queryInterface.dropTable('daftar_hadir_dosen')
    await queryInterface.dropTable('Jadwal')
  }
};
