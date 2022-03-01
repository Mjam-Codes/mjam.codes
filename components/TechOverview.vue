<template>
  <div class="bg-coffee mb-5 md:mb-20">
    <div class="dot-container">
        <div class="dot-title">
          what we offer
        </div>
        <div class="dot dot--cms dot--l">
            <span class="dot-text">Content</br>Management</br>Systems</span>
        </div>
        <div class="dot dot--strapi dot--s"><span class="dot-text">Strapi</span></div>
        <div class="dot dot--html dot--xl">
            <span class="dot-text">HTML, CSS</br>JavaScript</span>
        </div>
        <div class="dot dot--psql dot--xs">
            <span class="dot-text">PosgreSQL</span>
        </div>
        <div class="dot dot--mysql dot--xs">
            <span class="dot-text">MySQL</span>
        </div>
        <div class="dot dot--server dot--l">
            <span class="dot-text">Hosting &</br>Server</br>Setup</span>
        </div>
        <div class="dot dot--frontend dot--l">
            <span class="dot-text">Frontend</br>Frameworks</span>
        </div>
        <div class="dot dot--vue dot--xs">
            <span class="dot-text">Vue</span>
        </div>
        <div class="dot dot--nuxt dot--m">
            <span class="dot-text">NuxtJS</span>
        </div>
        <div class="dot dot--next dot--xxs">
            <span class="dot-text">Nextjs</span>
        </div>
        <div class="dot dot--react dot--xs">
            <span class="dot-text">React</span>
        </div>
        <div class="dot dot--d3 dot--xs">
            <span class="dot-text">D3js</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechOverview',
}
</script>

<style scoped>
.dot-container {
    height: 35.125rem;
    max-width: 25rem;
    @apply mx-auto relative;

    @media screen(md) {
      max-width: 60rem;
      height: 33.1875rem;
    }

    @media screen(xl) {
      max-width: 80rem;
    }
}

.dot-title {
  display: none;

  @media screen(md) {
    display: inline-block;
    position: absolute;
    top: 8%;
    left: 20%;

    &::after {
      position: absolute;
      top: 2rem;
      left: 50%;
      display: block;
      content: '';
      height: 36px;
      width: 25px;
      background-image: url("../assets/arrow.svg");
    }
  }
}

.dot {
  @apply absolute inline-block rounded-full border border-black flex justify-center items-center;
}

/* Make height match the dynamic width of the circles */
.dot::before {
  content: '';
  margin-top: 100%;
}

.dot-text {
  @apply inline-block text-xs leading-none font-medium px-2;
}

/* Vary the sizes of the circles */
.dot {
  &--xl {
    width: 33.6%;

    @media screen(md) {
      width: 13.1%;
    }
  }

  &--l {
    width: 25.9%;

    @media screen(md) {
      width: 9%;
    }
  }

  &--m {
    width: 16.3%;

    @media screen(md) {
      width: 6.4%;
    }
  }

  &--s {
    width: 15.6%;

    @media screen(md) {
      width: 5%;
    }
  }

  &--xs {
    width: 13.6%;

    @media screen(md) {
      width: 4%;
    }
  }

  &--xxs {
    width: 10.7%;

    @media screen(md) {
      width: 3.6%;
    }
  }
}

/* Position the circles in an absolute way */
.dot--cms {
  top: 10%;
  left: 4.8%;

  @media screen(md) {
    top: 60.4%;
    left: 37.8%;
  }
}

.dot--strapi {
  top: 21.7%;
  left: 28.3%;

  @media screen(md) {
    top: 72.6%;
    left: 47.2%;
  }
}

.dot--html {
  top: 7.5%;
  left: 57.1%;

  @media screen(md) {
    top: 21.8%;
    left: 34.6%;
  }
}

.dot--psql {
  top: 33.5%;
  left: 43%;
  @apply justify-start;

  @media screen(md) {
    top: 64.3%;
    left: 19.2%;
  }
}

.dot--mysql {
  top: 42.7%;
  left: 50.1%;

  @media screen(md) {
    top: 73.9%;
    left: 22.8%;
  }
}

.dot--server {
  top: 36.1%;
  left: 65.3%;

  @media screen(md) {
    top: 29.8%;
    left: 25%;
  }
}

.dot--frontend {
  top: 59.4%;
  left: 36.5%;

  @media screen(md) {
    top: 41.6%;
    left: 59.6%;
  }
}

.dot--vue {
  top: 69%;
  left: 17.1%;

  @media screen(md) {
    top: 32.9%;
    left: 69.2%;
  }
}

.dot--nuxt {
  top: 78.5%;
  left: 40.3%;

  @media screen(md) {
    top: 24.4%;
    left: 60.3%;
  }
}

.dot--next {
  top: 74.7%;
  left: 58.4%;
  @apply justify-start;

  @media screen(md) {
    display: none;
  }
}

.dot--react {
  top: 65.1%;
  left: 64.7%;

  @media screen(md) {
    top: 47.5%;
    left: 71.4%;
  }
}

.dot--d3 {
  top: 86.7%;
  left: 69.9%;

  @media screen(md) {
    top: 60.4%;
    left: 68.1%;
  }
}

</style>
