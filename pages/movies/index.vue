<script setup>
const query = ref('')
const movies = ref([])

async function search() {
  // destructure search array result from request
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=3726efc0&s=${query.value}`
  )
  movies.value = Search
  console.log(movies)
}
</script>

<template>
  <form @submit.prevent="search">
    <input type="text" name="" id="" v-model="query" />
    <button>Search</button>
  </form>

  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
