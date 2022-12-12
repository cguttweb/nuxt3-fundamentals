<template>
  <div>
    <nav style="display: flex; gap: 15px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    </nav>
    <slot></slot>
  </div>
</template>

<script setup></script>
