'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn('Orders', 'CustomerId', {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: 'Customers',
    //     key: 'id'
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'SET NULL'
    // })
    
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

    // await queryInterface.addColumn('keterangan', 'id_mahasiswa', {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: 'mahasiswa',
    //     key: 'id_mahasiswa'
    //   }
    // })

    await queryInterface.addColumn('program_studi', 'kode_jurusan', {
      type: Sequelize.STRING,
      references: {
        model: 'jurusan',
        key: 'kode_jurusan'
      }
    })

    // await queryInterface.addColumn('mata_kuliah', 'kode_program_studi', {
    //   type: Sequelize.STRING,
    //   references: {
    //     model: 'program_studi',
    //     key: 'kode_program_studi'
    //   }
    // })

    // await queryInterface.addColumn('perkuliahan', 'kode_kelas', {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: 'kelas',
    //     key: 'kode_kelas'        
    //   }
    // })

    // await queryInterface.addColumn('perkuliahan', 'id_mata_kuliah', {
    //   type: Sequelize.STRING,
    //   references: {
    //     model: 'mata_kuliah',
    //     key: 'id_mata_kuliah'        
    //   }
    // })

    // // Pendefinisian composite key
    // await queryInterface.sequelize.query('ALTER TABLE "perkuliahan" ADD CONSTRAINT "id_perkuliahan" PRIMARY KEY ("id_mata_kuliah", "kode_kelas")')


    

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
