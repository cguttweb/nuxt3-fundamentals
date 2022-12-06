<script setup>
const route = useRoute()
const msg = computed(() => `My route id is ${route.params.id}`)
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
