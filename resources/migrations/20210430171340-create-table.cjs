'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    
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

    await queryInterface.createTable('keterangan', {
      id_keterangan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // id_mahasiswa (fk)
      status: Sequelize.STRING,
      url: Sequelize.STRING,
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

    await queryInterface.createTable('mata_kuliah', {
      id_mata_kuliah: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      // kode_program_studi (fk) 
      semester: Sequelize.INTEGER,
      nama_mata_kuliah: Sequelize.STRING,
      sks_teori: Sequelize.INTEGER,
      sks_praktek: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('dosen', {
      NIP: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      nama_dosen: Sequelize.STRING,
      jabatan: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  
    })

    await queryInterface.createTable('tata_usaha', {
      id_tata_usaha: {
        type: Sequelize.INTEGER,
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

    await queryInterface.createTable('jadwal', {
      id_jadwal: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      // id_dosen (fk)
      ja: {
        type: Sequelize.INTEGER
      },
      jb: {
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }  
    })

    await queryInterface.createTable('perkuliahan', {
      id_perkuliahan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // id_mata_kuliah (fk)
      // kode_kelas (fk)
      tahun_akademik: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('studi', {
      id_studi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      // id_mahasiswa (fk)
      // id_mata_kuliah (fk)
      // kode_kelas (fk)
    })
    
    await queryInterface.createTable('daftar_hadir_mahasiswa', {
      id_daftar_hadir_mhs: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('daftar_hadir_dosen', {
      id_daftar_hadir_dosen: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      // id_studi (fk)
      // NIP (fk)
      tanggal: {
        type: Sequelize.DATE
      },
      isHadir: {
        type: Sequelize.BOOLEAN
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


    // Untuk tabel pengajar dibuat diakhir, karena semua attributenya hasil turunan tabel lain

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // drop yang ngereferences ke table lain dahulu
    await queryInterface.dropTable('daftar_hadir_dosen')
    await queryInterface.dropTable('daftar_hadir_mahasiswa')
    await queryInterface.dropTable('studi')
    await queryInterface.dropTable('jadwal')
    await queryInterface.dropTable('perkuliahan')
    await queryInterface.dropTable('mata_kuliah')
    await queryInterface.dropTable('keterangan')
    await queryInterface.dropTable('mahasiswa')
    await queryInterface.dropTable('kelas')
    await queryInterface.dropTable('program_studi')
    await queryInterface.dropTable('jurusan')
    
    await queryInterface.dropTable('tata_usaha')
    await queryInterface.dropTable('dosen')    
    
    
    
    
    
    
    
    
    
    
        
  }
};
