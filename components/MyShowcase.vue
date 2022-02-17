<template>
  <div class="pt-5 md:pb-10 md:pt-0">
    <ProjectSlider :slides="projects"/>
  </div>
</template>

<script>
export default {
  name: 'MyShowcase',
  data () {
    return {
      projects: [
        { key: 'kulturgenerator', name: 'Kulturgenerator', description: 'An online art gallery based on Nuxtjs and the Strapi CMS.', imageUrl: 'kulturgenerator.png' },
        { key: 'timesales', name: 'Timesales Online', description: 'A chatbot shop system build with Nuxtjs, Stripe and the Strapi CMS.', imageUrl: 'timesales.png' },
        { key: 'buildingsocialecology', name: 'Building Social Ecology', description: 'An archive of socio-ecologic housing projects build with Wordpress.', imageUrl: 'building-social-ecology.png' }
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
