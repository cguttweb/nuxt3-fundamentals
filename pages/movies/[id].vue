<script setup>
const route = useRoute()
const { data } = await useAsyncData(
  `/movies/${route.params.id}`,
  () => {
    return $fetch(
      `http://www.omdbapi.com/?apikey=3726efc0&i=${route.params.id}`
    )
  },
  {
    // limit options for keys
    pick: ['Plot', 'Title'],
    transform(data) {
      return {
        Plot: data.Plot,
        Title: data.Title,
      }
    },
  }
)
</script>

<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
