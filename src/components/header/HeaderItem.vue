<template>
	<Carousel class="mt-[80px]">
	  <Slide v-for="slide in 4" :key="slide">
		<div class="relative h-[30vh] sm:h-[90vh] w-full bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${require(`@/assets/image/slide${slide}.png`)})` }"></div>
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
  </style>
  