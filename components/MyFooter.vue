<template>
  <div
    class="text-center font-medium pb-5 leading-tight text-custom-secondary-500"
  >
    <NuxtLink
      v-if="$route.name === 'imprint'"
      class="hover:text-custom-secondary-700"
      to="/"
    >
      Return to <br class="md:hidden" />homepage
    </NuxtLink>
    <NuxtLink v-else class="hover:text-custom-secondary-700" to="/imprint">
      Legal notice & <br class="md:hidden" />data privacy
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
}
</script>
