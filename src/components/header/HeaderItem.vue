<template>
	<Carousel>
	  <Slide v-for="slide in items" :key="slide">
		<div v-if="slide === 'slide1.mp4'" class="relative h-[30vh] sm:h-[90vh] w-full bg-cover bg-no-repeat">
		  <video class="absolute inset-0 w-full h-full object-cover" autoplay muted playsinline>
			<source src="@/assets/video/slide1.mp4" type="video/mp4">
			Your browser does not support the video tag.
		  </video>
		</div>
		<div v-else class="relative h-[30vh] sm:h-[90vh] w-full bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${require(`@/assets/image/${slide}`)})` }"></div>
	  </Slide>
  
	  <template #addons>
		<Navigation />
	  </template>
	</Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  data() {
    return {
      items: ["slide1.mp4",  "slide6.png", "slide2.png", "slide3.png", "slide4.png", "slide5.png"]
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<style>
  .carousel__item {
	min-height: 200px;
	width: 100%;
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
  }
  
  .carousel__prev,
  .carousel__next {
	box-sizing: content-box;
  }
  
  video {
	border: none; /* Optional: Remove border if any */
  }
  </style>