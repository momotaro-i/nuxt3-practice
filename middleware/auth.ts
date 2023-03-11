export default defineNuxtRouteMiddleware (async(to, from) => {
  if(from.fullPath === "/"){
    return location.href = "/"
  }
})