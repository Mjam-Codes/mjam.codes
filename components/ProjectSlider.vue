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
          :key="slide.key"
          class="relative h-0 pb-2/3"
        >
          <div class="image-overlay absolute w-full h-full bg-black opacity-20 rounded-lg z-10 md:border md:border-black"></div>
          <img class="absolute w-full h-full object-cover rounded-lg" :src="imageSource(slide.imageUrl)" :alt="slide.name">
          <div class="absolute bottom-10 left-10 right-10 text-white text-2xl z-20">
            <div class="md:hidden">{{ slide.name }} – </div>{{slide.description}}
          </div>
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
            v-for="(slide, index) in slides"
            :key="'pagination_' + slide.key"
            :class="{ 'mb-7': true, 'project': true, 'project-active': index ===  activeSlideIndex }"
          >
            <button class="font-semibold text-2xl" @click="goToSlide(slide)">{{ slide.name }}</button>
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
          768: { // when window width is >= 768px handle translations with css
            speed: 0,
            spaceBetween: 0,
            virtualTranslate: true
          }
        }
      },
      activeSlideIndex: 0,
    }
  },
  methods: {
    nextSlide () {
      this.$refs.swiper.$swiper.slideNext()
    },
    goToSlide(slide) {
      this.activeSlideIndex = this.slides.indexOf(slide)
      this.$refs.swiper.$swiper.slideTo(this.activeSlideIndex)
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

  .project::after {
    content: '';
    transition: left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    @apply absolute bg-black left-0 w-0 bottom-2 z-50 h-px;
  }

  .project-active {
    @apply relative;
  }

  .project-active::after {
    width: 13.5rem;
    @apply -left-56;
  }

  .swiper-container {
    width: 50%;
    height: 481px;
    @apply flex mr-16;
  }

   /* Swiper slide has four potential states: active, next, prev or none of those*/
  .swiper-slide {
    width: 75%;
    padding-bottom: 100%;
    position: absolute;
    top: 0;
    /* Set the small card size as a default*/
    z-index: 20;
    right: 20%;
    transform: scale3d(0.8, 0.8, 1);
  }

  /* The active card is always at front */
  .swiper-slide-active {
    z-index: 40;
    right: 0;
    transform: scale3d(1, 1, 1);
  }

  /* The next card has the middle size */
  .swiper-slide-next {
    z-index: 30;
    right: 10%;
    transform: scale3d(0.9, 0.9, 1);
  }

  /* If the first swiper-slide child has neither the active, next or prev class */
  /* The animation is at its end and therefore the next and medium sized card is the first one */
  .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev):first-child {
    z-index: 30;
    right: 10%;
    transform: scale3d(0.9, 0.9, 1);
  }
}
</style>
