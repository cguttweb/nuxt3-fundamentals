<script setup>
const route = useRoute()
const { data } = await useAsyncData(() => {
  return $fetch(`http://www.omdbapi.com/?apikey=3726efc0&i=${route.params.id}`)
})
</script>

<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
