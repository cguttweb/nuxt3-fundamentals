import { defineStore, acceptHMRUpdate } from 'pinia'
// need to look at Pinia store
export const useUser = defineStore('User', {
  state: () => {
    return {
      isLoggedIn: false,
    }
  },
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true
      useRouter().push('/')
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
