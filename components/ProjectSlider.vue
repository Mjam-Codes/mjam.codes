<template>
  <div class="md:flex md:mx-auto md:max-w-5xl">
    <ClientOnly class="custom-box-shadow md:flex md:items-center">
      <swiper
        ref="swiper"
        class="w-3/4 max-w-xs pl-2.5 md:pl-0 md:max-w-none md:h-128 md:w-1/2 md:mr-16"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="slide in slides"
          :key="slide.key"
          class="swiper-slide"
        >
          <img
            class="swiper-image"
            :src="imageSource(slide.imageUrl)"
            :alt="slide.name"
          />
          <div class="slider-label">
            <div class="md:hidden">{{ slide.name }} –</div>
            {{ slide.description }}
          </div>
        </swiper-slide>
      </swiper>
      <!-- Mobile navigation is a simple brown arrow -->
      <div class="flex justify-end md:hidden">
        <button class="px-5 py-7" @click="nextSlide">
          <MyIcon icon="arrow-right" />
        </button>
      </div>
      <!-- Desktop navigation -->
      <div class="hidden md:flex ml-16 w-1/2">
        <ul class="self-end mb-24">
          <li
            v-for="(slide, index) in slides"
            :key="'pagination_' + slide.key"
            :class="{
              'mb-7': true,
              project: true,
              'project-active': index === activeSlideIndex,
            }"
          >
            <button
              class="font-semibold text-2xl"
              @mouseover="goToSlide(slide)"
            >
              {{ slide.name }}
            </button>
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
      },
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: false,
        // Do not hide backface slides
        maxBackfaceHiddenSlides: 0,
        breakpoints: {
          768: {
            // when window width is >= 768px handle translations with css
            speed: 0,
            spaceBetween: 0,
            virtualTranslate: true,
          },
        },
      },
      activeSlideIndex: 0,
    }
  },
  methods: {
    nextSlide() {
      this.$refs.swiper.$swiper.slideNext()
    },
    goToSlide(slide) {
      // Only change slide when the slide differs from the one that is active
      if (this.activeSlideIndex !== this.slides.indexOf(slide)) {
        this.activeSlideIndex = this.slides.indexOf(slide)
        this.$refs.swiper.$swiper.slideTo(this.activeSlideIndex)
      }
    },
    // Workaround to serve dynamic images from the assets folder
    // https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
    imageSource(fileName) {
      return require(`../assets/${fileName}`)
    },
  },
}
</script>

<style scoped>
/* Base styles for the project slider */
.swiper-slide {
  padding-bottom: 146.5%;
  @apply relative h-0;
}

/* Two transparent overlays to darken the swiper image */
.swiper-slide::before,
.swiper-slide::after {
  content: '';
  @apply absolute w-full h-full z-10 rounded-lg;
}
/* The before-overlay sets a soft gray overlay */
.swiper-slide::before {
  @apply bg-black opacity-10;
}

/* The after-overlay adds a gradient to increase text readibility */
.swiper-slide::after {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 50%
  );
}

.swiper-image {
  @apply absolute w-full h-full object-cover rounded-lg;

  @media screen(md) {
    @apply border border-black;
  }
}

.slider-label {
  @apply absolute text-white z-20 left-6 right-6 text-xl bottom-8 md:text-2xl md:bottom-12;

  @media screen(md) {
    @apply hidden;
  }
}

/* Styles that are concerned with the desktop project slider */
/* Cards are stacked on top of each other */
/* There are four potential states for a card: active, next, prev or none of those*/
@media screen(md) {
  /* Standard state: small and from the darkest gray */
  .swiper-slide {
    /* Use translate3d to increase animation speed by calculating the animation on the GPU */
    transform: translate3d(-30%, 0, 0) scale3d(0.8, 0.8, 1);
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    @apply h-full absolute top-0 right-0 w-9/12 pb-0 z-20;

    &::before {
      transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      @apply opacity-40;
    }
  }

  /* Active state: card is at front, has the maximum scale and its text is visible */
  .swiper-slide-active {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    @apply z-40;

    &::before {
      @apply opacity-10;
    }

    /* Show the description text */
    .slider-label {
      @apply block;
    }
  }

  /* Next state: Card has the middle size and a medium gray */
  .swiper-slide-next,
  /* When the first slide has neither the active, nor the next, nor the prev class, the slider animation is at is end */
  /* This means that the first slide is going to be the next visible card and it has to be styled accordingly */
  .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev):first-child {
    transform: translate3d(-15%, 0, 0) scale3d(0.9, 0.9, 1);
    @apply z-30;

    &::before {
      @apply opacity-30;
    }
  }

  /* Style the desktop navigation menu and its hover styles */
  .project::after {
    content: '';
    width: 11.5rem;
    @apply absolute bg-gray-500 -left-48 bottom-2 z-50 h-px scale-0 transition transform-gpu origin-right ease-out duration-200;
  }

  .project-active {
    @apply relative;
  }

  /* When the project becomes selected, show the line */
  .project-active::after {
    @apply scale-100 transform-gpu;
  }
}
</style>
