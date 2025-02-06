<template>
  <div class="bg-colorSecond pb-[32px] px-[18px] md:px-[70px]">
  <div class="privacy-policy">
    <h1 class="font-[600] text-[24px] mb-[8px]">Kebijakan Privasi</h1>
    <p>
      Kami menghargai privasi Anda dan berkomitmen untuk melindungi Data Pribadi Anda. Berikut adalah kebijakan terkait pengakhiran dan penghapusan data di situs kami, sesuai dengan peraturan yang berlaku.
    </p>

    <section v-for="(policy, index) in policies" :key="index">
      <h2>{{ policy.title }}</h2>
      <p v-for="(detail, i) in policy.details" :key="i">{{ detail }}</p>
    </section>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      policies: [
        {
          title: "Pasal 40 - Penghentian Pemrosesan Data",
          details: [
            "Pengendali Data Pribadi di situs ini akan menghentikan pemrosesan Data Pribadi apabila Subjek Data Pribadi menarik kembali persetujuan pemrosesan Data Pribadi.",
            "Penghentian pemrosesan ini akan dilakukan paling lambat 3 x 24 jam sejak menerima permintaan penarikan kembali persetujuan tersebut."
          ]
        },
        {
          title: "Pasal 42 - Pengakhiran Pemrosesan Data",
          details: [
            "Pemrosesan Data Pribadi akan diakhiri dalam hal:",
            "- Data telah mencapai masa retensi yang ditentukan;",
            "- Tujuan pemrosesan Data Pribadi telah tercapai; atau",
            "- Terdapat permintaan langsung dari Subjek Data Pribadi."
          ]
        },
        {
          title: "Pasal 43 - Penghapusan Data",
          details: [
            "Data Pribadi akan dihapus dalam kondisi sebagai berikut:",
            "- Data tidak lagi diperlukan untuk tujuan pemrosesan yang telah ditetapkan;",
            "- Subjek Data Pribadi menarik persetujuan pemrosesan;",
            "- Terdapat permintaan dari Subjek Data Pribadi untuk menghapus data; atau",
            "- Data diperoleh atau diproses dengan cara yang melawan hukum."
          ]
        },
        {
          title: "Pasal 44 - Penghapusan Data Setelah Masa Retensi",
          details: [
            "Data Pribadi akan dihapus jika masa retensinya telah habis sesuai jadwal retensi arsip yang berlaku.",
            "Selain itu, penghapusan dapat dilakukan jika ada permintaan dari Subjek Data Pribadi, berdasarkan peraturan perundang-undangan, atau jika data tersebut diperoleh atau diproses dengan cara yang melanggar hukum."
          ]
        }
      ]
    };
  }
};
</script>

<style>
.privacy-policy {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.privacy-policy h1 {
  text-align: center;
  color: #333;
}

.privacy-policy section {
  margin: 20px 0;
}

.privacy-policy h2 {
  color: #d32f2f;
  font-weight: bold;
}

.privacy-policy p {
  margin-bottom: 10px;
  line-height: 1.6;
}
</style>
