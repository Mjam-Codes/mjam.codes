<template>
  <div class="pt-5">
    <div class="flex px-36 pb-36 items-center">
      <img
        :src="selectedProjectImageUrl"
        class="my-image w-72 h-96 object-cover"
        alt=""
      >
      <div class="labels p-20 flex flex-col gap-5 font-semibold text-lg">
        <div v-for="project in projects" :key="project.name">
          <input :id="project.name" v-model="selectedProject" hidden type="radio" :value="project.name">
          <label :for="project.name" class="cursor-pointer">
            {{ project.label }}
          </label>
        </div>
      </div>
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

<style scoped>
.my-image {
  filter: drop-shadow(-24px 24px 0 #000000) drop-shadow(-24px 24px 0 #333333);
}
label {
  position: relative;
}
input:checked + label:before {
  font-weight: 800;
  content: '';
  position: absolute;
  height: 1px;
  width: 160px;
  top: 20px;
  left: -170px;
  background: black;
}
</style>
