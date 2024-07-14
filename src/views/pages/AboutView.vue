<template>
  <div class="bg-white pt-[80px] pb-[32px]">
    <h2 class="text-main px-[30px] md:px-[70px] font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">Latar Belakang</h2>
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="w-full px-[30px] md:px-[70px] text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Sejarah</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
        {{ history }}
        </p>
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Fungsi</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
        {{ functionality }}
        </p>
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Maksud dan Tujuan</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
        {{ goals }}
        </p>
      </div>
      <img :src="require('@/assets/image/iom-itb.png')" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20 hidden md:block">
    </div>
  </div>

  <div class="border border-[#003793] w-[90%] mx-auto"></div>

  <div class="bg-white p-[16px] md:p-[24px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Ruang Lingkup Kegiatan IOM-ITB</h2>
    <div class="flex w-full flex-wrap">
     <img :src="require('@/assets/image/lingkup1.png')" class="md:w-1/2" />
     <img :src="require('@/assets/image/lingkup2.png')" class="md:w-1/2" />
    </div>
  </div>

  <div class="bg-white p-[16px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Pembinaan Mahasiswa dan Konseling</h2>
    <div class="flex w-full flex-wrap">
     <img :src="require('@/assets/image/pembinaan1.png')" class="md:w-1/4" />
     <img :src="require('@/assets/image/pembinaan2.png')" class="md:w-1/4" />
     <img :src="require('@/assets/image/pembinaan3.png')" class="md:w-1/4" />
     <img :src="require('@/assets/image/pembinaan4.png')" class="md:w-1/4" />
    </div>
  </div>

  <div class="border border-[#003793] w-[90%] mx-auto"></div>

  <div class="bg-white p-[16px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Keanggotaan IOM</h2>
    <div class="flex w-full flex-wrap">
     <img :src="require('@/assets/image/keanggotaan.png')" />
    </div>
  </div>

  <div class="bg-white p-[16px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Perangkat Organisasi</h2>
    <div class="flex w-full flex-wrap">
      <img :src="require('@/assets/image/perangkat1.png')" class="md:w-1/4" />
     <img :src="require('@/assets/image/perangkat2.png')" class="md:w-1/4" />
     <img :src="require('@/assets/image/perangkat3.png')" class="md:w-1/4" />
     <img :src="require('@/assets/image/perangkat4.png')" class="md:w-1/4" />
    </div>
  </div>

  <div class="border border-[#003793] w-[90%] mx-auto"></div>

  <div class="bg-white p-[16px]">
    <h2 class="text-main px-[30px] md:px-[70px] font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">Pengembang Website IOM-ITB</h2>
    <div class="flex flex-col md:flex-row justify-between items-center">
      <img :src="require('@/assets/image/ayi-purbasari.png')" alt="IOM-ITB" class="w-full block md:hidden md:w-1/2 object-cover p-4 md:p-20">
      <div class="w-full px-[30px] md:px-[70px] text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Dr. Ayi Purbasari, ST., MT.</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
          {{ "NIDN: 0424057201\nId Sinta: 5987512\nId Scopus: 55001755600\nInstagram: ayi.purbasari\n\n" }}
        </p>
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Alumni</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
        {{ "- S1 Informatika ITB\n- S2 Informatika ITB\n- S3 Sekolah Teknik Elektro dan Informatika ITB\n\n" }}
        </p>
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Organisasi</h4>
          <ul class="pl-[20px] list-disc font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
            <li>Asesor BNSP, 2018 – Sekarang (di LSP P1 Unpas)</li>
            <li>Wakil Ketua III Asosiasi Pendidikan Tinggi Informatika dan Komputer (Aptikom) Provinsi Jawa Bara</li>
            <li>Anggota Bidang Publikasi Dosen Asosiasi Pendidikan Tinggi Informatika dan Komputer (APTIKOM PUSAT)</li>
            <li>Evaluator IABEE: Indonesian Accreditation Board for Engineering Education</li>
          </ul>
      </div>
      <img :src="require('@/assets/image/ayi-purbasari.png')" alt="IOM-ITB" class="w-full hidden md:block md:w-1/2 object-cover p-4 md:p-20">
    </div>
  </div>

  <div class="border border-[#003793] w-[90%] mx-auto"></div>

  <div class="bg-white p-[16px]">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <img :src="require('@/assets/image/ida.png')" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20">
      <div class="w-full px-[30px] md:px-[70px] text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Ida Ayu Suci Levi, S.Des</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
          {{ "Branding Development Consultant\nCommunity Development Officer\n\n" }}
        </p>
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Alumni</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
        {{ "- Desain Tekstil FSRD ITB 1993\n\n" }}
        </p>
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Organisasi</h4>
          <ul class="pl-[20px] list-disc font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
            <li>Ketua Pengurus Yayasan Adab Utama Naraloka</li>
            <li>Wakil Ketua Pengurus Yayasan Atirath Kala Tirta</li>
            <li>Pendiri dan Sekretaris Dewan Pengawas Perkumpulan Pergerakan Penyandang Disabilitas dan Lansia (DILANS) Indonesia</li>
            <li>Bidang Humas Ikatan Alumni ITB</li>
          </ul>
      </div>
    </div>
  </div>

  <div class="bg-colorSecond py-[50px] md:py-[104px] px-[20px] md:px-[42px] text-center">
    <div class="mb-[16px] md:mb-[24px]">
      <h4 class="text-[32px] md:text-[50px] text-center text-main font-[800]">Visi</h4>
      <p class="text-[24px] md:text-[40px] text-center text-main max-w-[981px] font-[400] mx-auto">Bersama ITB, melahirkan anak bangsa yang cerdas, tangguh dan berakhlak mulia.</p>
    </div>
    <div class="mb-[16px] md:mb-[24px] text-center">
      <h4 class="text-[32px] md:text-[50px] text-center text-main font-[800]"> MISI</h4>
      <p class="text-[24px] md:text-[40px] text-center text-main max-w-[981px] font-[400] mx-auto">Memotivasi dan membantu mahasiswa ITB untuk mengatasi kendala dalam studinya serta berperan aktif dalam pembinaan watak, kepedulian sosial dan budaya.</p>
    </div>
  </div>
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem.vue";

export default {
  components: {
    HeaderItem,
  },
  setup() {
    return {};
  },
  data() {
    return {
      history:"IOM-ITB merupakan perkumpulan Orang Tua Mahasiswa ITB yang menjadi salah satu mitra Institut Teknologi Bandung.\n\nBerdiri sejak tanggal 14 Juli 1968, dan digagas oleh istri-istri dosen ITB atas dasar kepedulian terhadap kondisi mahasiswa yang terkendala biaya dalam melaksanakan studinya selama perkuliahan berlangsung.\n\nDISAHKAN SEBAGAI BADAN HUKUM : Pada tanggal 16 Desember 1974 berdasarkan: \nSurat Keputusan  Pengadilan Negeri Kelas I Bandung \nNo: 1/1974/PBH/Bdg.\n\n",
      functionality:"IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.\n\n",
      goals:"IOM-ITB bermaksud dan bertujuan ikut serta membina mahasiswa, dengan menjalin hubungan antar sesama orangtua mahasiswa, menghimpun, menampung dan menyalurkan daya dan usaha.",
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.blue {
  border-color: #003A6E;
}
</style>
