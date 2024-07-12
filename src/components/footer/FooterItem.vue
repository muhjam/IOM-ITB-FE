<template>
  <footer class="bg-[#F2F7FC] text-[#003A6E] py-10">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-10">
          <div class="flex items-center mb-4">
            <img :src="require('@/assets/image/logo.png')" alt="IOM-ITB" class="w-[100px] mr-4">
            <div>
              <p class="text-lg font-bold leading-tight">Ikatan Orang Tua Mahasiswa</p>
              <p class="text-sm leading-tight">Institut Teknologi Bandung</p>
            </div>
          </div>
          <p class="mb-4">
            Gedung Kampus Center Barat Lantai 1<br>
            Jl. Ganesa No. 10 Lebak Siliwangi Kec. Coblong Kota Bandung 40132
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
          <h5 class="font-semibold mb-2">PROFIL</h5>
          <ul>
            <li><a href="#" class="hover:underline">Latar Belakang</a></li>
            <li><a href="#" class="hover:underline">Struktur Kepengurusan</a></li>
            <li><a href="#" class="hover:underline">Visi dan Misi</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
          <h5 class="font-semibold mb-2">KONTAK</h5>
          <p>iom.itb@gmail.com</p>
          <p>+62 819-3145-5863</p>
          <div class="flex space-x-4 mt-2">
            <a href="#" class="text-xl"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-xl"><i class="fab fa-facebook"></i></a>
            <a href="#" class="text-xl"><i class="fab fa-line"></i></a>
            <a href="#" class="text-xl"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-xl"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
          <h5 class="font-semibold mb-2">GABUNG BERSAMA KAMI</h5>
          <p class="mb-2">Dengan mengisi formulir ini, Anda dapat mendaftar untuk menerima email kami dan dapat berhenti berlangganan kapan saja.</p>
          <form>
            <input type="email" placeholder="Email" class="w-full px-3 py-2 mb-2 border rounded">
            <button type="submit" class="w-full px-3 py-2 bg-[#003A6E] text-white rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer ul {
  list-style: none;
  padding: 0;
}

footer ul li {
  margin-bottom: 0.5rem;
}

footer ul li a {
  text-decoration: none;
  color: inherit;
}

footer ul li a:hover {
  text-decoration: underline;
}
</style>

