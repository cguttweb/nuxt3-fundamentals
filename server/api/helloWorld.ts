export default defineEventHandler(event => {
  return {
    // message: getMethod(event) + 'Hello helloWorld',
    message: getQuery(event),
  }
})
