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
        { name: 'kulturgenerator', label: 'Kulturgenerator', imageUrl: 'kulturgenerator.png' },
        { name: 'buildingsocialecology', label: 'Building Social Ecology', imageUrl: 'building-social-ecology.png' },
        { name: 'timesales', label: 'Timesales Online', imageUrl: 'timesales.png' }
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
