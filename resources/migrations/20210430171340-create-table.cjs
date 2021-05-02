'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.createTable('Orders', {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true
    //   },
    //   status: Sequelize.STRING,
    //   invoiceNumber: Sequelize.STRING,
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // })

    // await queryInterface.createTable('Customers', {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    //   },
    //   name: Sequelize.STRING,
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // })
    
    await queryInterface.createTable('mahasiswa', {
      id_mahasiswa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      // kode_kelas (fk)
      nama_mahasiswa: Sequelize.STRING,
      email: Sequelize.STRING,
      nomor_hp: Sequelize.STRING,
      url_foto: Sequelize.STRING,
      status: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }  
    })

    await queryInterface.createTable('kelas', {
      kode_kelas: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: false
      },
      // kode_program_studi (fk)
      tahun: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('jurusan', {
      kode_jurusan: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('program_studi', {
      kode_program_studi: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
          autoIncrement: false
      },
      // kode_jurusan (fk)
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
  }
};
