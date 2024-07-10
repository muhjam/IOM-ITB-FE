import { createApp } from 'vue';
import App from './App.vue';
import { createMetaManager } from 'vue-meta';

const app = createApp(App);
app.use(createMetaManager()); // Menggunakan vue-meta
app.mount('#app');