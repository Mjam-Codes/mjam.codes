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
        { name: 'kulturgenerator', label: 'Kulturgenerator', description: 'An online art gallery based on Nuxtjs and the Strapi CMS.', imageUrl: 'kulturgenerator.png' },
        { name: 'buildingsocialecology', label: 'Building Social Ecology', description: 'An archive of socio-ecologic housing projects build with Wordpress.', imageUrl: 'building-social-ecology.png' },
        { name: 'timesales', label: 'Timesales', description: 'A chatbot shop system build with Nuxtjs, Stripe and the Strapi CMS.', imageUrl: 'timesales.png' }
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
