export default defineNuxtRouteMiddleware((to, from) => {
  // this is known as named middleware when middleware directory
  // added .global to filename to make it global meaning it applies whether middleware array is defined on the page or not
  console.log(to, from, 'from named middleware')
})
