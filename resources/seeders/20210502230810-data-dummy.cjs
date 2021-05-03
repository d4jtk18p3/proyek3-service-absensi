'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('jurusan', [
     {
     kode_jurusan: 'jtkpolban',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    kode_jurusan: 'anpolban',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  
  ])

  //  const jurusan = await queryInterface.sequelize.query(`SELECT kode_jurusan FROM jurusan;`)
  //  const jurusanRows = jurusan[0]
   

   await queryInterface.bulkInsert('program_studi', [{
     kode_program_studi: 'D3TI',
     kode_jurusan: 'jtkpolban',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
     kode_program_studi: 'D4T1',
     kode_jurusan: 'jtkpolban',
     createdAt: new Date(),
     updatedAt: new Date()
   }])

   await queryInterface.bulkInsert('mata_kuliah', [
    {
     id_mata_kuliah: 'ddpd3ID',
     kode_program_studi: 'D3TI',
     semester: 1,
     nama_mata_kuliah: 'Dasar Dasar Pemrograman',
     sks_teori: 2,
     sks_praktek: 2,
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      id_mata_kuliah: 'ddpd4ID',
      kode_program_studi: 'D4T1',
      semester: 1,
      nama_mata_kuliah: 'Dasar Dasar Pemrograman',
      sks_teori: 2,
      sks_praktek: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      id_mata_kuliah: 'swtd4ID',
      kode_program_studi: 'D4T1',
      semester: 1,
      nama_mata_kuliah: 'Software Testing',
      sks_teori: 2,
      sks_praktek: 2,
      createdAt: new Date(),
      updatedAt: new Date()
     }
  ])

  await queryInterface.bulkInsert('kelas', [
    {
      kode_kelas: 111,
      kode_program_studi: 'D3TI',
      tahun: '2018',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      kode_kelas: 222,
      kode_program_studi: 'D3TI',
      tahun: '2018',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      kode_kelas: 333,
      kode_program_studi: 'D4T1',
      tahun: '2018',
      createdAt: new Date(),
     updatedAt: new Date()
    }
  ])

  await queryInterface.bulkInsert('perkuliahan', [
    {
      id_perkuliahan: 1,
      id_mata_kuliah: 'ddpd3ID',
      kode_kelas: 111,
      tahun_akademik: '2018',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      id_perkuliahan: 2,
      id_mata_kuliah: 'ddpd3ID',
      kode_kelas: 222,
      tahun_akademik: '2018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_perkuliahan: 3,
      id_mata_kuliah: 'swtd4ID',
      kode_kelas: 333,
      tahun_akademik: '2018',
      createdAt: new Date(),
     updatedAt: new Date()
    }
  ])

  await queryInterface.bulkInsert('dosen', [
    {
      NIP: 1234567,
      nama_dosen: 'Bu Ani',
      jabatan: 'Dosen',
      createdAt: new Date(),
     updatedAt: new Date()
    }
  ])

  await queryInterface.bulkInsert('jadwal', [
    {
      NIP: 1234567,
      id_perkuliahan: 1,
      ja: 1,
      jb: 2,
      waktu_mulai: '07:00',
      waktu_selesai: '08:30',
      batas_terakhir_absen: '07:15',
      hari: 1,
      jenis: 'Teori',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      NIP: 1234567,
      id_perkuliahan: 1,
      ja: 3,
      jb: 4,
      waktu_mulai: '08:30',
      waktu_selesai: '09:00',
      batas_terakhir_absen: '08:45',
      hari: 1,
      jenis: 'Praktek',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      NIP: 1234567,
      id_perkuliahan: 3,
      ja: 5,
      jb: 6,
      waktu_mulai: '09:00',
      waktu_selesai: '10:30',
      batas_terakhir_absen: '09:30',
      hari: 1,
      jenis: 'Praktek',
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      NIP: 1234567,
      id_perkuliahan: 3,
      ja: 5,
      jb: 6,
      waktu_mulai: '09:00',
      waktu_selesai: '10:30',
      batas_terakhir_absen: '09:30',
      hari: 2,
      jenis: 'Praktek',
      createdAt: new Date(),
     updatedAt: new Date()
    }
  ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('jadwal', null, {}); 
    await queryInterface.bulkDelete('perkuliahan', null, {});
     await queryInterface.bulkDelete('mata_kuliah', null, {});
     await queryInterface.bulkDelete('kelas', null, {});
    await queryInterface.bulkDelete('program_studi', null, {}); 
    await queryInterface.bulkDelete('jurusan', null, {});
    await queryInterface.bulkDelete('dosen', null, {});
  }
};
