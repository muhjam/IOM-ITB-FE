<template>
    <div class="flex items-center justify-center bg-white">
      <div class="p-6 overflow-scroll px-0">
        <table class="w-full min-w-max table-auto md:min-w-[800px] text-left">
          <thead>
            <tr>
              <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-main font-[800] leading-none">No</p>
              </th>
              <th v-for="(col, index) in cols" :key="index" class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p class="block antialiased font-sans text-sm text-main font-[800] leading-none">{{ col }}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in rows" :key="index">
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{{ index + 1 }}</p>
                </div>
              </td>
              <td v-for="(col, colIndex) in cols" :key="colIndex" class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{{ row[col] }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Table Items",
    props: {
      // Columns for the table
      cols: {
        type: Array,
        required: true
      },
      // Rows data to populate the table
      rows: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  