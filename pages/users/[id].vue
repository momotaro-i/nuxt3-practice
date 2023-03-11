<script setup lang='ts'>
const router = useRoute()
useHead({
  title: `ユーザー${router.params.id}`,
  meta: [{
    name: "description",
    content: `User Id: ${router.params.id}`,
  }]
})

console.log(router.params.id);

</script>

<template>
  <p>ユーザID: {{ $route.params.id }}</p>
</template>
