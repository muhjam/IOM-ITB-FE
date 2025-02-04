<template>
    <TableItem :rows="rows" :cols="cols"/>
</template>

<script>
import { formattedDate, formattedPrice } from '@/utils';
import TableItem from './TableItem.vue';
import { GET_DONATIONS } from '@/store/donations.module';

export default {
    name: "TableDonations",
    components: {
        TableItem,
    },
    data() {
        return {
            cols: ['Nama', 'Jumlah', 'Tanggal'],
            rows: []
        };
    },
    async mounted() {
        const res = await this.$store.dispatch(GET_DONATIONS, {
          query: "",
        });
        this.rows = res?.data?.map(v => ({
            Nama: v.name,
            Jumlah: formattedPrice(v.amount),
            Tanggal: formattedDate(v.date)
        }));
    }
};
</script>
