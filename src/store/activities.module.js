import ApiService from "./api.service";

// Constants for actions and mutations
export const GET_ACTIVITIES = "getActivities";
export const SET_ACTIVITIES = "setActivities";
export const POST_ACTIVITY = "postActivity";
export const PUT_ACTIVITY = "putActivity";
export const DELETE_ACTIVITY = "deleteActivity";

// Define the initial state
const state = {
    activities: [
        {
            image: require('@/assets/image/kegiatan9.png'),
            title: "Ucapan Selamat kepada Seluruh Wisudawan/i IOM-ITB",
            date: "2024-06-05 00:00:00",
            description: "Kepada Yth. Para Orang Tua Wisudawan ITB Assalamualaikum Wr. Wb. Dengan penuh rasa syukur, kami mengucapkan selamat kepada Bapak/Ibu atas pencapaian luar biasa putra putri Bapak/Ibu yang telah menyelesaikan pendidikan di Institut Teknologi Bandung. Ini adalah momen yang sangat membanggakan. Tidak hanya bagi mereka, tetapi juga bagi keluarga yang telah mendukung dan membimbing mereka sepanjang perjalanan studi ini. Keberhasilan para wisudawan tidak terlepas dari kerja keras, dedikasi, dan bimbingan Bapak/Ibu selaku orang tua mereka. Kami percaya bahwa putra putri Bapak/Ibu siap menghadapi tantangan baru di dunia profesional. Semoga prestasi ini menjadi langkah awal menuju kesuksesan yang lebih besar pada masa mendatang. Alhamdulillah, puji syukur ke Hadirat Allah Swt, pada wisuda kali ini juga terdapat sejumlah beswan (penerima beasiswa) dan delapan anak asuh IOM-ITB yang turut berbahagia karena telah menyelesaikan pendidikan di ITB. Keberhasilan mereka tidak terlepas dari kontribusi para orang tua mahasiswa yang telah memercayakan dananya dalam bentuk iuran, sumbangan, bahkan zakat melalui IOM-ITB (www.iom-itb.id/donasi) untuk disalurkan kepada para mahasiswa yang membutuhkan. Semoga hal tersebut menjadi bagian dari amal saleh Bapak/Ibu. Kami menyampaikan terima kasih kepada Bapak/Ibu yang telah menjadi anggota IOM-ITB selama mereka menjadi mahasiswa ITB. Sekali lagi, selamat dan terima kasih atas dukungan dan pengorbanan yang telah diberikan untuk pendidikan para mahasiswa ITB yang merupakan bagian dari generasi Indonesia Emas. Hormat kami, Ketua Umum IOM-ITB 2024-2027 Hendro Setyanto",
            url: "https://www.iom-itb.id/kegiatan"
        },
        {
            image: require('@/assets/image/info.png'),
            title: "INFO PENTING",
            date: "2024-10-13 00:00:00",
            description: "Pengurus ITB GANESHA PAK ABAN Kepala Seksi Keamanan & Ketertiban (K3L ITB GANESHA) +62 813-2000-6576 Pos KEAMANAN 24 JAM ITB GANESHA (022) 2500204 PAK TARYONO Layanan Darurat ITB GANESHA Pengurus ITB JATINANGOR BAMBANG SUTOYO Bagian Kemahasiswaan ITB JATINANGOR +62 895-3706-78392 RIDWAN MUSLIM Pengurus Kemahasiswaan ITB JATINANGOR +62 896-6727-5919 Ambulance ITB JATINANGOR (24 Jam Standby) 1. Afif (K3L ITB Jatinangor) 0813-1496-7460 2. Cahyadi (K3L DKIJ) 0812-2417-6916 3. Dayat (K3L ITB Jatinangor) 0819-1004-6144 Pusat Kesehatan yang bekerja sama dengan ITB JATINANGOR: 1. Klinik Kesehatan Unpad Telp. (022) 7797432 2. Puskesmas Jatinangor Telp. (022) 7796143 Pengurus ITB CIREBON IBU ARMINA (NINA) Kabid UPT Yankes ITB CIREBON +62 811-209-223",
            url: "https://www.iom-itb.id/kegiatan"
        },
        {
            image: require('@/assets/image/kegiatan8.png'),
            title: "Penerima Bantuan Ikatan Orangtua Mahasiswa ITB 2024",
            date: "2024-09-09 00:00:00",
            description: "Terima kasih. Satu ucapan untuk semua uluran tangan dari teman-teman IOM-ITB. Untuk para anggota yang membayar iuran, para donatur yang memberikan sumbangan, dan para pengurus yang melaksanakan semua tahapan hingga dana yang kita kumpulkan dapat tersalurkan melalui Bantuan Biaya IOM-ITB: • Bantuan Biaya UKT untuk 39 orang • Bantuan Biaya Hidup untuk 19 orang • Bantuan Biaya Tugas Akhir untuk 1 orang Total bantuan yang tersalurkan: Rp 268.000.000 (dua ratus enam puluh delapan juta rupiah). Setiap rupiah dan setiap usaha yang kita berikan telah berperan dalam mendukung para mahasiswa ITB menggapai cita-cita mereka. Perjuangan kita belum selesai, masih ada banyak mahasiswa yang berharap untuk terus melanjutkan pendidikan dan menggapai mimpi mereka. Silakan sampaikan kontribusi ke rekening IOM-ITB berikut: Bank Mandiri: 130-001-900-0366 (IOM-ITB) Bank BNI: 0028668954 (IOM-ITB) WEBSITE: www.iom-itb.id INSTAGRAM: https://www.instagram.com/iom_itb WA CHANNEL: https://bit.ly/iomitbwachannel",
            url: "https://kemahasiswaan.itb.ac.id/beranda/read/pengumuman/2347/penerima-bantuan-ikatan-orangtua-mahasiswa-itb-2024"
        },
        {
            image: require('@/assets/image/kegiatan7.png'),
            title: "PSYCHOLOGICAL FIRST AID 2024",
            date: "2024-08-13 00:00:00",
            description: "Psychological First Aid (PFA) ITB 2024: Dukungan Emosional untuk Mahasiswa Baru Salam hangat untuk Mahasiswa Baru ITB 2024! Direktorat Kemahasiswaan ITB akan menyelenggarakan acara Psychological First Aid (PFA) sebagai bagian dari rangkaian Penerimaan Mahasiswa Baru (PMB) 2024. Kegiatan ini bertujuan untuk memberikan edukasi dan dukungan emosional bagi mahasiswa baru dan orang tua dalam menghadapi masa adaptasi di lingkungan perkuliahan. PFA ITB 2024 akan menghadirkan pembicara dari Rumah Sakit Jiwa Provinsi Jawa Barat dan Psikolog BK ITB. Acara ini akan membahas topik-topik penting terkait kesehatan mental mahasiswa baru dan memberikan panduan praktis dalam memberikan pertolongan pertama psikologis. Berikut informasi detail terkait acara ini: Hari/Tanggal: Selasa, 13 Agustus 2024 Waktu: - Sesi 1 (Mahasiswa): 07.30 WIB s.d. 11.30 WIB - Sesi 2 (Orang Tua): 12.30 WIB s.d. 16.00 WIB Tempat: - Luring: Auditorium Lantai 3, GKU 2, Kampus ITB Jatinangor - Daring: Zoom dan Youtube ITB Acara ini akan diadakan secara hybrid sehingga hanya mahasiswa baru terpilih yang akan diundang untuk hadir secara luring pada hari-H nanti. Sebagai pemahaman awal, seluruh peserta diminta untuk mengisi form yang dapat diakses pada H-1 kegiatan. Seluruh Mahasiswa Baru ITB Angkatan 2024 dan orang tua wajib mendaftar PFA ITB. Link pendaftaran dan form dapat diakses melalui: https://linktr.ee/PFAITB2024 https://linktr.ee/PFAITB2024 https://linktr.ee/PFAITB2024 Terima kasih dan sampai jumpa di PFA ITB 2024!",
            url: "https://linktr.ee/PFAITB2024"
        },
        {
            image: require('@/assets/image/kegiatan6.png'),
            title: "Penerimaan Anggota Baru 2024",
            date: "2024-07-24 00:00:00",
            description: 'Sebagaimana layaknya menyambut anggota baru dalam keluarga, Ikatan Orangtua Mahasiswa ITB (IOM-ITB) melaksanakan acara Penerimaan Anggota Baru (PAB) yang merupakan bagian dari rangkaian kegiatan Penyambutan Mahasiswa Baru (PMB) ITB 2024. Acara akan dilaksanakan pada: Jumat, 26 Juli 2024 Pukul 13:30 - 16:00 WIB Dilaksanakan secara Hybrid Meeting ONLINE: Link Zoom akan diberikan sehari sebelum pelaksanaan Selain upacara penerimaan, acara ini juga akan diisi oleh dua talkshow: 💎 KEMAHASISWAAN: "Berbagi Peran dan Sinergi Antara ITB dan Orang Tua," bersama: - Bapak D.Arch .G.P. Adhitama, S.Sn., M.Sn. (Direktur Direktorat Kemahasiswaan ITB) - Bapak Prof. Brian Yuliarto, S.T., M.Eng., Ph.D. (Dekan FTI-ITB, Perwakilan Alumni Beswan IOM-ITB) - Bapak Hendro Setyanto, M.Si (Ketua Umum IOM-ITB 2024-2027) 💎 "Mempersiapkan Generasi Emas Tanpa Cemas Bersama IOM-ITB," bersama: Pembicara Utama: Bapak Ir. Arcandra Tahar, M.Sc., Ph.D. Kedua talkshow akan dipandu oleh: - Bapak D.Sc. (Tech) Imam Santoso, S.T., M.Phil. (Staff Pengajar FTTM ITB, Penulis, Motivator Pendidikan) - Fidella Marwa Huwaida (Presiden Keluarga Mahasiswa ITB periode 2024-2025) Mari bersama hadir untuk memaknai penerimaan menjadi bagian dari Keluarga Besar Ikatan Orangtua Mahasiswa ITB (IOM-ITB).',
            url: "https://www.instagram.com/p/C9woFpyTLgz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: require('@/assets/image/kegiatan5.png'),
            title: "Selamat Ulang Tahun IOM-ITB yang ke-56!",
            date: "2024-10-24 00:00:00",
            description: "Selamat pagi, selamat berakhir pekan. Dengan penuh rasa syukur, hari ini tanggal 14 Juli 2024, IOM-ITB genap berusia 56 tahun sejak pertama kali didirikan pada tanggal 14 Juli 1968.",
            url: "https://www.instagram.com/p/C9YZih3zJUh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: require('@/assets/image/kegiatan4.png'),
            title: "Webinar Spesialisasi Kriya di FSRD ITB",
            date: "2024-07-01 00:00:00",
            description: "Halo para mahasiswa baru FSRD, atau siswa SMA yang akan kuliah di FSRD, dan juga para orang tua yang putra/putrinya kuliah atau akan kuliah di FSRD. Ingin tahu lebih banyak tentang Spesialisasi Kriya di FSRD ITB?",
            url: "https://www.instagram.com/p/C9BbY-0BGaK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: require('@/assets/image/kegiatan3.png'),
            title: "DIKPUS 2024 untuk Mahasiswa ITB 2023",
            date: "2024-06-25 00:00:00",
            description: "Menjadi mahasiswa salah satunya adalah membuka kesempatan untuk berjejaring. Dan mengikuti serta aktif di organisasi kemahasiswaan adalah langkah awal yang baik untuk memperluas.",
            url: "https://www.instagram.com/p/C9GmtXVhT6V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: require('@/assets/image/kegiatan2.png'),
            title: "Pertemuan antara Pengurus Baru dan Mantan Pengurus IOM-ITB di Ruang",
            date: "2024-06-10 00:00:00",
            description: "Rektor ITB Prof. Reini Wirahadikusumah didampingi Sekretaris Institut Prof. Widjaja Martokusumo dan Direktur Direktorat Kemahasiswaan.",
            url: "https://www.instagram.com/p/C8N8dcbhUfz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            image: require('@/assets/image/kegiatan1.png'),
            title: "Donasi Buku IOM-ITB",
            date: "2024-06-05 00:00:00",
            description: "Selamat Hari Lingkungan Hidup Sedunia! Bapak/Ibu Orangtua Mahasiswa ITB yang terhormat, yuk ajak Mahasiswa untuk mendonasikan buku-buku kuliahnya (terutama buku TPB) yang sudah tidak terpakai, agar dapat digunakan lagi oleh Mahasiswa lainnya. Dengan mendonasikan buku-buku, selain memperpanjang manfaat buku tersebut dan membantu Mahasiswa lainnya, kita juga berperan dalam mengurangi jumlah pohon yang ditebang untuk pembuatan kertas. Untuk informasi drop point, donasi, dan juga mendapatkan buku yang dibutuhkan, silakan hubungi kami: - Whatsapp: 0856-2465-4990 - Student Center Timur ITB Lantai 2 - Jl. Ganesha 10, Bandung",
            url: "https://www.instagram.com/p/C70RubxByTG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
    ],
};

// Define getters
const getters = {
    activities(state) {
        return state.activities; // Return the list of activities
    },
};

// Define actions
const actions = {
    [GET_ACTIVITIES](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.get("/activities", params)
                .then(response => {
                    const { data } = response;
                    context.commit(SET_ACTIVITIES, data);
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error fetching activities:", err);
                    reject(err);
                });
        });
    },
    [POST_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.post("/activities", params.data)
                .then(response => {
                    const { data } = response;
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error creating activity:", err);
                    reject(err);
                });
        });
    },
    [PUT_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.put(`/activities/${params.id}`, params.data)
                .then(response => {
                    const { data } = response;
                    resolve(data);
                })
                .catch(err => {
                    console.error("Error updating activity:", err);
                    reject(err);
                });
        });
    },
    [DELETE_ACTIVITY](context, params) {
        return new Promise((resolve, reject) => {
            ApiService.delete(`/activities/${params.id}`)
                .then(() => {
                    resolve();
                })
                .catch(err => {
                    console.error("Error deleting activity:", err);
                    reject(err);
                });
        });
    },
};

// Define mutations
const mutations = {
    [SET_ACTIVITIES](state, data) {
        state.activities = data.data; // Set the state with the fetched activities data
    },
};

// Export the Vuex store module
export default {
    state,
    getters,
    actions,
    mutations,
};
