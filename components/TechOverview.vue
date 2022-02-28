<template>
  <div class="bg-coffee mb-5 md:mb-20">
    <div class="container mx-auto px-2 py-12">
        <div class="dot"><span class="dot-text">Content</br>Management</br>Systems</span>
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
.dot {
    @apply inline-block h-24 w-24 rounded-full border border-black flex justify-center items-center;
}

.dot-text {
    @apply inline-block text-sm font-mono leading-none;
}
</style>
