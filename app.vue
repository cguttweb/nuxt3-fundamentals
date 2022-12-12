<script setup>
useHead({
  // title: 'My Movie Site',
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - My Movie Site` : 'My Movie Site'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
