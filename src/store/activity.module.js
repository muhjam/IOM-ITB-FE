import ApiService from "./api.service";

export const GET_ACTIVITIES = "getActivities";

const state = {
  activities: [
    {
      image: "kegiatan1.png",
      title: "Donasi Buku IOM-ITB",
      date: "05 Juni 2024",
      description: "Selamat Hari Lingkungan Hidup Sedunia!\nBapak/Ibu Orangtua Mahasiswa ITB yang terhormat, yuk ajak Mahasiswa untuk mendonasikan buku-buku kuliahnya\n (Terutama buku TPB) yang sudah tidak terpakai, untuk dapat digunakan lagi oleh Mahasiswa lainnya.\n Dengan mendonasikan buku-buku, selain memperpanjang manfaat buku-buku tersebut dan membantu Mahasiswa lainnya, kita juga berperan untuk mengurangi jumlah pohon yang ditebang untuk pembuatan kertas.\n Untuk drop point, informasi donasi dan juga mendapatkan buku yang dibutuhkan silakan hubungi kami:\n- Whatsapp: 0856-2465-4990\n- Student Center Timur ITB Lantai 2\n- Jl. Ganesha 10, Bandung",
      url: "https://www.instagram.com/p/C70RubxByTG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      image: "kegiatan2.png",
      title: "Pertemuan antara Pengurus Baru dan Mantan Pengurus IOM-ITB di Ruang",
      date: "10 Juni 2024",
      description: "Rektor ITB Prof. Reini Wirahadikusumah, Ph. D. (ke-4 kiri) didampingi Sekretaris Institut Prof. Dr. Ing. Ir. Widjaja Martokusumo (ke-2 kiri) dan Direktur Direktorat Kemahasiswaan",
      url: "https://www.instagram.com/p/C8N8dcbhUfz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      image: "kegiatan3.png",
      title: "DIKPUS 2024 untuk Mahasiswa ITB 2023",
      date: "25 Juni 2024",
      description: "Menjadi Mahasiswa salah satunya adalah membuka kesempatan untuk berjejaring. \n\nDan mengikuti serta aktif di Organisasi Kemahasiswaan adalah langkah awal yang baik untuk memperluas",
      url: "https://www.instagram.com/p/C9GmtXVhT6V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      image: "kegiatan4.png",
      title: "Webinar Spesialisasi Kriya di FSRD ITB",
      date: "01 Juli 2024",
      description: "Halo para mahasiswa baru FSRD, atau siswa SMA yang akan kuliah di FSRD dan juga para orang tua yang putra/putrinya kuliah/akan kuliah di FSRD\n\nIngin tau lebih banyak tentang Spesialisasi Kriya di FSRD ITB?",
      url: "https://www.instagram.com/p/C9BbY-0BGaK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      image: "kegiatan5.png",
      title: "Selamat Ulang Tahun IOM-ITB yang ke-56!" ,
      date: "24 Juli 2024",
      description: "Selamat pagi, selamat berakhir pekan.\nDengan penuh rasa syukur, hari ini tanggal 14 Juli 2024, IOM-ITB genap berusia 56 tahun sejak pertama kali didirikan pada tanggal 14 Juli 1968.",
      url: "https://www.instagram.com/p/C9YZih3zJUh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
      {
        image: "kegiatan6.png",
        title: "Penerimaan Anggota Baru 2024",
        date: "24 Juli 2024",
        description: "Sebagaimana layaknya menyambut anggota baru yang hadir dalam keluarga, Ikatan Orangtua Mahasiswa ITB (IOM-ITB) melaksanakan acara Penerimaan Anggota Baru (PAB) yang menjadi bagian dari rangkaian kegiatan Penyambutan Mahasiswa Baru (PMB) ITB 2024.\n\nAcara akan dilaksanakan pada :\nJumat, 26 Juli 2024\n13:30 - 16:00 WIB\nDilaksanakan secara Hybrid Meeting\nONLINE : Link Zoom akan diberikan sehari sebelum waktu pelaksanaan\n\nSelain Upacara Penerimaan, acara ini akan diisi oleh 2 _Talkshow_ :\n💎 KEMAHASISWAAN :\nBERBAGI PERAN DAN SINERGI ANTARA ITB DAN ORANG TUA, bersama\n- Bapak D.Arch .G.P. Adhitama,S.Sn.,M.Sn (Direktur Direktorat Kemahasiswaan ITB)\n- Bapak Prof. Brian Yuliarto., S.T., M.Eng.,Ph.D. (Dekan FTI-ITB, Perwakilan Alumni Beswan IOM-ITB)\n- Bapak Hendro Setyanto, M.Si (Ketua Umum IOM-ITB 2024-2027)\n\n💎 MENYIAPKAN GENERASI EMAS TANPA CEMAS BERSAMA IOM-ITB*,\nbersama Pembicara Utama :\n*Bapak Ir. Arcandra Tahar, M.Sc.,Ph.D.\n\nKedua _Talkshow_ akan dipandu oleh\n- Bapak D.Sc. (Tech) Imam Santoso, S.T. M. Phil (Staff Pengajar FTTM ITB, Penulis, Motivator Pendidikan)\n- Fidella Marwa Huwaida (Presiden Keluarga Mahasiswa ITB periode 2024-2025)\n\nMari bersama kita hadir untuk memaknai penerimaan menjadi bagian dari Keluarga Besar Ikatan Orangtua Mahasiswa ITB (IOM-ITB)",
        url: "https://www.instagram.com/p/C9woFpyTLgz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        image: "kegiatan7.png",
        title: "PSYCHOLOGICAL FIRST AID 2024",
        date: "13 Agustus 2024",
        description: "Psychological First Aid (PFA) ITB 2024: Dukungan Emosional untuk Mahasiswa Baru\n\nSalam hangat untuk Mahasiswa Baru ITB 2024!\n\nDirektorat Kemahasiswaan ITB akan menyelenggarakan acara Psychological First Aid (PFA) sebagai bagian dari rangkaian Penerimaan Mahasiswa Baru (PMB) 2024. Kegiatan ini bertujuan untuk memberikan edukasi dan dukungan emosional bagi mahasiswa baru dan orang tua dalam menghadapi masa adaptasi di lingkungan perkuliahan.\n\nPFA ITB 2024 akan hadir dengan pembicara dari Rumah Sakit Jiwa Provinsi Jawa Barat dan Psikolog BK ITB. Acara ini akan membahas topik-topik penting terkait kesehatan mental mahasiswa baru dan memberikan panduan praktis dalam memberikan pertolongan pertama psikologis. Berikut merupakan informasi detail terkait acara ini.\n\nHari/Tanggal: Selasa, 13 Agustus 2024\nWaktu:\nSesi 1 (Mahasiswa): 07.30 WIB s.d. 11.30 WIB\nSesi 2 (Orang Tua): 12.30 WIB s.d. 16.00 WIB\nTempat: \nLuring: Auditoridum Lantai 3, GKU 2, Kampus ITB Jatinangor\nDaring: Zoom dan Youtube ITB\n\nSebagai informasi acara ini akan diadakan secara hybrid sehingga hanya mahasiswa baru terpilih saja yang akan diundang untuk hadir secara luring pada hari-H nanti. Adapun sebagai pemahaman awal, seluruh Peserta diminta untuk mengisi form yang dapat diakses pada H-1 kegiatan. Seluruh Mahasiswa Baru ITB Angkatan 2024 dan orang tua wajib mendaftar PFA ITB.\n\nLink pendaftaran dan form dapat diakses melalui:\nhttps://linktr.ee/PFAITB2024\nhttps://linktr.ee/PFAITB2024\nhttps://linktr.ee/PFAITB2024\n\nTerima kasih dan sampai jumpa di PFA ITB 2024!",
        url: "https://linktr.ee/PFAITB2024"
      },
      {
        image: "kegiatan8.png",
        title: "Penerima Bantuan Ikatan Orangtua Mahasiswa ITB 2024",
        date: "09 September 2024",
        description: "Terima kasih. Satu ucapan untuk semua uluran tangan dari semua teman-teman IOM-ITB. Untuk para anggota yang membayarkan iurannya, untuk para donatur yang memberikan sumbangannya dan untuk para Pengurus yang melaksanakan semua tahapan hingga dana yang kita kumpulkan dapat tersalurkan melalui Bantuan Biaya IOM-ITB:\n• Bantuan Biaya UKT untuk 39 orang\n• Bantuan Biaya Hidup untuk 19 orang\n• Bantuan Biaya Tugas Akhir 1 orang\nTotal jumlah bantuan tersalurkan : Rp 268.000.000 (Dua ratus enam puluh delapan juta rupiah)\n...\nSetiap rupiah dan setiap tetes peluh yang kita berikan telah berperan dalam mengiring langkah para Mahasiswa ITB menggapai cita-cita mulia mereka.\n...\nPerjuangan kita belum selesai, masih ada daftar panjang dari para Mahasiswa yang berharap untuk tidak mengubur mimpi mereka sekarang.\nSilakan sampaikan kontribusi kita ke Rekening IOM-ITB di bawah ini:\nBank Mandiri / 130-001-900-0366 / IOM-ITB\nBank BNI / 0028668954 / IOM-ITB\n*\nWEBSITE www.iom-itb.id\nINSTAGRAM https://www.instagram.com/iom_itb\nWA CHANNEL https://bit.ly/iomitbwachannel",
        url: "https://kemahasiswaan.itb.ac.id/beranda/read/pengumuman/2347/penerima-bantuan-ikatan-orangtua-mahasiswa-itb-2024"
      },
      {
        image: "info.png",
        title: "INFO PENTING",
        date: "13 Oktober 2024",
        description: "Pengurus ITB GANESHA\n\nPAK ABAN \n\nKepala Seksi Keamanan & Ketertiban ( K3L ITB GANESHA )\n+62 813-2000-6576\n\nPos KEAMANAN 24 JAM ITB GANESHA\n( 022 ) 2500204\n\nPAK TARYONO\nLAYANAN DARURAT ITB GANESHA\n\nPengurus ITB JATINANGOR\n\nBAMBANG  SUTOYO \nBagian KEMAHASISWAAN ITB JATINANGOR \n+62 895-3706-78392\n\nRIDWAN MUSLIM Pengurus KEMAHASISWAAN ITB JATINANGOR \n+62 896-6727-5919\n\nAMBULANCE  ITB JATINANGOR ( 24 JAM STANBY)\n\n1.⁠ ⁠Afif ( K3L ITB Jatinangor) \n        081314967460\n\n2.⁠ ⁠Cahyadi ( K3L DKIJ ) \n        081224176916\n\n3.⁠ ⁠Dayat (K3L ITB Jatinangor)\n        081910046144\n\nPusat Kesehatan yg bekerja sama dgn ITB JATINANGOR :\n\n1.⁠ ⁠Klinik Kesehatan Unpad \n       Telp. (022) 7797432\n\n2.⁠ ⁠Puskesmas Jatinangor\n        Telp. (022) 7796143\n\nPengurus ITB CIREBON\n\nIBU ARMINA ( NINA )\nKabid UPT YANKES ITB CIREBON\n+62 811-209-223",
        url: "/kegiatan"
      },
  ],
};

const getters = {
  activities(state) {
    return state.activities;
  },
};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations,
};
