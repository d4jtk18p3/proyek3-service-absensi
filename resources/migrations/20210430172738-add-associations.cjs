'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
    
    await queryInterface.addColumn('mahasiswa', 'kode_kelas', {
      type: Sequelize.INTEGER,
      references: {
          model: 'kelas',
          key: 'kode_kelas'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })

    await queryInterface.addColumn('kelas', 'kode_program_studi', {
      type: Sequelize.STRING,
      references: {
          model: 'program_studi',
          key: 'kode_program_studi'
      }
    })

    await queryInterface.addColumn('keterangan', 'id_mahasiswa', {
      type: Sequelize.INTEGER,
      references: {
        model: 'mahasiswa',
        key: 'id_mahasiswa'
      }
    })

    await queryInterface.addColumn('program_studi', 'kode_jurusan', {
      type: Sequelize.STRING,
      references: {
        model: 'jurusan',
        key: 'kode_jurusan'
      }
    })

    await queryInterface.addColumn('mata_kuliah', 'kode_program_studi', {
      type: Sequelize.STRING,
      references: {
        model: 'program_studi',
        key: 'kode_program_studi'
      }
    })

    await queryInterface.addColumn('perkuliahan', 'kode_kelas', {
      type: Sequelize.INTEGER,
      references: {
        model: 'kelas',
        key: 'kode_kelas'        
      }
    })

    await queryInterface.addColumn('perkuliahan', 'id_mata_kuliah', {
      type: Sequelize.STRING,
      references: {
        model: 'mata_kuliah',
        key: 'id_mata_kuliah'        
      }
    })


    // Pendefinisian composite key
    await queryInterface.sequelize.query('ALTER TABLE "perkuliahan" ADD CONSTRAINT "id_perkuliahan" UNIQUE ("id_mata_kuliah", "kode_kelas")')

    await queryInterface.addColumn('studi', 'id_mahasiswa', {
      type: Sequelize.INTEGER,
      references: {
        model: 'mahasiswa',
        key: 'id_mahasiswa'
      }
    })

    await queryInterface.addColumn('studi', 'id_perkuliahan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'perkuliahan',
        key: 'id_perkuliahan'
      }
    })

    // await queryInterface.addColumn('studi', 'kode_kelas', {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: 'perkuliahan',
    //     key: 'kode_kelas'
    //   }
    // })

    await queryInterface.addColumn('daftar_hadir_dosen', 'id_studi', {
      type: Sequelize.INTEGER,
      references: {
        model: 'studi',
        key: 'id_studi'
      }
    })

    await queryInterface.addColumn('daftar_hadir_dosen', 'NIP', {
      type: Sequelize.INTEGER,
      references: {
        model: 'dosen',
        key: 'NIP'
      }
    })

    await queryInterface.addColumn('daftar_hadir_mahasiswa', 'id_studi', {
      type: Sequelize.INTEGER,
      references: {
        model: 'studi',
        key: 'id_studi'
      }
    })

    await queryInterface.addColumn('daftar_hadir_mahasiswa', 'id_keterangan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'keterangan',
        key: 'id_keterangan'
      }
    })

    await queryInterface.addColumn('jadwal', 'NIP', {
      type: Sequelize.INTEGER,
      references: {
        model: 'dosen',
        key: 'NIP'
      }
    })

    await queryInterface.addColumn('jadwal', 'id_perkuliahan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'perkuliahan',
        key: 'id_perkuliahan'
      }
    })
    

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('mahasiswa', 'kode_kelas')
    await queryInterface.removeColumn('kelas', 'kode_program_studi')
    await queryInterface.removeColumn('keterangan', 'id_mahasiswa')
    await queryInterface.removeColumn('program_studi', 'kode_jurusan')
    await queryInterface.removeColumn('mata_kuliah', 'kode_program_studi')
    await queryInterface.removeColumn('perkuliahan', 'kode_kelas')
    await queryInterface.removeColumn('perkuliahan', 'id_mata_kuliah')
  }
};
