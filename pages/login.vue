<script setup>
// 1st arg = key to identity the state & 2nd arg is default needs to be returned from callback function
// const isLoggedIn = useState('isLoggedIn', () => false)
// const isLoggedIn = useIsLoggedIn()
const user = useUser()
definePageMeta({
  layout: 'plain',
})
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="user.login">
      <label for="">
        Username
        <input type="text" />
      </label>
      <label for="">
        Password
        <input type="password" autocomplete="test" />
      </label>
      <button>Login</button>
    </form>
  </div>
</template>
