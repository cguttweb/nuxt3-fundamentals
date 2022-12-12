<script setup>
// 1st arg = key to identity the state & 2nd arg is default needs to be returned from callback function
// const isLoggedIn = useState('isLoggedIn', () => false)
const isLoggedIn = useIsLoggedIn()
definePageMeta({
  layout: 'plain',
})

function login() {
  isLoggedIn.value = true
  useRouter().push('/')
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
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
