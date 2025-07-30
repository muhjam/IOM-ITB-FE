<template>
    <div>
      <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Grafik</h2>
      <div class="flex flex-col md:flex-row justify-between md:items-center mb-[8px] gap-2 md:px-10">
        <div class="flex gap-2 items-center">
         <button @click="modeHandler('year')" :class="`${mode === 'year' ? 'text-white bg-main' : 'text-main bg-white'} border border-main px-[8px] py-[4px] w-fit h-fit rounded-[5px] text-[14px] md:text-[16px]`">Pertahun</button> <button @click="modeHandler('grade')" :class="`${mode === 'grade' ? 'text-white bg-main' : 'text-main bg-white'} border border-main px-[8px] py-[4px] w-fit h-fit rounded-[5px] text-[14px] md:text-[16px]`">Perangkatan</button>
        </div>
         <div class="w-full md:w-fit h-fit flex">
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] md:text-[16px] rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full px-[8px] py-[4px]" v-model="graphic">
                <option selected value="0">Rekap Semua</option>
                <option value="1">Biaya Hidup</option>
                <option value="2">Tugas Akhir</option>
                <option value="3">UKT</option>
              </select>
         </div>
      </div>
    <div>
        <img :src="mode === 'year' ? data[0].graphic[graphic] : data[1].graphic[graphic]" class="w-full md:px-10 md:py-2" />
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      data: [
        {category: 'year', graphic: [
          require('@/assets/image/grafik-penerimaan-bantuan-iom-2025.png'),
          require('@/assets/image/grafik-rekap-pertahun.png'),
          require('@/assets/image/grafik-biaya-hidup-pertahun.png'),
          require('@/assets/image/grafik-tugas-akhir-pertahun.png'),
          require('@/assets/image/grafik-ukt-pertahun.png')
        ]},
        {category: 'grade', graphic: [
          require('@/assets/image/grafik-rekap-perangkatan.png'),
          require('@/assets/image/grafik-biaya-hidup-perangkatan.png'),
          require('@/assets/image/grafik-tugas-akhir-perangkatan.png'),
          require('@/assets/image/grafik-ukt-perangkatan.png')
        ]}
      ],
      graphic: 0,
      mode: 'year'
    };
  },
  methods:{
    modeHandler(v){
      this.mode = v;
    }
  }
  };
  </script>
  

  