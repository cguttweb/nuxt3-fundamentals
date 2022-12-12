export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false
  if (!userIsLoggedIn) {
    // return abortNavigation("You're not allowed to visit admin!")
    // return navigateTo('/admin')
    // OR USE THIS make sure to use return
    return navigateTo({ path: '/login' })
  }
})
