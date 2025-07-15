<template>
  <section class="relative">
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :pagination="{ clickable: true }"
      class="h-[1200px] sm:h-[650px] w-full"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-full flex items-center justify-center text-center px-4 overflow-hidden">

          <!-- 🔁 Video or Image Background -->
          <template v-if="slide.image.endsWith('.mp4')">
            <video
              autoplay
              muted
              loop
              playsinline
              class="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source :src="slide.image" type="video/mp4" />
            </video>
          </template>

          <template v-else>
            <div
              class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              :style="{ backgroundImage: `url(${slide.image})` }"
            ></div>
          </template>

          <!-- Overlay -->
          <div class="absolute top-0 left-0 w-full h-full bg-opacity-50"></div>

          <!-- Text Content -->
          <div class="z-10 text-white max-w-2xl">
            <h1 class="text-3xl sm:text-5xl font-bold mb-4">{{ slide.title }}</h1>
            <p class="text-lg sm:text-xl mb-6">{{ slide.description }}</p>
            <a
              :href="slide.ctaLink"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
            >
              {{ slide.ctaText }}
            </a>
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  {
    image: 'https://videos.pexels.com/video-files/12659228/12659228-uhd_2560_1440_60fps.mp4',
    title: 'Welcome to Our Tech World',
    description: 'We build cutting-edge digital experiences for modern brands.',
    ctaText: 'Get Started',
    ctaLink: '#',
  },
  {
    image: 'https://videos.pexels.com/video-files/854695/854695-hd_1920_1080_30fps.mp4',
    title: 'Innovation at Its Best',
    description: 'Delivering solutions with excellence and innovation.',
    ctaText: 'Explore Now',
    ctaLink: '#services',
  },
  {
    image: 'https://videos.pexels.com/video-files/4769557/4769557-uhd_2732_1440_25fps.mp4',
    title: 'Empowering Startups',
    description: 'Helping startups scale with tailored tech solutions.',
    ctaText: 'Contact Us',
    ctaLink: '#contact',
  },
]
</script>

<style scoped>
h1, p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}
</style>
