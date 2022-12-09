<script setup>
const route = useRoute()
// shorthand for useAsyncData + $fetch = $useFetch
// const { data } = await useAsyncData(
//   `/movies/${route.params.id}`,
//   () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=3726efc0&i=${route.params.id}`
//     )
//   },
//   {
//     // limit options for keys
//     pick: ['Plot', 'Title'],
//     transform(data) {
//       return {
//         Plot: data.Plot,
//         Title: data.Title,
//       }
//     },
//   }
// )
const { data, error } = await useFetch(
  `http://www.omdbapi.com/?apikey=3726efc0&i=${route.params.id}`,
  {
    pick: ['Plot', 'Title', 'Error'],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === 'Incorrect IMDb ID.') {
        showError({ statusCode: 404, statusMessage: 'Page Not Found' })
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
