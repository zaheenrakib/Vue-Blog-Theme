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
              class="absolute top-0 left-0 w-full h-full object-cover transform scale-105 transition-transform duration-1000"
            >
              <source :src="slide.image" type="video/mp4" />
            </video>
          </template>

          <template v-else>
            <div
              class="absolute top-0 left-0 w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-1000"
              :style="{ backgroundImage: `url(${slide.image})` }"
            ></div>
          </template>

          <!-- ✨ Overlay Gradient -->
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

          <!-- 💡 Text Content -->
          <div class="z-10 text-white max-w-2xl px-4">
            <h1 class="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fade-in">
              {{ slide.title }}
            </h1>
            <p class="text-lg sm:text-xl mb-6 opacity-90 animate-fade-in delay-200">
              {{ slide.description }}
            </p>

            <a
              :href="slide.ctaLink"
              class="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-lg animate-fade-in delay-400"
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
/* ✨ Fade-in animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease forwards;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}

.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}

h1, p {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}
</style>
