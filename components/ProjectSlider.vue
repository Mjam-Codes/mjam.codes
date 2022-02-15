<template>
  <div class="custom-box-shadow md:flex md:items-center">
    <ClientOnly class="custom-box-shadow md:flex md:items-center">
      <swiper
        ref="swiper"
        class="w-3/4 md:w-1/3 md:overflow-hidden"
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
      <div class="hidden flex-col gap-10 pagination mt-16 ml-32 md:flex">
        <button
          v-for="slide in slides"
          :key="'pagination_' + slide.name"
          class="text-left"
          @click="goToSlide(slide)"
        >
          <div class="font-semibold text-2xl">
            {{ slide.label }}
          </div>
        </button>
      </div>
      <div class="flex justify-end md:hidden">
        <button class="px-5 py-7" @click="nextSlide">
          <MyIcon icon="arrow-right" />
        </button>
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
        spaceBetween: 40,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          clickable: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: { // when window width is >= 768px show no transitions
            speed: 0,
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

/* Styles for the desktop version of the slider */
@media screen and (min-width: 768px) {
  .custom-box-shadow {
    position: relative;
    margin-left: 20vw;
  }
  .custom-box-shadow:before {
    position:absolute;
    content: '';
    width: 2vw;
    height: 90%;
    background: black;
    left: -2vw;
    border-radius: 10px 0 0 10px;
  }
  .custom-box-shadow:after {
    position:absolute;
    content: '';
    width: 2vw;
    height: 80%;
    background: rgba(0,0,0, .7);
    left: -4vw;
    border-radius: 10px 0 0 10px;
  }
}
</style>
