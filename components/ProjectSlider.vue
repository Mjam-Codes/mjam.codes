<template>
  <div class="md:flex md:mx-auto md:max-w-5xl">
    <ClientOnly class="custom-box-shadow md:flex md:items-center">
      <swiper
        ref="swiper"
        class="w-3/4"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="slide.name"
          class="relative h-0 pb-2/3"
        >
          <div class="image-overlay absolute w-full h-full bg-black opacity-20 rounded-lg z-10 md:border md:border-black"></div>
          <img class="absolute w-full h-full object-cover rounded-lg" :src="imageSource(slide.imageUrl)" :alt="slide.label">
          <span class="absolute bottom-10 left-10 right-10 text-white text-2xl z-20">{{ slide.label }} – </br>{{slide.description}}</span>
        </swiper-slide>
      </swiper>
      <!-- Mobile navigation is a simple arrow -->
      <div class="flex justify-end md:hidden">
        <button class="px-5 py-7" @click="nextSlide">
          <MyIcon icon="arrow-right" />
        </button>
      </div>
      <!-- Desktop navigation -->
      <div class="hidden md:flex ml-16 w-1/2">
        <ul class="self-center">
          <li
            v-for="slide in slides"
            :key="'pagination_' + slide.name"
            class="mb-7"
          >
            <button class="font-semibold text-2xl" @click="goToSlide(slide)">{{ slide.label }}</button>
          </li>
        </ul>
      </div>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'ProjectSlider',
  props: {
    slides: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: false,
        breakpoints: {
          768: { // when window width is >= 768px show no transitions
            speed: 0,
            spaceBetween: 0,
          }
        }
      }
    }
  },
  methods: {
    nextSlide () {
      this.$refs.swiper.$swiper.slideNext()
    },
    goToSlide(slide) {
      this.$refs.swiper.$swiper.slideTo(this.slides.indexOf(slide))
    },
    // Workaround to serve dynamic images from the assets folder
    // https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
    imageSource (fileName) {
      return require(`../assets/${fileName}`)
    }
  }
}
</script>

<style scoped>
.swiper-button-next {
  bottom: 0 !important;
}

.swiper-slide-active .image-overlay {
  @apply opacity-20;
}

@media screen(md) {
  .swiper-container {
    width: 50%;
    height: 481px;
    @apply flex mr-16;
  }

  .swiper-slide {
    width: 75%;
    padding-bottom: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .swiper-slide:nth-child(1) {
    z-index: 90;
  }

  .swiper-slide:nth-child(2) {
    z-index: 60;
    right: 10%;
    transform: scale3d(0.9, 0.9, 1);
  }

  .swiper-slide:nth-child(3) {
    z-index: 30;
    right: 20%;
    transform: scale3d(0.8, 0.8, 1);
  }
}
</style>
