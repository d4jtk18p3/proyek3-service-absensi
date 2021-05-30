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
    
    // Jabatan
    await queryInterface.bulkInsert('Jabatan', [
      {
        id: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // Dosen
    await queryInterface.bulkInsert('Dosen', [
      {
        nip: '11111',
        nama_dosen: 'Komeng',
        id_jabatan: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nip: '11112',
        nama_dosen: 'Adul',
        id_jabatan: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nip: '11113',
        nama_dosen: 'Om fullstack',
        id_jabatan: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nip: '11114',
        nama_dosen: 'Parto',
        id_jabatan: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        nip: '11115',
        nama_dosen: 'Sule',
        id_jabatan: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ])

    // Jurusan
    await queryInterface.bulkInsert('Jurusan', [
      {
        kode_jurusan: 'jurusan01',
        nip: '11111',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // Program studi
    await queryInterface.bulkInsert('Program_Studi', [
      {
        kode_program_studi: 'prodi01',
        nip: '11112',
        kode_jurusan: 'jurusan01',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // mata kuliah
    await queryInterface.bulkInsert('Mata_Kuliah', [
      {
        id: 1,
        semester: 6,
        nama_mata_kuliah: 'Proyek3',
        kode_program_studi: 'prodi01',
        sks_teori: 2,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        semester: 6,
        nama_mata_kuliah: 'Sistem Terdistribusi',
        kode_program_studi: 'prodi01',
        sks_teori: 1,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        semester: 6,
        nama_mata_kuliah: 'Software Testing',
        kode_program_studi: 'prodi01',
        sks_teori: 2,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        semester: 6,
        nama_mata_kuliah: 'Pengantar Akuntansi',
        kode_program_studi: 'prodi01',
        sks_teori: 2,
        sks_praktek: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        semester: 6,
        nama_mata_kuliah: 'Metodologi Penelitian',
        kode_program_studi: 'prodi01',
        sks_teori: 1,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        semester: 1,
        nama_mata_kuliah: 'DDP',
        kode_program_studi: 'prodi01',
        sks_teori: 2,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        semester: 2,
        nama_mata_kuliah: 'SDA',
        kode_program_studi: 'prodi01',
        sks_teori: 2,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        semester: 3,
        nama_mata_kuliah: 'Sistem Basis Data',
        kode_program_studi: 'prodi01',
        sks_teori: 1,
        sks_praktek: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // Kelas
    await queryInterface.bulkInsert('Kelas', [
      {
        // ceritanya kelas kita (3A 2018)
        kode_kelas: 123,
        tahun: 2018,
        kode_program_studi: 'prodi01',
        nip: '11113',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // ceritanya kelas adik tingkat (2019)
        kode_kelas: 124,
        tahun: 2019,
        kode_program_studi: 'prodi01',
        nip: '11114',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // Perkuliahan
    await queryInterface.bulkInsert('Perkuliahan', [
      {
        // kelas 123 ada matkul proyek3
        id: 1,
        tahun_akademik: 2021,
        id_mata_kuliah: 1,
        kode_kelas: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // kelas 123 ada matkul sistem terdistribusi
        id: 2,
        tahun_akademik: 2021,
        id_mata_kuliah: 2,
        kode_kelas: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // kelas 123 ada matkul software testing
        id: 3,
        tahun_akademik: 2021,
        id_mata_kuliah: 3,
        kode_kelas: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // kelas 123 ada matkul pengantar akuntansi
        id: 4,
        tahun_akademik: 2021,
        id_mata_kuliah: 4,
        kode_kelas: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // kelas 123 ada matkul metodologi penenlitian
        id: 5,
        tahun_akademik: 2021,
        id_mata_kuliah: 5,
        kode_kelas: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // kelas 124 ada matkul SDA
        id: 6,
        tahun_akademik: 2021,
        id_mata_kuliah: 7,
        kode_kelas: 124,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ])
    
    // Mahasiswa
    await queryInterface.bulkInsert('Mahasiswa', [
      {
        // ceritanya mahasiswa tingkat 3
        nim: '181524010',
        nama: 'Hafiz',
        kode_kelas: 123,
        email: 'hafiz@gmail.com',
        nomor_ponsel: '081209876788',
        url_foto: 'public/folder/mhs1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // ceritanya mahasiswa tingkat 2
        nim: '181524013',
        nama: 'Itachi',
        kode_kelas: 124,
        email: 'itachi@gmail.com',
        nomor_ponsel: '081129276788',
        url_foto: 'public/folder/mhs4.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

    // studi
    await queryInterface.bulkInsert('Studi', [
      {
        // Mahasiswa 181524010
        // dari kelas 123
        // ambil matkul proyek3
        id: 1,
        id_perkuliahan: 1,
        id_mahasiswa: 181524010,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        // Mahasiswa 181524010
        // dari kelas 123
        // ambil matkul sistem terdistribusi
        id: 2,
        id_perkuliahan: 2,
        id_mahasiswa: 181524010,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        // Mahasiswa 181524010
        // dari kelas 123
        // ambil matkul software testing
        id: 3,
        id_perkuliahan: 3,
        id_mahasiswa: 181524010,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        // Mahasiswa 181524010
        // dari kelas 123
        // ambil matkul pengantar akuntansi
        id: 4,
        id_perkuliahan: 4,
        id_mahasiswa: 181524010,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        // Mahasiswa 181524010
        // dari kelas 123
        // ambil matkul metodologi penelitian
        id: 5,
        id_perkuliahan: 5,
        id_mahasiswa: 181524010,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        // Mahasiswa 181524013
        // dari kelas 124
        // ambil matkul SDA
        id: 6,
        id_perkuliahan: 6,
        id_mahasiswa: 181524013,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ])

    // Jadwal
    await queryInterface.bulkInsert('Jadwal', [
      {
        // hari senin (1)
        // ada matkul proyek3 (Teori)
        // dosennya adul (11112)
        // di kelas 123
        nip: '11112',
        id_perkuliahan: 1,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:00',
        batas_terakhir_absen: '07:15',
        hari: 1,
        jenis: 'Teori',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari senin (1)
        // ada matkul Sistem Terdistribusi (Teori)
        // dosennya adul (11112)
        // di kelas 123
        nip: 11112,
        id_perkuliahan: 2,
        ja: 3,
        jb: 4,
        waktu_mulai: '08:00',
        waktu_selesai: '09:00',
        batas_terakhir_absen: '08:15',
        hari: 1,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari senin (1)
        // ada matkul sw testing (Teori)
        // dosennya adul (11112)
        // di kelas 123
        nip: '11112',
        id_perkuliahan: 3,
        ja: 5,
        jb: 6,
        waktu_mulai: '09:00',
        waktu_selesai: '10:10',
        batas_terakhir_absen: '09:15',
        hari: 1,
        jenis: 'Teori',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari senin (1)
        // ada matkul sw testing (Teori)
        // dosennya Om fullstack (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 3,
        ja: 5,
        jb: 6,
        waktu_mulai: '09:00',
        waktu_selesai: '10:10',
        batas_terakhir_absen: '09:15',
        hari: 1,
        jenis: 'Teori',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari senin (1)
        // ada matkul sw testing (Teori)
        // dosennya Komeng (11111)
        // di kelas 123
        nip: '11111',
        id_perkuliahan: 3,
        ja: 5,
        jb: 6,
        waktu_mulai: '09:00',
        waktu_selesai: '10:10',
        batas_terakhir_absen: '09:15',
        hari: 1,
        jenis: 'Teori',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // hari selasa (2)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11112)
        // di kelas 123
        nip: '11112',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 2,
        jenis: 'Teori',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari selasa (2)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 2,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari rabu (3)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 3,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari rabu (3)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 5,
        jb: 6,
        waktu_mulai: '14:00',
        waktu_selesai: '15:10',
        batas_terakhir_absen: '14:30',
        hari: 3,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari kamis (4)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 4,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari kamis (4)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 5,
        jb: 6,
        waktu_mulai: '14:00',
        waktu_selesai: '15:10',
        batas_terakhir_absen: '14:30',
        hari: 4,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari jumat (5)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 5,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari jumat (5)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 5,
        jb: 6,
        waktu_mulai: '14:00',
        waktu_selesai: '15:10',
        batas_terakhir_absen: '14:15',
        hari: 5,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari sabtu (6)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 6,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari sabtu (6)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 5,
        jb: 6,
        waktu_mulai: '14:00',
        waktu_selesai: '15:10',
        batas_terakhir_absen: '14:15',
        hari: 4,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari minggu (0)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 1,
        jb: 2,
        waktu_mulai: '07:00',
        waktu_selesai: '08:10',
        batas_terakhir_absen: '07:15',
        hari: 0,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        // hari minggu (0)
        // ada matkul pengantar akuntansi (Teori)
        // dosennya adul (11113)
        // di kelas 123
        nip: '11113',
        id_perkuliahan: 4,
        ja: 5,
        jb: 6,
        waktu_mulai: '14:00',
        waktu_selesai: '15:10',
        batas_terakhir_absen: '14:15',
        hari: 0,
        jenis: 'Praktek',
        createdAt: new Date(),
       updatedAt: new Date()
      }
    ])

    // await queryInterface.bulkInsert('daftar_hadir_mahasiswa', [
    //   {
    //     id_studi: 1,
    //     keterlambatan: 0,
    //     tanggal: '2021-05-28',
    //     isHadir: false,
    //     minggu: 4,
    //     bulan: 5,
    //     id_keterangan: null,
    //     createdAt: new Date(),
    //    updatedAt: new Date()
    //   },
    //   {
    //     id_studi: 2,
    //     keterlambatan: 0,
    //     tanggal: '2021-05-28',
    //     isHadir: false,
    //     minggu: 4,
    //     bulan: 5,
    //     id_keterangan: null,
    //     createdAt: new Date(),
    //    updatedAt: new Date()
    //   },
    //   {
    //     id_studi: 3,
    //     keterlambatan: 0,
    //     tanggal: '2021-05-28',
    //     isHadir: false,
    //     minggu: 4,
    //     bulan: 5,
    //     id_keterangan: null,
    //     createdAt: new Date(),
    //    updatedAt: new Date()
    //   }
    // ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('daftar_hadir_mahasiswa', null, {})
    await queryInterface.bulkDelete('Studi', null, {})
    await queryInterface.bulkDelete('Jadwal', null, {})
    await queryInterface.bulkDelete('Mahasiswa', null, {})
    await queryInterface.bulkDelete('Perkuliahan', null, {})
    await queryInterface.bulkDelete('Kelas', null, {})
    await queryInterface.bulkDelete('Mata_Kuliah', null, {})
    await queryInterface.bulkDelete('Program_Studi', null, {})
    await queryInterface.bulkDelete('Jurusan', null, {})
    await queryInterface.bulkDelete('Dosen', null, {})
    await queryInterface.bulkDelete('Jabatan', null, {})
  }
};
