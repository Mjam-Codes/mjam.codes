<template>
  <div class="md:hidden">
    <ClientOnly>
      <swiper
        ref="swiper"
        class="w-3/4 md:w-1/3"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="slide.name"
          class="relative h-0 pb-3/2"
        >
          <div class="image-overlay absolute w-full h-full bg-black opacity-20 rounded-lg z-10"></div>
          <img class="absolute w-full h-full object-cover rounded-lg" :src="imageSource(slide.imageUrl)" :alt="slide.label">
          <span class="absolute bottom-10 left-10 right-10 text-white text-2xl z-20">{{ slide.label }} – </br>{{slide.description}}</span>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </ClientOnly>
    <div class="flex justify-end">
      <button class="p-5" @click="nextSlide">
        <MyIcon icon="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    slides: Array
  },
  data () {
    return {
      swiperOption: {
        // slidesPerView: 1,
        slidesOffsetBefore: 40,
        spaceBetween: 40,
        // slidesPerGroup: 1,
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          // prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          // 1024: {
          //   slidesPerView: 4,
          //   spaceBetween: 10
          // },
          // 768: {
          //   slidesPerView: 3,
          //   spaceBetween: 10
          // },
          // 640: {
          //   slidesPerView: 2,
          //   spaceBetween: 10
          // },
          // 320: {
          //   slidesPerView: 1,
          //   spaceBetween: 10
          // }
        }
      }
    }
  },
  methods: {
    nextSlide () {
      this.$refs.swiper.$swiper.slideNext()
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

.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}

.slick-current .my-image {
  filter: drop-shadow(-24px 24px 0 #000000) drop-shadow(-24px 24px 0 #333333);
}

</style>
