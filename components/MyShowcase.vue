<template>
  <div class="pt-5">
    <div class="">
      <ImageSlider :slides="projects"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyShowcase',
  data () {
    return {
      selectedProject: 'kulturgenerator',
      projects: [
        { name: 'kulturgenerator', label: 'kulturgenerator', imageUrl: 'https://xyz.kulturgenerator.org/uploads/large_bombogenese_ein_ganzes_konvolut_0_e88162c8b4.jpeg' },
        { name: 'glashaus', label: 'Glashaus Restaurant', imageUrl: 'https://xyz.kulturgenerator.org/uploads/large_Prinzenrolle_a504f78ecb.jpg' },
        { name: 'timesales', label: 'Timesales Online', imageUrl: 'https://xyz.kulturgenerator.org/uploads/large_401_Musiol_A_HAHAHA_Yellow_Cyan_Magenta_No_20_print_106x76cm_2015_AM_10_02_002_c8aa08bcd8.jpg' }
      ]
    }
  },
  computed: {
    selectedProjectImageUrl () {
      return this.projects.find(url => url.name === this.selectedProject).imageUrl
    }
  }
}
</script>
