<template>
  <div class="text-center font-medium text-custom-secondary py-5">
    <NuxtLink v-if="$route.name === 'imprint'" to="/">
      Return to homepage
    </NuxtLink>
    <NuxtLink v-else to="/imprint">
      Legal notice & data privacy
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>
