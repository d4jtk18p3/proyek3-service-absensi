'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Keterangan', 'nim', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Mahasiswa',
        key: 'nim'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })

    await queryInterface.addColumn('daftar_hadir_mahasiswa', 'id_studi', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Studi',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })

    await queryInterface.addColumn('daftar_hadir_mahasiswa', 'id_keterangan', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Keterangan',
        key: 'id_keterangan'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Keterangan', 'nim')
    await queryInterface.removeColumn('daftar_hadir_mahasiswa', 'id_studi')
    await queryInterface.removeColumn('daftar_hadir_mahasiswa', 'id_keterangan')
  }
};
