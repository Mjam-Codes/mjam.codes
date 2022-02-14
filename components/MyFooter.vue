<template>
  <div class="text-center font-medium text-custom-secondary py-5">
    <NuxtLink v-if="$route.name === 'imprint'" to="/">
      Return to homepage
    </NuxtLink>
    <NuxtLink v-else to="/imprint">
      Legal notice & <br class="mobile-break">data privacy
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>

<style scoped>
@media screen(md) {
  .mobile-break {
    display: none
  }
}
</style>
